function myFunction() {
  var x = document.getElementById("menulinks");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn();
    } else {
      $('a[href="#top"]').fadeOut();
    }
  });

  $('a[href="#top"]').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
