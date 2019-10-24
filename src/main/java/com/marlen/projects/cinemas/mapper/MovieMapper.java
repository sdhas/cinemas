package com.marlen.projects.cinemas.mapper;

import com.marlen.projects.cinemas.domain.Movie;

public final class MovieMapper {
    public static Movie mapMovieEntityToMovieModel(com.marlen.projects.cinemas.entity.Movie movieEntity) {
        Movie movie = new Movie();
        movie.setId(movieEntity.getId());
        movie.setName(movieEntity.getName());
        movie.setTheatreName(movieEntity.getTheatreName());
        movie.setShowTime(movieEntity.getShowTime());
        movie.setImageUrl(movieEntity.getImageUrl());
        movie.setImageBannerUrl(movieEntity.getImageBannerUrl());
        movie.setImageTilesUrl(movieEntity.getImageTilesUrl());
        movie.setLanguage(movieEntity.getLanguage());
        movie.setCertificate(movieEntity.getCertificate());
        return movie;
    }

    public static com.marlen.projects.cinemas.entity.Movie mapMovieModelToMovieEntity(Movie movieModel) {
        com.marlen.projects.cinemas.entity.Movie movie = new com.marlen.projects.cinemas.entity.Movie();
        movie.setId(movieModel.getId());
        movie.setName(movieModel.getName());
        movie.setTheatreName(movieModel.getTheatreName());
        movie.setShowTime(movieModel.getShowTime());
        movie.setImageUrl(movieModel.getImageUrl());
        movie.setImageBannerUrl(movieModel.getImageBannerUrl());
        movie.setImageTilesUrl(movieModel.getImageTilesUrl());
        movie.setLanguage(movieModel.getLanguage());
        movie.setCertificate(movieModel.getCertificate());
        return movie;
    }
}
