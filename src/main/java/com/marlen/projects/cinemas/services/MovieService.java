package com.marlen.projects.cinemas.services;

import com.marlen.projects.cinemas.domain.Movie;

import java.util.List;

public interface MovieService {
    List<Movie> getAllMovies();

    Movie addMovie(Movie movie);
}
