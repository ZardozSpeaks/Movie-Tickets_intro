function myTicket(movieTitle,movieTime,movieAge,movieCost) {
 this.movieTitle = movieTitle;
 this.movieTime = movieTime;
 this.movieAge = movieAge;
 this.movieCost = selectedMovieCost[0];
};

myTicket.prototype.myMovie = function() {
 return this.movieTitle + " " + this.movieTime + " "
 + this.movieAge + " " + this.movieCost;
};

$(function(){

  $("form#movie-info").submit(function(event) {

    event.preventDefault();

    var selectedMovieTitle = $("select#movie-title").val();
    var selectedMovieTime = $("select#movie-time").val();
    var selectedMovieAge = $("select#movie-age").val();
    var selectedMovieCost = [];


    var newmyTicket = new myTicket(selectedMovieTitle,selectedMovieTime,selectedMovieAge);

    function myPrice () {
      if (selectedMovieAge === "Child (under 12)") {
        selectedMovieCost.push("$10")
      } else if (selectedMovieAge === "Student (13-18)") {
        selectedMovieCost.push("$12")
      } else if (selectedMovieAge === "Adult") {
        selectedMovieCost.push("$16")
      } else if (selectedMovieAge === "Senior Citizen (over 65)") {
        selectedMovieCost.push("$14")
      };
    };
  });
});
