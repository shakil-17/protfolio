$( document ).ready(function() {

//sticky-menu
  $(window).scroll(function() {
      var scroll = ( $(window).scrollTop() );
        if(scroll < 500) {
          $(".sticky-header").removeClass("scroll-header");
        } else {
          $(".sticky-header").addClass("scroll-header");
        }
});


//owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsiveClass: true,
  responsive:{
    0:{
      items: 1,
    },
    360:{
      items: 1,
    },
    600:{
      items: 2,
    },
    992:{
      items: 4
    }
  }

})


//isotope grid
var $grid = $('.portfolio-grid').isotope({
  itemSelector: '.portfolio-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.portfolio-item'
  }
})
//isotope on click function
$('.protfolio-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//scrollTop

$(window).scroll(function(){
  if ($(this).scrollTop()>=200) {
    $("#scroll-to-top").fadeIn(300);
  }
  else{
    $("#scroll-to-top").fadeOut(300);
  }
});

$("#scroll-to-top").click(function(){
  $("body,html").animate({
    scrollTop:0
  },1500);
})

//counterup
$('.counter').counterUp({
    delay: 20,
    time: 3000
});






});
