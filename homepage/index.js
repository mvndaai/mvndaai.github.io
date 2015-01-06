/*global $, document, window, alert, console*/

(function () {
    'use strict';

    var sections = {};
    sections.home = ['btnHome', 'contentHome'];
    sections.resume = ['btnResume', 'contentResume'];

    function resizeIframe() {
        var width = $('#iframe').width() * (11 / 8.5);
        if (width > 1080) { width = 1080; }
        $('#iframe').css({'height': width + 'px'});
    }

    function hideSections() {
        console.log(sections);
        for (var section in sections) {
            console.log(section);
        }

        //sections.forEach(function (section) {
        //    $('#' + section[1]).hide();
        //});
    }

    function onReady() {
        resizeIframe();
        hideSections();
    }

    $(document).ready(function () {
        onReady();

        $(window).resize(function () {
            resizeIframe();
        });
    });
}());
