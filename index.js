function places(location, visit-time) {
this.location = location;
this.visit-time = visit-time;
}
    
var places = new Places("coast","2018") {
var visitTime = 2018;
parseInt(visitTime);
 }
    
$("form#new-places").submit(function(event) {
event.preventDefault();
      
var inputtedLocation = $("input#new-location").val();
var inputtedVisitTime = $("input#new-visitTime").val();
      
var places = new places(inputtedLocation, inputtedVisitTime);
      
$("ul#places").append("<li><span class='places'>" + newplaces.location + "</span></li>");
      
$("input#new-location").val("");
$("input#new-visitTime").val("");
 });