$(document).ready(function() {
$(window).scroll(function(){
let scroll = $(window).scrollTop();
if (scroll > 300) {
$("#visNavBar").fadeOut()
$("#hiddenNav").fadeOut()
$("#dropdown").hide()}
else {
$("#hiddenNav").fadeIn()
$("#visNavBar").fadeIn()}
})

$("#mainButton").click(function() {
$("#firstButton").fadeToggle()
})

$("#firstButton").click(function() {
$("#secondButton").fadeToggle()
})

$("#secondButton").click(function() {
$("#thirdButton").fadeToggle()
})
});