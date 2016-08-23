//backend
function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPricer = function(age,time){
  var price =11.85;
  if(age>=60 || age<=17){
    price-=2;
  }
  if(time<1500){
    price-=1;
  }
  return price;
}


//frontend
$(document).ready(function(){
  $("form#ticket-input").submit(function(event){
  event.preventDefault();
  var movieInput = $("input:radio[name=movie]:checked").val();
  var inputtedTime = parseInt($("#time").val());
  var inputtedAge = parseInt($("#age").val());
  var theTicket = new Ticket(movieInput,inputtedTime,inputtedAge);
  var finalPrice = theTicket.ticketPricer(inputtedAge,inputtedTime);
  $(".movie").text(theTicket.movie);
  $(".time").text(theTicket.time);
  $(".price").text(finalPrice);
  $("#show-movie").show();


  });
});
