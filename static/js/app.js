$(function(){
smoothScrolling(1000);
workArea();
});


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