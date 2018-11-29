$(document).ready(function() {
$(window).scroll(function(){
let scroll = $(window).scrollTop();
if (scroll > 300) {
$("#visNavBar").fadeOut()
$("#hiddenNav").fadeOut()}
else {
$("#hiddenNav").fadeIn()
$("#visNavBar").fadeIn()}
})
});