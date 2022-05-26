$(document).ready(function(){
    $('#hamburger-icon').click(function(){
      $(this).toggleClass('open');
      const $mobileNav = $('#mobile-nav')
      $mobileNav.toggleClass('hidden');

      if ($mobileNav.attr('aria-hidden')) {
        $mobileNav.removeAttr('aria-hidden');
      } else {
        $mobileNav.attr('aria-hidden', 'true');
      }
    });

    $('#banner').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
    });
});

function slickCategories(){
  $('.categories-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: 'unslick'
      }
    ]
  });
}

function slickNews(){
  $('.news-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: 'unslick',
      }
    ]
  });
}

slickCategories();
slickNews();

// Slick gets detroyed on mobile, need to set up Slick again when resizing from mobile to desktop
window.addEventListener('resize', function() {
  const isSlickAlready = $('.categories-container').hasClass('slick-initialized');
  if ($(window).width() > 450 && !isSlickAlready) {
    slickCategories();
  }

  const isSlickAlreadyNews = $('.news-container').hasClass('slick-initialized');
  if ($(window).width() > 500 && !isSlickAlreadyNews) {
    slickNews();
  }
});
