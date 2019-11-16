package com.marlen.projects.cinemas.controller;

import com.marlen.projects.cinemas.domain.Movie;
import com.marlen.projects.cinemas.orchestrator.MovieOrchestrator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.Resource;

@Controller
public class AdminController {

    @Resource
    private MovieOrchestrator movieOrchestrator;

    @GetMapping("/movie-admin")
    public String greetingForm(Model model) {
        model.addAttribute("movie", new Movie());
        return "movie-admin";
    }

    @PostMapping("/movie-admin")
    public String movieAdminSubmit(@ModelAttribute Movie movie, Model model) {
        model.addAttribute("movie", movieOrchestrator.addMovie(movie));
        return "movie-admin-preview";
    }
}
