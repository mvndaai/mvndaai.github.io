$( document ).ready(function() {

  update();

  $("#store").click(function() {
    store_values();
    update();
  });

  $(document).keypress(function(e) {
    if(e.which == 13) {
        //alert('You pressed enter!');
        store_values();
        update();
    }
  });

  $("#clearLocal").click(function(){
    localStorage.clear();
    update();
  });

  $("#clearCookie").click(function(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
      eraseCookie(cookies[i].split("=")[0]);
    }
    update();
  });


  function update(){
    var local_text = "";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      local_text +=  "</br>"+ key + "=" + localStorage[key];
    }

    var cookie_text = "";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      cookie_text += "</br>"+cookies[i];


    $("#local_box").html(local_text);
    $("#cookie_box").html(cookie_text);


    console.log(localStorage);
    console.log(document.cookie);
  }

  function store_values(){
    var key = $("#key").val();
    var value = $("#value").val();
    var type = $('input[name="type"]:checked').val();

    if(!(key == '')){
      console.log("key:", key, "| value:", value, "| type:", type);
      if(type === 'local'){
        localStorage[key]=value;
      }else{
        createCookie(key,value,10)
      }
    }
  }

  function createCookie(name,value,days) {
  	if (days) {
  		var date = new Date();
  		date.setTime(date.getTime()+(days*24*60*60*1000));
  		var expires = "; expires="+date.toGMTString();
  	}
  	else var expires = "";
  	document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
  	var nameEQ = name + "=";
  	var ca = document.cookie.split(';');
  	for(var i=0;i < ca.length;i++) {
  		var c = ca[i];
  		while (c.charAt(0)==' ') c = c.substring(1,c.length);
  		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  	}
  	return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  //if (window["localStorage"])
  //localStorage.setItem(key,value);
  //localStorage[key]=value1;
  //localStorage.getItem(key);
  //localStorage[key];
  //localStorage.removeItem(key);
  //localStorage.clear();
});
