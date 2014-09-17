$( document ).ready(function() {

  /*
  function get_tenants(){
    var uri = "http://"+localStorage["server"]+":"+localStorage["port"]+"/iam/tenants"
    console.log("Uri: "+uri)
    //$.get( uri, function(data, status, xhr) {
    $.getJSON( uri, function( data ) {
      console.log(data);
    });
  }

  function new_tenant(){
    var uri = "http://"+localStorage["server"]+":"+localStorage["port"]+"/iam/tenants"
    $.post( uri, { name: "lame"})
      //.done(function( data ) {
        //alert( "Data Loaded: " + data );
    //});
  }

  new_tenant();
  //get_tenants();
  */


  setup();
  //localStorage.removeItem("server");
  //localStorage.removeItem("port");

//Config Section
  $("#config_button").click(function() {
    $("#config").toggle();
  });

  $("#config_save").click(function() {
    localStorage["server"]=$.trim($("#server").val());
    localStorage["port"]=$.trim($("#port").val());
    console.log("Server:",localStorage["server"],":",localStorage["port"]);
    refresh_server();

    if(!$("#credentials").is(":visible")  && !$("#admin").is(":visible") ){
      $("#credentials").show();
      $("#config").hide();
    }
  });

//Login
  $("#login").click(function() {
    login();
  });

//Logout
  $("#logout").click(function() {
    $("#logout").hide();
    $("#admin").hide();
    $("#credentials").show();
  });

  function setup(){
    if (localStorage.getItem("server") === null) {
      config_start();
    }else{
      normal_start();
    }
  }

  function config_start(){
    $("#admin").hide();
    $("#logout").hide();
    $("#credentials").hide();
  }

  function normal_start(){
    $("#config").hide();
    $("#admin").hide();
    $("#logout").hide();
    refresh_server();
    console.log("Server:",localStorage["server"],":",localStorage["port"]);
  }

  function login(){
    //Test un/pd
    //if true{
      $("#logout").show();
      $("#admin").show();
      $("#credentials").hide();
    //}else{
    //post error}
  }

  function refresh_server(){
    //$("#config_current").html(localStorage["server"];);
  }


  //function()

});
