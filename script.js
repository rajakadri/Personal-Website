$(document).ready(function() {

  /*$("#mainButton").mouseenter(function() {
    $("#dropdown").fadeToggle();
  })*/

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll === 300 && scroll > 300) {
      $("#visNavBar").fadeOut()
      $("#hiddenNav").fadeOut()
      $("#dropdown").hide()
      $("#scrollBtn").fadeIn()
      $("#scrollBtn").click(function() {
        $(window).scrollTop(0)
      })
    } else {
      $("#hiddenNav").fadeIn()
      $("#visNavBar").fadeIn()
      $("#dropdown").hide()
      $("#scrollBtn").fadeOut()
    }
  })

  $("a").click(function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      })
    }
  })

  /*$("#arrowOne").click(function() {
    $("#analysis").fadeOut()
    $("#chartIcon").fadeOut()
    $("#pyIconMove").fadeIn().animate({
      left: '250px'
    })
  })*/
});
