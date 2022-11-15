package com.example.springbootangularproject.controllers;

import com.example.springbootangularproject.models.Book;
import com.example.springbootangularproject.repositories.BookRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:4200") //since we’re just working locally
public class BookController {

    BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping()
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable("id") Long id) {
        return bookRepository.findById(id).orElse(new Book());
    }

    @PostMapping()
    public HttpStatus addBook(@RequestBody Book book){
        bookRepository.save(book);

        return HttpStatus.CREATED;
    }

    @DeleteMapping("/{id}")
    public Iterable<Book> deleteBook(@PathVariable("id") Long id) {
        bookRepository.deleteById(id);
        return getBooks();
    }

    @PutMapping()
    public HttpStatus updateBook(@RequestBody Book book){
        var optDatabaseBook = bookRepository.findById(book.getId());
        if (optDatabaseBook.isPresent()) {
            var databaseBook = optDatabaseBook.get();
            databaseBook.setAuthor(book.getAuthor());
            databaseBook.setTitle(book.getTitle());
            bookRepository.save(databaseBook);
        }

        return HttpStatus.CREATED;
    }
}
