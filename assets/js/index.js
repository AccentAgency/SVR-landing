
$(function() {

  "use strict";

    // PRE LOADER

    $('.owl-carousel').on('initialized.owl.carousel', function(event){
      $('.preloader').fadeOut(1000);
    })

    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      lazyLoad:true,
      navigation : false,
      items:1,
      loop:true,
      autoplay:false,
      smartSpeed:1500
    })


    $(window).load(function () {
      if (!$('.preloader').is(':visible')){
        owl.trigger('play.owl.autoplay', [2000]);
      }else{
      }
    });

    document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");

      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })


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


    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.getElementsByTagName("html")[0].style.overflow = "auto";

    $('.owl-carousel').trigger('refresh.owl.carousel');

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

       if($("#menu").hasClass("top-nav-collapse")){

       }
       else{
         $(".custom-navbar").toggleClass("top-nav-collapse");
       }



     });
  });

  var owl = $('.owl-carousel');
owl.owlCarousel({
    //  your options
});

owl.on('drag.owl.carousel', function(event) {
    $('body').css('overflow', 'hidden');
});

owl.on('dragged.owl.carousel', function(event) {
    $('body').css('overflow', 'auto');
});

})
