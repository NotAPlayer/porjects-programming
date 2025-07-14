$(document).ready(function () {
    $('.tile').click(function () {
        var currentSrc = $(this).attr('src');
        var altSrc = $(this).attr('data-alt-src');
        $(this).attr('src', altSrc);
        $(this).attr('data-alt-src', currentSrc);
    });
});
