$(document).ready(function () {
    $('#main_box').click(function () {
        $(this).css('background-image', 'none');
        $('.mini_boxes').removeClass('selected');
    });

    $('.mini_boxes').click(function (event) {
        event.stopPropagation();
        var imgSrc = $(this).attr('src');
        $('body').css('background-image', 'url(' + imgSrc + ')');
        $('.mini_boxes').removeClass('selected');
        $(this).addClass('selected');
    });
});
