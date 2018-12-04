$(document).ready(function() {

$("#mainButton").click(function() {
$("#firstButton").fadeToggle()
})

$("#firstButton").click(function() {
$("#secondButton").fadeToggle()
})

$("#secondButton").click(function() {
$("#thirdButton").fadeToggle()
})

$(window).scroll(function(){
let scroll = $(window).scrollTop();
if (scroll > 300) {
$("#visNavBar").fadeOut()
$("#hiddenNav").fadeOut()
$("#dropdown").hide()
$("#scrollBtn").fadeIn()
$("#scrollBtn").click(function(){
$(window).scrollTop(0)
})
}
else {
$("#hiddenNav").fadeIn()
$("#visNavBar").fadeIn()
$("#dropdown").hide()
$("#scrollBtn").fadeOut()}
})


});