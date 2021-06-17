(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });

    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });

    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass:true,
    })

    $("#btn_gastronomia").click(function()
    {
      $("#producto").css("display", "none");
      $("#humanizado").css("display", "none");
      if ($("#gastronomia").hasClass("fadeout")){
        $("#gastronomia").removeClass("fadeout").addClass("fadein");
        $("#gastronomia").css("display", "block");
      }
      else{
        $("#gastronomia").removeClass("fadein").addClass("fadeout");
        $("#gastronomia").css("display", "block");
      }


    })


    $("#btn_producto").click(function()
    {
      $("#gastronomia").css("display", "none");
      $("#humanizado").css("display", "none");
      if ($("#producto").hasClass("fadeout")){
        $("#producto").removeClass("fadeout").addClass("fadein");
        $("#producto").css("display", "block");
      }
      else{
        $("#producto").removeClass("fadein").addClass("fadeout");
        $("#producto").css("display", "block");
      }

    })

    $("#btn_humanizado").click(function()
    {
      $("#gastronomia").css("display", "none");
      $("#producto").css("display", "none");
      if ($("#humanizado").hasClass("fadeout")){
        $("#humanizado").removeClass("fadeout").addClass("fadein");
        $("#humanizado").css("display", "block");
      }
      else{
        $("#humanizado").removeClass("fadein").addClass("fadeout");
        $("#humanizado").css("display", "block");
      }

    })

    $('#pageSteph a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var id = $(this).attr('href'),
          targetOffset = $(id).offset().top;

      $('html, body').animate({
        scrollTop: targetOffset - 100
       }, 500);
    });

    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('div') ? openerElement : openerElement.find('div');
        }
      }
    });

    $(document).ready(function(){
     $('[data-toggle="collapse"]').click(function(){
         $(".custom-navbar").toggleClass("top-nav-collapse");
     });
  });

})(jQuery);
