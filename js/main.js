$(document).ready(function() {

  // Define the height of your hero here
  var heroHeight = 800;

  $(window).scroll(function() {
    if ($(document).scrollTop() < heroHeight) {

      $("#menu").css({
        "position": "relative",
      });
    } else {
      $("#menu").css({
        "position": "fixed",
        "top": "0"
      });
    }
  });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
