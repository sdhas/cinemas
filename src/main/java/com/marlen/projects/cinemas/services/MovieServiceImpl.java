package com.marlen.projects.cinemas.services;

import com.marlen.projects.cinemas.domain.Movie;
import com.marlen.projects.cinemas.mapper.MovieMapper;
import com.marlen.projects.cinemas.repository.MovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieServiceImpl implements MovieService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        logger.info("Getting all movies!");
        return movieRepository.findAll().stream().map(MovieMapper::mapMovieEntityToMovieModel).collect(Collectors.toList());
    }

    @Override
    public Movie addMovie(Movie movie) {
        logger.info("Add movie {} , id {}, theatre {}", movie.getName(), movie.getId(), movie.getTheatreName());
        com.marlen.projects.cinemas.entity.Movie movieEntity = movieRepository.save(MovieMapper.mapMovieModelToMovieEntity(movie));
        return MovieMapper.mapMovieEntityToMovieModel(movieEntity);
    }
}
