 function myTicket(movieTitle, movieTime, movieAge, movieCost) {
   this.movieTitle = movieTitle;
   this.movieTime = movieTime;
   this.movieAge = movieAge;
   this.movieCost = movieCost;
};
   myTicket.prototype.myMovie = function() {
     return this.movieTitle + " " + this.movieTime + " "
     + this.movieAge + " " + this.movieCost;
};

$(function(){
  


});
