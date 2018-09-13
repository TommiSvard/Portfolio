$(function(){
smoothScrolling(1000);
workArea();
documentWidth();
workLoad();
$(window).resize(documentWidth);
scrollHide();
});

var $window = $(window);


function smoothScrolling(duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function workArea(){
    $('.thumbnail-unit').click(function () {
        $('.work-area').css('left','-100%');
        $('.work-container').show();
    });

    $('.work-return').click(function() {
        $('.work-area:not(h4)').css('left','0%');
        $('.work-container').hide(800);
    });
}

function documentWidth() {
    var window = $window .width();
    if(window < 500){
        $( "a" ).removeClass( "hvr-float-shadow" );
    } else if (window > 500) {
        $( "a" ).not('.social-media, .the-foot .site-link' ).addClass( "hvr-float-shadow" ) ;

    }
}


function workLoad() {
$.ajaxSetup({cache : false});

 $('.thumbnail-unit').click(function() {

         var $this = $(this),
             spinner = '<div class="loader">Loading...</div>',
             newTitle = $this.find('strong').text(),
             newData = $this.data('url');

     $('.work-load').html(spinner).load('/work/'+ newData);
     $('.work-title').text(newTitle);

     });

}

function scrollHide() {
var prev = 0;
var nav = $('.navi-bar');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();

  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;

});
}

