package com.marlen.projects.cinemas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Movie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String showTime;
    private String theatreName;
    private String imageUrl;
    private String imageBannerUrl;
    private String imageTilesUrl;
    private String language;
    private String certificate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShowTime() {
        return showTime;
    }

    public void setShowTime(String showTime) {
        this.showTime = showTime;
    }

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageBannerUrl() {
        return imageBannerUrl;
    }

    public void setImageBannerUrl(String imageBannerUrl) {
        this.imageBannerUrl = imageBannerUrl;
    }

    public String getImageTilesUrl() {
        return imageTilesUrl;
    }

    public void setImageTilesUrl(String imageTilesUrl) {
        this.imageTilesUrl = imageTilesUrl;
    }
}
