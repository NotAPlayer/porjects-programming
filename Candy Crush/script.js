$(document).ready(function () {
    var candyImages;
    function candiesAppear() {
        $('#game-board').html('');
        function createCandy(imageSrc) {
            var randomImage = imageSrc;
            var $img = $('<img>')
                .attr('src', randomImage)
                .addClass('tile');
            $img.click(function () {
                $(this).hide();
            });
            $('#game-board').append($img);
        }
        createCandy('multicolor_candy.png');
        createCandy('orange_candy.png');
        createCandy('red_candy.png');
        createCandy('yellow_candy.png');
        createCandy('multicolor_candy.png');
        createCandy('orange_candy.png');
        createCandy('red_candy.png');
        createCandy('yellow_candy.png');
        createCandy('multicolor_candy.png');
        createCandy('orange_candy.png');
        createCandy('red_candy.png');
        createCandy('yellow_candy.png');
        createCandy('multicolor_candy.png');
        createCandy('orange_candy.png');
        createCandy('red_candy.png');
        createCandy('yellow_candy.png');
    }
    candiesAppear();
    $('#reset-button').click(function () {
        candiesAppear();
    });
});
