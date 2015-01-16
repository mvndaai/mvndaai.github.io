$( document ).ready(function() {
    var key = "force_page_type";

    function setup(){
        $("#current").html(displayString());
        logToConsole();
    }
    setup();

    function logToConsole(){
        console.log(displayString());
        console.log(localStorage[key]);
    }

    $("#switch").click(function(){
        console.log("Clicked switch button");
        switchPageType();
        $("#current").html(displayString());
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
        if (key in localStorage){ string += "forced";}
        else{string += "default";}
        return string;
    }

    function selectPageType(){
        if ((isMobileDevice() && key in localStorage) || !(isMobileDevice())){
            return "desktop";
        }else{
            return "mobile";
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



});
