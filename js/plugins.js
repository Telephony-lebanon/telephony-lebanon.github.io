// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


jQuery(document).ready(function($){
    
/* ==========================================================================
   BURER BUTTON
   ========================================================================== */
    
    $(".navbar-toggle").on("click", function () {
          
      $(this).toggleClass("active");
          
    });
    
/* ==========================================================================
   To Top
   ========================================================================== */
    
    $('body').append('<div id="to-top" class="btn btn-custom"><span class="fa fa-chevron-up"></span></div>');
    
    $(window).scroll(function () {
            
        if ($(this).scrollTop() != 0) {
                
            $('#to-top').fadeIn();
                
        } else {
                
            $('#to-top').fadeOut();
                
        }
            
    });
    
    $('#to-top').click(function(){
        
        $("html, body").animate({ scrollTop: 0 }, 600);
        
        return false;
        
    });
    
/* ==========================================================================
   Toggle popover
   ========================================================================== */    

//   $('[data-toggle="popover"]').popover(); 
  
/* ==========================================================================
   Show Register Tab
   ========================================================================== */
//        
//    $('#register-button').on('click',function () {
//    
//        $('#log-tabs a:last').tab('show');
//    
//    });
//    
/* ==========================================================================
    Smooth Scroling
    ========================================================================== */
//    
//    $("html").niceScroll({
//        cursorcolor: "#424242", // change cursor color in hex
//        cursoropacitymin: 0.5, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
//        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
//        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
//        cursorborder: "0", // css definition for cursor border
//        cursorborderradius: "5px", // border radius in pixel for cursor
//        zindex: "auto" | 599999999,
//        autohidemode: true,
//        scrollspeed: 70,
//        hwacceleration: true,
//        bouncescroll: true,
//        railoffset: true,
//    });  // The document page (body)
    
/* ==========================================================================
    Load External Js test
    ========================================================================== */
    
});

