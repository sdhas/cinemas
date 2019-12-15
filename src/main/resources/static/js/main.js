$(document).ready(function() {

    $.getJSON("/allmovies", {}, function(data) {
        movies = data;

        $.each(
            movies,
            function(key, movie) {

                // Loading Movies
                var theatreName;

                if (movie.theatreName.toLowerCase() === 'sk') {
                    theatreName = 'SK MARLEN CINEMAS'
                } else {
                    theatreName = 'GK MARLEN CINEMAS'
                }

                var div = "<div class=\"poster-carousel-item\">" +
                    "<span>" +
                    "<a href=\"#\" class=\"poster\">" +
                    "<div class=\"poster-content\">" +
                    "<div class=\"poster-image\">" +
                    "<img src=\"" + movie.imageTilesUrl + "\" style=\"opacity: 1;\">" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"poster-footer\">" +
                    "<p class=\"poster-label\">" + movie.name + "</p>" +
                    "</div>" +
                    "</a>" +
                    "</span>" +
                    "</div>";
                $('#poster-carousel').append(div);
            });
            // Calling the carousel initiation here
            initiateCarousel();
    });

    function initiateCarousel() {
        $('.poster-carousel').slick({
                speed: 500,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                variableWidth: true,
                arrows: true,
                prevArrow: '<i class="fa fa-angle-double-left previous-arrow"></i>',
                nextArrow: '<i class="fa fa-angle-double-right next-arrow"></i>'
            });

        $('.poster-carousel').live('afterChange', function() {
            const img_src = $('.slick-current').find('div.poster-image').find('img').get()[0].src;
            showCarouselBg('url(' + img_src + ')');
        });

        $('.poster-image').live('mouseover', function(e) {
            const target = $(e.target);
            if (target.is('img')) {
                const img_src = e.target.src;
                const img_url = 'url(' + img_src + ')';
                // alert('mouse enter '+url);
                $(this).css('transform', 'scale(1.05)');
                showCarouselBg(img_url);
            }
        });

        $('.poster-image').live('mouseout', function() {
            $(this).css('transform', 'scale(1)');
        $('#carousel-background-slideshow').css('background', 'radial-gradient(ellipse at center, #464646 0%, #171717 100%)');
        });
    }

    function showCarouselBg(img_url) {
        // alert(img_url);
        $('#carousel-background-slideshow').css('display', 'flex')
            .css('background-image', img_url)
            .css('transform', 'scale(2.5)')
            .css('background-repeat', ' no-repeat')
            .css('background-attachment', ' fixed')
            .css('background-position', ' center');
    }
});