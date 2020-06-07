// Js Funtions
$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<div class="slick-prev"><i class="icon-prev"></i></div>',
    nextArrow: '<div class="slick-next"><i class="icon-next"></i></div>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
          }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          autoplay: true,
        }
      }
    ]
  });
});
function advantage() {
  var tamanhoViewport = $(window).width();
  if (tamanhoViewport <= 767) {
    $('.advantage').slick({
      dots: false,
      infinite: false,
      slidesToShow: 5,
      lazyLoad: 'ondemand',
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
          }
        },
      ]
    });
  }
};

$(document).ready(function(){
  advantage();
});

$(document).ready(function(){
  $('.brands-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand',
    prevArrow: '<div class="slick-prev"><i class="icon-prev"></i></div>',
    nextArrow: '<div class="slick-next"><i class="icon-next"></i></div>',
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
                autoplay: true,
            }
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
                autoplay: true,
            }
        },
    ]
  });
});

$(document).on("click", "li.number, li.cart, .keep-buying", function() {
  if ($('.toogle-cart').hasClass('active')) {
    $('.toogle-cart').removeClass('active');
  } else {
    $('.toogle-cart').addClass('active');
  }
});

$(document).mouseup(function(e) {
    var minicart = $('.toogle-cart');
    if (!minicart.is(e.target) && minicart.has(e.target).length === 0) {
      minicart.removeClass('active');
    }
});

$(document).on("click", ".action.nav-toggle", function() {
  if ($('.menu-mobile').hasClass('active')) {
    $('.menu-mobile').removeClass('active');
    $('.backdrop').hide();
  } else {
    $('.menu-mobile').addClass('active');
    $('.backdrop').show();
  }
});

$(document).mouseup(function(e) {
    var menuMobile = $('.menu-mobile');
    if (!menuMobile.is(e.target) && menuMobile.has(e.target).length === 0) {
      menuMobile.removeClass('active');
      $('.backdrop').hide();
    }
});