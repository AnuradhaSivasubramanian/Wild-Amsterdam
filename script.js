/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
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
