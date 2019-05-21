(function($) {
  'use strict';

  var nav_offset_top = $('header').height() + 50;

  // Navbar Fixed
  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area').addClass('navbar_fixed');
        } else {
          $('.header_area').removeClass('navbar_fixed');
        }
      });
    }
  }
  navbarFixed();

  // Navbar active link
  var previouslyClicked = $('.nav-item').eq(0);
  $('.nav-item').click(function() {
    previouslyClicked.removeClass('nav-item active').addClass('nav-item');
    $(this).addClass('nav-item active');
    previouslyClicked = $(this);
  });

  // Pop Tooltip
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Floating Social Button
  $('#github').hover(
    function() {
      $(this).addClass('shadow');
    },
    function() {
      $(this).removeClass('shadow');
    }
  );

  $('#linkedin').hover(
    function() {
      $(this).addClass('shadow');
    },
    function() {
      $(this).removeClass('shadow');
    }
  );

  $('#twitter').hover(
    function() {
      $(this).addClass('shadow');
    },
    function() {
      $(this).removeClass('shadow');
    }
  );

  $('#gmail').hover(
    function() {
      $(this).addClass('shadow');
    },
    function() {
      $(this).removeClass('shadow');
    }
  );
})(jQuery);
