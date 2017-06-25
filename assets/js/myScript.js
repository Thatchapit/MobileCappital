(function ($) {
  $(function () {

    var search_box = false;
    var menu_box = false;
    var input_focus = false;
    var lastScrollTop = 0;


    var position = $(window).scrollTop();


    $(".totop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


    $(".button-collapse").click(function () {
      if (menu_box == true) {
        menu_box = false;
      } else {
        menu_box = true;
      }

      $(".menu_bar").slideToggle();
    });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });


    $("#search_Box").click(function () {
      if (search_box == false) {

        search_box = true;
      }

      $(".search_inputWrap").slideToggle();
      $(".search_inputWrap").css("display", "flex");
      $("#search_Box").parent().stop(true, false)
        .animate({
          'opacity': '0',
        }, 'fast')
        .removeClass('up')
        .addClass('down');
    });

    $('.search_inputWrap input').focus(function () {
      input_focus = true;
    });

    $('.search_inputWrap input').focusout(function () {
      input_focus = false;
    });


    $('.boxIcon a').on("ontouchstart", function (e) {
      "use strict"; //satisfy the code inspectors
      var link = $(this); //preselect the link

      if (link.hasClass('hover')) {
        return true;
      } else {
        link.addClass("hover");
        $('.boxIcon a').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
      }
    });



    $('.icon-block a').on("ontouchstart", function (e) {
      "use strict"; //satisfy the code inspectors
      var link = $(this); //preselect the link

      if (link.hasClass('hover')) {
        return true;
      } else {
        link.addClass("hover");
        $('.icon-block a').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
      }
    });


    $('.imgItem').on("ontouchmove", function (e) {
      "use strict"; //satisfy the code inspectors
      var link = $(this); //preselect the link

      if (link.hasClass('hover')) {
        return true;
      } else {
        link.addClass("hover");
        $('.imgItem').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
      }
    });




    $(window).scroll(function (event) {

      var scroll = $(window).scrollTop();

      if(scroll > 300){
      	$('.fixed-action-btn').show();
      }else{
$('.fixed-action-btn').hide();
      }


      if (scroll > 56) {
        if (scroll > position) {
          // downscroll code
        $('.imgItem').removeClass("hover");
         $('.icon_box a').removeClass("hover");
          $("#search_Box").parent().stop(true, false)
            .animate({
              'opacity': '0',
            }, 'fast')
            .removeClass('up')
            .addClass('down');


        } else {
          // upscroll code

          $("#search_Box").parent().stop(true, false)
            .animate({
              'opacity': '100'
            }, 'fast')
            .removeClass('down')
            .addClass('up');



        }
      }
      position = scroll;


      if (search_box == true && input_focus == false) {
        $(".search_inputWrap").slideToggle();
        //  $("#search_Box").parent().slideToggle();
        search_box = false;
      }

      if (menu_box == true) {
        $(".menu_bar").slideToggle();
        menu_box = false;
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
