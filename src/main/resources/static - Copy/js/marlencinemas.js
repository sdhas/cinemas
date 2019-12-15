$(document)
		.ready(
				function() {
					// Initialize Tooltip
					$('[data-toggle="tooltip"]').tooltip();

					// Add smooth scrolling to all links in navbar + footer link
					$(".navbar a, footer a[href='#myPage']").on('click',
							function(event) {

								// Make sure this.hash has a value before
								// overriding default behavior
								if (this.hash !== "") {

									// Prevent default anchor click behavior
									event.preventDefault();

									// Store hash
									var hash = this.hash;

									// Using jQuery's animate() method to add
									// smooth page scroll
									// The optional number (900) specifies the
									// number of milliseconds it takes to scroll
									// to the specified area
									$('html, body').animate({
										scrollTop : $(hash).offset().top
									}, 900, function() {

										// Add hash (#) to URL when done
										// scrolling (default click behavior)
										window.location.hash = hash;
									});
								} // End if
							});

					// Mailing comments
					$('#send_email').click(
							function() {
								$('#comments_form').attr(
										'action',
										'mailto:marlencinemas@gmail.com?subject=[Marlencinemas] Comments from '
												+ $('#name').val()
												+ '&body= Email : >> '
												+ $('#email').val()
												+ ' >> Comments'
												+ $('#comments').val());
								$('#comments_form').submit();
							});

					test();
					function test() {
			/*		var movies = [
							{
		"title": "Chekka Chivantha Vaanam",
		"language": "Tamil",
		"image": "images/movies/ccv1.jpg",
		"theater": "sk",
		"showtime": "8:30 AM & 11:30 AM 2:15 PM & 4:45 PM & 7:20 PM 10:15 PM"
	},
	{
		"title": "Chekka Chivantha Vaanam",
		"language": "Tamil",
		"image": "images/movies/ccv2.jpg",
		"theater": "gk",
		"showtime": "9:00 AM & 12:15 PM & 4:15 PM & 7:15 PM & 10:15 PM"
	},
	{
		"title": "Chekka Chivantha Vaanam",
		"language": "Tamil",
		"image": "images/movies/ccv3.jpg",
		"theater": "gk",
		"showtime": "9:00 AM & 12:15 PM & 4:15 PM & 7:15 PM & 10:15 PM"
	}
	]; 

				*/		 $.getJSON("/allmovies", {}, function(data) {
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

											var screenText = getScreenText(movie);
											var div = "<div class=\"col-sm-4\"> <div class=\"thumbnail\"> <img src=\""
													+ movie.imageTilesUrl
													+ "\" alt=\""
													+ movie.name
													+ "\" ><div class=\"bottom-left\"><p> <strong>"
													+ movie.name
													+ "</strong> ("
													+ movie.language
													+ ")</p><p>"
													+ theatreName
													+ " "
													+ screenText
													+ "</p><small>Book Tickets</small> "+setBookingButton(movie)+" </div> </div></div>";
											$('#movies_row').append(div);

											// Loading Banner

											var showTime;
											if (movie.theatreName === 'sk') {
												showTime = 'SK Marlen Cinemas : '
														+ movie.showTime;
											} else {
												showTime = 'GK Marlen Cinemas : '
														+ movie.showTime;
											}

											var carousel_item_class_active;
											if (key === 0) {
												carousel_item_class_active = " active";
											} else {
												carousel_item_class_active = "";
											}
											var carousel_item = "<div class=\"item "
													+ carousel_item_class_active
													+ "\"><a href=\"#movies\"><img src=\""
													+ movie.imageBannerUrl
													+ "\" alt=\""
													+ movie.name
													+  "\"><div class=\"carousel-caption\"><h3><strong>"
													+ movie.name
													+ "</strong></h3><h4>"
													+ showTime
													+ "</h4></div></div>";

											$('#banner_carousel').append(
													carousel_item);

											var carousel_indicator = "<li data-target=\"#myCarousel\" data-slide-to=\""
													+ key
													+ "\" class=\""
													+ carousel_item_class_active
													+ "\"></li>";
											$('#carousel_indicators').append(
													carousel_indicator);

										});
						 });
					}
					
					function setBookingButton(movie) {
						var buttonScript;
						var gk_ticketnewurl = "http://www.ticketnew.com/GopiKrishna-Complex-2K-A-C-DTS-Ayanavaram-Chennai-Book-My-Movie-Show-Tickets/Online-Ticket-Booking/1711";
						var gk_paytmurl = "https://paytm.com/movies/chennai/gopikrishna-complex-2k-a-c-dts-c/4416";
						var sk_bookmyshowurl ="https://in.bookmyshow.com/chennai/cinemas/skmarlen-cinemas-2k-guindy-alandur/SKMG";
						if (movie.theatreName.toLowerCase() === 'gk') {
							buttonScript = "<button class=\"btn\" onclick=\"window.open('" + gk_ticketnewurl + "', '_blank');\"><img src=\"images/ticketnew.jpg\"></button> <button class=\"btn\" onclick=\"window.open('" + gk_paytmurl + "', '_blank');\"><img src=\"images/paytm.jpg\"></button>";
						} else {
							buttonScript = "<button class=\"btn\" onclick=\"window.open('" + sk_bookmyshowurl + "', '_blank');\"><img src=\"images/bookmyshow.jpg\"></button>";
						}
						return buttonScript;

					}

					function getScreenText(movie) {
						var screenText;
						if (movie.screen != null && movie.screen.trim() != "") {
							screenText = "| <small>Screen : " + movie.screen
									+ "</small>";
						} else {
							screenText = "";
						}
						return screenText;
					}
				});