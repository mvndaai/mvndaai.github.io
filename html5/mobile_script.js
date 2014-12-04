$( document ).ready(function() {

  setup();

  $("#switch").click(function(){
    switchPageType();
    logs();
  });



  function setup(){
    logs();

    $("#current").html(
      "Device is moblile: "+isMobileDevice()
      +"</br>Serving mobile page:"+serverMobile()
    );


    if (isLocal()){
      //console.log("This page is local");
    }else{
      //console.log("This page is online");
    }

  }

  function logs(){
    console.log("mobile_device:"+isMobileDevice());
    console.log("display_mobile:"+serverMobile());
  }

  var key = "force_page_type"

  function switchPageType(){
    if(key in localStorage){
      localStorage.removeItem(key);
    }else{
      localStorage.setItem(key,true);
    }
  }

  function serverMobile(){
    if (isMobileDevice()){
      if(key in localStorage){
        return false;
      }
      return true;
    }else{//Desktop
      if (key in localStorage){
        console.log('Hello friends')
        return true;
      }
      return false;
    }
  }

  function isMobileDevice(){
    if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        return true;
    } else {
        return false;
    }
  }

  function isLocal(){
    var current_url = document.URL;
    if (current_url.indexOf("file://") > -1)
      return true;
    return false;
  }


});
