$( document ).ready(function() {
    var key = "force_page_type";

    function setup(){
        //logToConsole();
        updatePage();
    }
    setup();

    function logToConsole(){
        console.log(displayString());
        console.log(localStorage[key]);
    }

    function updatePage(){
        $("#current").html(displayString());
        $("#example").html(capitaliseFirstLetter(selectPageType()));
    }

    $("#switch").click(function(){
        console.log("Clicked switch button");
        switchPageType();
        updatePage();
    });

    function switchPageType(){
        if(key in localStorage){
            localStorage.removeItem(key);
        }else{
            localStorage.setItem(key,true);
        }
    }

    function displayString(){
        var string = "Device is <strong>" + printDeviceType() + "</strong> ";
        string += "and page is <strong>" + selectPageType() + "</strong>";
        string += "<br> Page type is ";
        if (key in localStorage){ string += "<strong>forced</strong>";}
        else{string += "<strong>default</strong>";}
        return string;
    }

    function selectPageType(){
        if( isMobileDevice() ){
            if (key in localStorage)
                return "desktop";
            return "mobile";
        }else{//Desktop
            if (key in localStorage)
                return "mobile";
            return "desktop";
        }
    }

    function printDeviceType(){
        if (isMobileDevice()){
            return "mobile";
        }else{
            return "desktop";
        }
    }

    function isMobileDevice(){
        if( navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        } else {
            return false;
        }
    }

    function capitaliseFirstLetter(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
