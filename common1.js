$(function(){
    $('.ham').click(function () {
        $('.gnb').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })
})