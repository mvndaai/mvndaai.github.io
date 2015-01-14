$( document ).ready(function() {
  //Bug, you can only click on one item at a time to delete
  update();

  $("#store").click(function() {
    store_values();
  });

  $(document).keypress(function(e) {
    if(e.which == 13) { //alert('You pressed enter!');
      store_values();
    }
  });

  $("#clearLocal").click(function(){
    localStorage.clear();
    update_localStorage();
  });

  $("#clearCookie").click(function(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
      eraseCookie(cookies[i].split("=")[0]);
    }
    update_cookies();
  });

  $(".item_local").click(function() {
    var key = $(this);
    key = key.text().split("=")[0];
    localStorage.removeItem(key);
    console.log("LocalStorage Deleted: "+key);
    update_localStorage();
  });

  $(".item_cookie").click(function() {
    var key = $(this);
    key = key.text().split("=")[0];
    eraseCookie(key);
    console.log("Cookie Deleted: "+key);
    update_cookies();
  });

  function update(){
    update_localStorage();
    update_cookies();
  }
  function update_localStorage(){
    var local_text = "";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      local_text +=  "<span class='item_local'></br>"+ key + "=" + localStorage[key]+ "</span>";
    }
    $("#local_box").html(local_text);
    console.log(localStorage);
  }

  function update_cookies(){
    var cookie_text = "";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      cookie_text += "<span class='item_cookie'></br>"+cookies[i]+"</span>";
    $("#cookie_box").html(cookie_text);
    console.log(document.cookie);
  }

  function store_values(){
    var key = $("#key").val();
    var value = $("#value").val();
    var type = $('input[name="type"]:checked').val();

    if(key !== ''){
      console.log("key:", key, "| value:", value, "| type:", type);
      if(type === 'local'){
        localStorage[key]=value;
        update_localStorage();
      }else{
        createCookie(key,value,10);
        update_cookies();
      }
    }
  }

  function createCookie(name,value,days) {
    var expires = "";
  	if (days) {
  		var date = new Date();
  		date.setTime(date.getTime()+(days*24*60*60*1000));
  		expires = "; expires="+date.toGMTString();
  	}
  	document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
  	var nameEQ = name + "=";
  	var ca = document.cookie.split(';');
  	for(var i=0;i < ca.length;i++) {
  		var c = ca[i];
  		while (c.charAt(0) === ' ') c = c.substring(1,c.length);
  		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
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
