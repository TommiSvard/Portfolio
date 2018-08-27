$(function(){
smoothScrolling(1000);
workArea();
documentWidth();
workLoad();
$(window).resize(documentWidth);

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
        $( "a" ).not('.social-media, .the-foot').addClass( "hvr-float-shadow" ) ;


    }
}

function workLoad() {
 $.ajaxSetup({ cache: true });
 $('thumbnail-unit').click(function() {
     var $this = $(this),
         newTitle = $this.find('strong').text(),
         newfolder = $this.data('target'),
         spinner = "",
         newHTML = '/static/work_sections/'+newfolder+'/work.html';
     $('.work-load').load(newHTML)
     $('.work-title').text(newTitle)

     }
 )
}