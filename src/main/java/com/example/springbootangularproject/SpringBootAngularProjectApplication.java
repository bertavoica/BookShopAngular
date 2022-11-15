package com.example.springbootangularproject;

import com.example.springbootangularproject.models.Book;
import com.example.springbootangularproject.repositories.BookRepository;
import io.split.client.SplitClient;
import io.split.client.SplitClientConfig;
import io.split.client.SplitFactory;
import io.split.client.SplitFactoryBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class SpringBootAngularProjectApplication {
    @Bean
    ApplicationRunner init(BookRepository repository) {
        // Save our starter set of books
        return args -> {
            Stream.of(new Book(null, "Horton Hears a Who", "Dr. Seuss"), new Book(null, "A Brief History of Time", "Stephen Hawking"),
                    new Book(null, "Brave New World", "Aldous Huxley")).forEach(repository::save);
            //retrieve them all, and print so that we see everything is wired up correctly
            repository.findAll().forEach(System.out::println);
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootAngularProjectApplication.class, args);
    }
}
