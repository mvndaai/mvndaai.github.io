/*global $, document, window, alert, console*/

(function () {
    'use strict';
    var isChrome = navigator.userAgent.indexOf("Chrome/") > -1;
    var content = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPGpubHAgc3BlYz0iMS4wIiB4bWxuczpqZng9Imh0dHA6Ly9qYXZhZnguY29tIiBocmVmPSJDYWxjdWxhdG9yLmpubHAiPgogIDxpbmZvcm1hdGlvbj4KICAgIDx0aXRsZT5DYWxjdWxhdG9yPC90aXRsZT4KICAgIDx2ZW5kb3I+bWF2YW5qPC92ZW5kb3I+CiAgICA8ZGVzY3JpcHRpb24+bnVsbDwvZGVzY3JpcHRpb24+CiAgICA8b2ZmbGluZS1hbGxvd2VkLz4KICA8L2luZm9ybWF0aW9uPgogIDxyZXNvdXJjZXM+CiAgICA8amZ4OmphdmFmeC1ydW50aW1lIHZlcnNpb249IjIuMisiIGhyZWY9Imh0dHA6Ly9qYXZhZGwuc3VuLmNvbS93ZWJhcHBzL2Rvd25sb2FkL0dldEZpbGUvamF2YWZ4LWxhdGVzdC93aW5kb3dzLWk1ODYvamF2YWZ4Mi5qbmxwIi8+CiAgPC9yZXNvdXJjZXM+CiAgPHJlc291cmNlcz4KICAgIDxqMnNlIHZlcnNpb249IjEuNisiIGhyZWY9Imh0dHA6Ly9qYXZhLnN1bi5jb20vcHJvZHVjdHMvYXV0b2RsL2oyc2UiLz4KICAgIDxqYXIgaHJlZj0iQ2FsY3VsYXRvci5qYXIiIHNpemU9Ijk3NDciIGRvd25sb2FkPSJlYWdlciIgLz4KICA8L3Jlc291cmNlcz4KICA8YXBwbGV0LWRlc2MgIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBtYWluLWNsYXNzPSJjb20uamF2YWZ4Lm1haW4uTm9KYXZhRlhGYWxsYmFjayIgIG5hbWU9IkNhbGN1bGF0b3IiID4KICAgIDxwYXJhbSBuYW1lPSJyZXF1aXJlZEZYVmVyc2lvbiIgdmFsdWU9IjIuMisiLz4KICA8L2FwcGxldC1kZXNjPgogIDxqZng6amF2YWZ4LWRlc2MgIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBtYWluLWNsYXNzPSJjYWxjdWxhdG9yLkNhbGN1bGF0b3IiICBuYW1lPSJDYWxjdWxhdG9yIiAvPgogIDx1cGRhdGUgY2hlY2s9ImFsd2F5cyIvPgo8L2pubHA+Cg==';

    var sections = {};
    sections.home = ['btnHome', 'contentHome'];
    sections.resume = ['btnResume', 'contentResume'];
    sections.web = ['btnWeb', 'contentWeb'];
    sections.fun = ['btnFun', 'contentFun'];
    sections.game = ['btnGame', 'contentGame'];
    sections.school = ['btnSchool', 'contentSchool'];

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
        //Good reading: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
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

    function clickBtn(thisElement){
        hideSections();
        showSection(thisElement.id);
        updateUrl(thisElement.id);
        resizeIframe();
    }

    function FakelinkClick(thisElement){
        clickBtn(thisElement);
        window.location.reload();
        return false;
    }

    function hideInChrome(thisElement){
        if(isChrome) {
            thisElement.hide();
        }
    }

    function showInChrome(thisElement){
        if(!isChrome) {
            thisElement.hide();
        }
    }

    $(document).ready(function () {
        onReady();

        $(window).resize(function () {
            resizeIframe();
        });

        $('.mainBtns').click(function () { clickBtn(this); });
        $(".fakeBtns").click(function(){ clickBtn(this); });
        $("#webstart").click(function(){ launchApplication(); });

        hideInChrome($('.hideInChrome'));
        showInChrome($('.showInChrome'));

        if(!isChrome){
            dtjava.addOnloadCallback(javafxEmbed);
        }

    });

    //Java stuff
    function launchApplication() {
        var jnlpfile = "/school/Calculator.jnlp";
        console.log(calcUrl);
        dtjava.launch({
            url : jnlpfile,
            jnlp_content : content
        },{ javafx : '2.2+' },{});
        return false;
    }

    function javafxEmbed() {
        dtjava.embed(
        {
            url : '/school/Calculator.jnlp',
            placeholder : 'javafx-app-placeholder',
            width : 224,
            height : 292,
            jnlp_content : content
        },{javafx : '2.2+'},{});
    }

    //<!-- Embed FX application into web page once page is loaded -->




}());
