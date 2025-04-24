$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

 // Toggle the navbar and main menu area
$(".toggle-icon").on("click", function () {
  $(".my-navbar").toggleClass("show");
  $(".mainmenu-area").toggleClass("show");
  $("#nav-icon3").toggleClass("open"); // Sync the toggle icon state
});

// Handle the navigation item clicks
$(".my-navbar .mynav-item").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    var tabNum = $(this).index();
    var nthChild = tabNum + 2;

    // Switch the active navigation item
    $(".my-navbar .mynav-item").removeClass("active");
    $(this).addClass("active");

    // Switch the active section
    $("#main > section.active").removeClass("active");
    $("#main > section:nth-child(" + nthChild + ")").addClass("active");
  }

  // Close the menu when a navigation item is clicked
  $(".mainmenu-area").removeClass("show");
  $(".my-navbar").removeClass("show");
  $("#nav-icon3").removeClass("open"); // Ensure the toggle icon closes

  e.preventDefault(); // Prevent default link behavior
});

// Optional: Ensure the menu and icon sync on outside click
$(document).on("click", function (e) {
  if (!$(e.target).closest(".toggle-icon, .my-navbar").length) {
    $(".mainmenu-area").removeClass("show");
    $(".my-navbar").removeClass("show");
    $("#nav-icon3").removeClass("open");
  }
});


    $("#home .pagelink").on("click", function (e) {
      e.preventDefault();
      if (e.target.parentNode.id = "g-p-f-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item.portfolio").addClass("active");
        $(".my-navbar .mynav-item .portfolio").addClass("active");
        $(".project-gallery").addClass("active");
      }
    });

    //Mixitup js
    $(".project-gallery").mixItUp();

    /*Typed Activate*/
    var $typed = $("#typed");
    if ($typed.length > 0) {
      $typed.typed({
        strings: ["Web Design", "Web Development", "UI/UX Design"],
        stringsElement: null,
        typeSpeed: 70,
        startDelay: 150,
        backSpeed: 40,
        backDelay: 350,
        loop: true,
        loopCount: 550,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      });
    }

    // statistics jquery circle progressbar initialization
    var $section = $("#statisticsSection");
    if ($section.length > 0) {
      $(".progress-circle").loading();
    }

    $(".lightbox").magnificPopup({
      type: "image",
    });

    $(".image-preview").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // Ajax On Modal 
    $(".service-area-wrapper").each(function () {
      $(this).magnificPopup({
        delegate: ".service-modal:visible",
        type: "ajax",
        tLoading:
          '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
          enabled: true,
        },
      });
    });
    $('.project-gallery-item').each(function() {
      $(this).magnificPopup({
        delegate: '.pp:visible',
          type: "ajax",
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
            enabled: true,
          },
        callbacks: {
          ajaxContentAdded: function() {
            $(".owl-carousel").each(function (index) {
              var a = $(this);
              $(this).owlCarousel({
              autoplay: a.data('autoplay'),
              center: a.data('center'),
              autoplayTimeout: a.data('autoplaytimeout'),
              autoplayHoverPause: a.data('autoplayhoverpause'),
              loop: a.data('loop'),
              speed: a.data('speed'),
              nav: a.data('nav'),
              dots: a.data('dots'),
              autoHeight: a.data('autoheight'),
              autoWidth: a.data('autowidth'),
              margin: a.data('margin'),
              stagePadding: a.data('stagepadding'),
              slideBy: a.data('slideby'),
              lazyLoad: a.data('lazyload'),
              navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
              animateOut: a.data('animateOut'),
              animateIn: a.data('animateIn'),
              video: a.data('video'),
              items: a.data('items'),
              responsive:{
                0:{items: a.data('items-xs'),},
                576:{items: a.data('items-sm'),},
                768:{items: a.data('items-md'),},
                992:{items: a.data('items-lg'),}
              }	
                      });
                  });
              }
          }
      });
      });
});

$(document).ready(function () {
  $("#read-more-btn").click(function () {
    const shortText = $("#short-text");
    const fullText = $("#full-text");
    const button = $(this);

    if (fullText.is(":hidden")) {
      fullText.show(); // Show the full text
      shortText.hide(); // Hide the short text
      button.text("Read Less"); // Change button text to "Read Less"
    } else {
      fullText.hide(); // Hide the full text
      shortText.show(); // Show the short text
      button.text("Read More"); // Change button text back to "Read More"
    }
  });
});



  $(window).on('load', function () {
    /*Preloader*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
  });




});