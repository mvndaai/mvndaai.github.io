/*global $, document, window, alert*/

(function () {
    'use strict';

    function resize_iframe() {
        var width = $('#iframe').width() * (11 / 8.5);
        if (width > 1080) { width = 1080; }
        $('#iframe').css({'height': width + 'px'});
    }

    $(document).ready(function () {
        resize_iframe();

        $(window).resize(function () {
            resize_iframe();
        });
    });
}());
