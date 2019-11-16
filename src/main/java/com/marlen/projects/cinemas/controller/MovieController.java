package com.marlen.projects.cinemas.controller;

import com.marlen.projects.cinemas.domain.Movie;
import com.marlen.projects.cinemas.orchestrator.MovieOrchestrator;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class MovieController {

    @Resource
    private MovieOrchestrator movieOrchestrator;
    @GetMapping(value = "/allmovies")
    public List<Movie> getAllMovies() {

        return movieOrchestrator.getAllMovies();

    }
}
