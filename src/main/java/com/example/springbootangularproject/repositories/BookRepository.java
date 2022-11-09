package com.example.springbootangularproject.repositories;

import com.example.springbootangularproject.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
}
