import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../book-service.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) {
  }

  updateForm: FormGroup;

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    this.bookService.updateBook(this.updateForm.value)
      .subscribe(data => {
        this.router.navigate(['list-books']);
      });
  }

}
