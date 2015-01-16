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

    function displayString(){
        var string = "Device is <strong>" + printDeviceType() + "</strong> ";
        string += "and page is <strong>" + selectPageType() + "</strong>";
        return string;
    }

    function printDeviceType(){
        if (isMobileDevice()){
            return "mobile";
        }else{
            return "desktop";
        }
    }


    function switchPageType(){
    if(key in localStorage){
      localStorage.removeItem(key);
    }else{
      localStorage.setItem(key,true);
    }

    function serverMobile(){
    if (isMobileDevice()){
      if(key in localStorage){
        return false;
      }
      return true;
    }else{//Desktop
      if (key in localStorage){
        console.log('Hello friends');
        return true;
      }
      return false;
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

    function selectPageType(){
        if ((isMobileDevice() && key in localStorage) || !isMobileDevice()){
                return "desktop";
        }else{
                return "mobile";
        }
    }




});
