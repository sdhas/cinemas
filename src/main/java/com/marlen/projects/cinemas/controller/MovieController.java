package com.marlen.projects.cinemas.controller;

import com.marlen.projects.cinemas.domain.Movie;
import com.marlen.projects.cinemas.orchestrator.MovieOrchestrator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class MovieController {

    @Resource
    private MovieOrchestrator movieOrchestrator;
    @GetMapping(value = "/movies")
    public List<Movie> getAllMovies() {

        return movieOrchestrator.getAllMovies();

    }
    @PostMapping(value = "/movie")
    public Movie addMovie(@RequestBody Movie movie){
        return movieOrchestrator.addMovie(movie);
    }
}
