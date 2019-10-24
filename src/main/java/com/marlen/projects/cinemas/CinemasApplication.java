package com.marlen.projects.cinemas;

import com.marlen.projects.cinemas.entity.Movie;
import com.marlen.projects.cinemas.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Resource;

@SpringBootApplication
public class CinemasApplication {
@Resource
private MovieRepository movieRepository;
	public static void main(String[] args) {
		SpringApplication.run(CinemasApplication.class, args);
	}
}
