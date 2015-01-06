/*global $, document, window, alert*/

(function () {
    'use strict';

    function resize_iframe() {
        var width = $('#iframe').width() * (11 / 8.5);
        if (width > 1080) { width = 1080; }
        $('#iframe').css({'height': width + 'px'});
    }

    function onReady() {
        resize_iframe();
    }

    $(document).ready(function () {
        onReady();

        $(window).resize(function () {
            resize_iframe();
        });
    });
}());
