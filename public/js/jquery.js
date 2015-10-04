// ----------------- Sticky Navbar JQuery -----------------

$(document).ready(function() {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 711) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 710) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });


// ----------------- Active Nav States JQuery -----------------


$(function() {
   $("li").click(function() {
      $("li").removeClass("active");
      $(this).addClass("active");
   });
});

// ----------------- Hide/Show Menu on Mobile JQuery -----------------

$(function() { 
  $(".menu").click(function() { 

    if ($(this).hasClass("nav-show")) {
        $(this).removeClass("nav-show");
        $('ul').addClass("nav");
        $('ul').removeClass("mobile-nav");
      }
    else {
      $('ul').removeClass("nav");
      $('ul').addClass("mobile-nav");
      $(this).addClass("nav-show");
    }
  });
});

// ----------------- Smooth Scrolling JQuery -----------------

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});
});