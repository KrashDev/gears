$(document).ready(function() {

  var gears = $('.gears');
  var i;

  //cog div creation
  for (i = 0; i < 128; i++) {
    $(gears).append('<div class="cog"><img src="images/gear.svg"></div>');
  }
  /*
    for (i = 0; i < 15; i++) {
      $(gears).append('<div class="small-cog"><img src="images/gear.svg"></div>');
    }
  */
  var cog = $('.cog');
  var cogImg = $('.cog img');
  var smallcog = $('.small-cog');
  var smallcogImg = $('.small-cog img');

  //sizing
  cogImg.css({
    "height": "75px",
    "width": "75px"
  });

  smallcogImg.css({
    "height": "35px",
    "width": "35px"
  });

  //positioning
  /*
    gears.each(function() {
      $(this).find('img:even').css({
        "padding": "-5px"
      });
      $(this).find('img:odd').css({
        "margin-top": "25px"
      });

    });
  */

  //skew odd cogs
  smallcog.each(function() {
    $(this).css("top", "57px");

    //spread cogs out horizontally
    smallcog.each(function(x) {
      x = x * 67;
      $(this).css("left", x + 10);
    });
  });

  /*
          cog.each(function() {
            if ($(this).index() > 12) {
              $('.cog:odd').each(function() {
                $(this).css("top", "100px");
              });

              //spread cogs out horizontally
              $('.cog').each(function(x) {
                x = x * 100;
                $(this).css("left", x);
              });
            }
            */
  /*
      else {
        $('.cog:odd').each(function() {
          $(this).css("top", "100px");
        });

        //spread cogs out horizontally
        $('.cog').each(function(x) {
          x = x * 100;
          $(this).css("left", x);
        });
      }
  */
  cogImg.mouseenter(function() {
    $(this).toggleClass('active');
  });

  //controls
  $('button.stop').click(function() {
    cogImg.removeClass('reverse forward');
  });

  $('button.start').click(function() {
    $('.cog:odd').find('img').addClass('forward');
    $('.cog:even').find('img').addClass('reverse');
  });

  $('button.forward').click(function() {
    cogImg.toggleClass('forward');
  });

  $('button.reverse').click(function() {
    cogImg.toggleClass('reverse');
  });

  $('button.break').click(function() {
    cogImg.toggleClass('drop');
  });

  $('button.reset').click(function() {
    cogImg.removeClass('active');
  });







});