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

//Loads Visualization API and timeline package
google.charts.load('current',{'packages':['timeline']});
//Callback set when Visualization API loaded
google.charts.setOnLoadCallback(drawChart);

//Callback function
      function drawChart() {
    let container = document.getElementById('chart_div');
    let chart = new google.visualization.Timeline(container);
    let dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    
    dataTable.addRows([
      [ 'Volunteering', 'Camp Joint Venture', new Date(2016, 6), new Date(2016, 7)],
      [ 'Volunteering', 'UGA Science Olympiad', new Date(2016, 10), new Date(2016, 11)],
      [ 'Volunteering', 'UGA Impact', new Date(2017, 2), new Date(2017, 3)],
      [ 'IEEE UGA', 'Hardware Committee Teamlead', new Date(2015, 7), new Date(2016, 0)],
      [ 'IEEE UGA', 'Community Outreach Chair', new Date(2016, 0), new Date(2017, 4)],
      [ 'IEEE UGA', 'Fundraising Chair', new Date(2016, 4), new Date(2017, 4)],
      [ 'Undergraduate Work', 'Proctor', new Date(2016, 7), new Date(2017, 4)],
      [ 'Undergraduate Work', 'Research Assistant', new Date(2016, 7), new Date(2017, 4)],
      [ 'Freelance', 'Android Dev',  new Date(2017, 4),  new Date(2017, 9) ],
      [ 'Full-Time', 'Dragados USA', new Date(2017, 9),  new Date(2018, 4) ],
      [ 'Internship', 'Kaiser Permanente', new Date(2018, 5), new Date(2019, 0) ],
    ]);

    let options = {
      timeline: {groupByRowLabel: true},
      timeline: {colorByRowLabel: true },
      colors: ['#00a1f1','#BA0C2F','#FFD43B','#A4C639','#0F9D58', '#0073e6'],
      height: 700
     };

    chart.draw(dataTable, options);
      }

});