$( document ).ready(function() {
  var count = 0;

  function updateCount(){
    $("#count").text(count);
    console.log( "count: " + count );
  };

  updateCount();
  $("#button").click( function(){
    count++;
    updateCount();
    alert('You clicked the button');
   });

});
