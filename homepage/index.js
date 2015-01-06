/*global $, document, window, alert*/

(function () {
    'use strict';

    function resize_iframe() {
        $('#iframe').css({'height': $('#iframe').width() * (11 / 8.5) + 'px'});
    }

    $(document).ready(function () {
        resize_iframe();

        $(window).resize(function () {
            resize_iframe();
        });
    });
}());
