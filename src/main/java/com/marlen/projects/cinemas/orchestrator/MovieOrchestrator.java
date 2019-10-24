package com.marlen.projects.cinemas.orchestrator;

import com.marlen.projects.cinemas.domain.Movie;
import com.marlen.projects.cinemas.services.MovieService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class MovieOrchestrator {

    @Resource
    MovieService movieService;

    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    public Movie addMovie(Movie movie) {
       return movieService.addMovie(movie);
    }
}
