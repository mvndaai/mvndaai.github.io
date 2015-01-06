/*global $, document, window, alert, console*/

(function () {
    'use strict';

    var sections = {};
    sections.home = ['btnHome', 'contentHome'];
    sections.resume = ['btnResume', 'contentResume'];
    sections.web = ['btnWeb', 'contentWeb'];


    function resizeIframe() {
        var width = $('#iframe').width() * (11 / 8.5);
        if (width > 1080) { width = 1080; }
        $('#iframe').css({'height': width + 'px'});
    }

    function hideSections() {
        //console.log(sections);
        var section;
        for (section in sections) {
            if (sections.hasOwnProperty(section)) {
                //console.log("#" + sections[section][1]);
                $('#' + sections[section][1]).hide();
            }
        }
    }

    function showSection(btnId) {
        var section;
        for (section in sections) {
            if (sections.hasOwnProperty(section)) {
                if (sections[section][0] === btnId) {
                    $('#' + sections[section][1]).show();
                }
            }
        }
    }

    function onReady() {
        resizeIframe();
        hideSections();
        $("#contentHome").show();
    }

    $(document).ready(function () {
        onReady();

        $(window).resize(function () {
            resizeIframe();
        });

        $('.mainBtns').click(function () {
            resizeIframe();
            hideSections();
            showSection(this.id);
        });
    });
}());
