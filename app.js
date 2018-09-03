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
  var main = $('.main');
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

  // -------------- control buttons --------------

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
    $(this).text('reset');
  });

  $('button.reset').click(function() {
    cogImg.removeClass('active');
  });

  // ------------ color buttons --------------

  $('button.acid').click(function() {
    main.css('background', 'linear-gradient(to right, #b06ab3, #4568dc)');
    $('.controls button').css('background', 'linear-gradient(to right, #b06ab3, #4568dc)');
  });

  $('button.kye').click(function() {
    main.css('background', 'linear-gradient(to right, #8360c3, #2ebf91)');
    $('.controls button').css('background', 'linear-gradient(to right, #8360c3, #2ebf91)');
  });

  $('button.law').click(function() {
    main.css('background', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)');
    $('.controls button').css('background', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)');
  });

  $('button.orange').click(function() {
    main.css('background', 'linear-gradient(to right, #ff9966, #ff5e62)');
    $('.controls button').css('background', 'linear-gradient(to right, #ff9966, #ff5e62)');
  });

  $('button.crimson').click(function() {
    main.css('background', 'linear-gradient(to right, #642b73, #c6426e)');
    $('.controls button').css('background', 'linear-gradient(to right, #642b73, #c6426e)');
  });

  $('button.aqua').click(function() {
    main.css('background', 'linear-gradient(to right, #159957, #155799)');
    $('.controls button').css('background', 'linear-gradient(to right, #159957, #155799)');
  });

  $('button.orca').click(function() {
    main.css('background', 'linear-gradient(to right, #44a08d, #093637)');
    $('.controls button').css('background', 'linear-gradient(to right, #44a08d, #093637)');
  });

  $('button.dusk').click(function() {
    main.css('background', 'linear-gradient(to right, #2c3e50, #fd746c)');
    $('.controls button').css('background', 'linear-gradient(to right, #2c3e50, #fd746c)');
  });







}); //document ready function