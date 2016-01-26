describe("myTicket", function() {
  var testmyTicket = new myTicket("The end of time","12pm","Child","$10.00");
  it("select title of a movie", function() {
  expect(testmyTicket.movieTitle).to.equal("The end of time");
  expect(testmyTicket.movieTime).to.equal("12pm");
  expect(testmyTicket.movieAge).to.equal("Child");
  expect(testmyTicket.movieCost).to.equal("$10.00");
  });
});
