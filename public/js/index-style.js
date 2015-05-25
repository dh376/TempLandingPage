/**
 * Created by Donghyeok on 5/22/15.
 */
jQuery(window).resize(function() {
    adjustStyle();
});
jQuery(document).ready(function() {
    adjustStyle();
});

function adjustStyle() {
    var windowWidth = jQuery(window).width();
    var windowHeight = $(window).height();
    console.log('width: ' + windowWidth + ' height: ' + windowHeight);

    $

    var imageHeight = $('.logo-image img').height();
    console.log('imageHeight ' + imageHeight);
    $('.logo-image').css('padding-top', windowHeight*.25);
}