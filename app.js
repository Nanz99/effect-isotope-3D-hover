$(document).ready(function() {
   $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    $('.gallery').isotope({
        itemSelector: '.gallery-items',
        layoutMode: 'fitRows'
    });
    $('.filtering').on('click','span',function(){
        var data = $(this).attr('data-filter');
        $('.gallery').isotope({
            filter: data
        });
        return false;

    });
    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});


















