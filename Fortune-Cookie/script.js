$(document).ready(function () {
    $('.tile').hover(
        function () {
            var hoverSrc = $(this).attr('data-hover-src');
            $(this).attr('data-hover-src', $(this).attr('src'));
            $(this).attr('src', hoverSrc);
        },
        function () {
            var originalSrc = $(this).attr('data-hover-src');
            $(this).attr('data-hover-src', $(this).attr('src'));
            $(this).attr('src', originalSrc);
        }
    );
});
