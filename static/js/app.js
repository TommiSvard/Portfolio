$(function(){
workArea();
});


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