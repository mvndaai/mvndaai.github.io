/*global $, document, window, alert, console*/

(function () {
    'use strict';

    var sections = {};
    sections.home = ['btnHome', 'contentHome'];
    sections.resume = ['btnResume', 'contentResume'];
    sections.web = ['btnWeb', 'contentWeb'];
    sections.fun = ['btnFun', 'contentFun'];
    sections.game = ['btnGame', 'contentGame'];

    function chooseSectionByUrl() {
        var section;
        for (section in sections) {
            if (sections.hasOwnProperty(section)) {
                if (("#" + section) === document.location.hash) {
                    $('#' + sections[section][1]).show();
                    return;
                }
            }
        }
        $("#contentHome").show();
    }

    function resizeIframe() {
        var width = $('#iframe').width() * (11 / 8.5);
        if (width > 1080) { width = 1080; }
        $('#iframe').css({'height': width + 'px'});
    }

    function hideSections() {
        var section;
        for (section in sections) {
            if (sections.hasOwnProperty(section)) {
                $('#' + sections[section][1]).hide();
            }
        }
    }

    function showSection(btnId) {
        var section;
        for (section in sections) {
            if (sections.hasOwnProperty(section)) {
                if (sections[section][0] === btnId) {
                    window.history.replaceState("object or string", "Title", "/#" + section);
                }
            }
        }
    }

    function updateUrl(btnId) {
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
        hideSections();
        chooseSectionByUrl();
        resizeIframe();
    }

    $(document).ready(function () {
        onReady();

        $(window).resize(function () {
            resizeIframe();
        });

        $('.mainBtns').click(function () {
            hideSections();
            showSection(this.id);
            updateUrl(this.id);
            resizeIframe();
        });


    });
}());
