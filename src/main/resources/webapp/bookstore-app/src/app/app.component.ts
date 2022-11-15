import {Component, OnInit} from '@angular/core';
import {Book} from './book/book';
import {BookService} from './book/book-service.service';
import {Router} from "@angular/router";
// import {SplitioService} from "./splitio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'BookStore';
  books: Book[];
  book: any;
  id: number;

  constructor(
    private router: Router,
    private bookService: BookService,
) {
  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  deleteBook(): void{
    this.bookService.deleteBook(this.id).subscribe(data => {
      this.books = data;
    });
    this.router.navigate(['list-books']).then(e =>
    {
      if (e) {
        console.log("Navigation is successful! Book deleted");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getBooks();
    });
  }

  updateBook() {
    this.router.navigate(['update-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  }
}
