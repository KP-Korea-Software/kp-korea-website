window.onload = function(){
  balkje();
}
function opending(a){

  $("#niks223").css("display", "block");
  $("#niks223").fadeTo("fast", 0.6);


  if(a == 1){
    $.scrollify.disable();
    $("#gone1").css("display", "block");
    $("#gone1").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone1").style.overflowY = "auto";
    }, 500);
  }if(a == 2){
    $.scrollify.disable();
    $("#gone2").css("display", "block");
    $("#gone2").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "1%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone2").style.overflowY = "auto";
    }, 500);
  }

  if(a == 3){
    $.scrollify.disable();
    $("#gone3").css("display", "block");
    $("#gone3").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone3").style.overflowY = "auto";
    }, 500);
  }
   if(a == 4){
     $.scrollify.disable();
    $("#gone4").css("display", "block");
    $("#gone4").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone4").style.overflowY = "auto";
    }, 500);
  }
  if(a == 5){
    $.scrollify.disable();
    $("#gone5").css("display", "block");
    $("#gone5").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone5").style.overflowY = "auto";
    }, 500);
  }
  if(a == 6){
    $.scrollify.disable();
    $("#gone6").css("display", "block");
    $("#gone6").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone6").style.overflowY = "auto";
    }, 500);
  }
  if(a == 7){
    $.scrollify.disable();
    $("#gone7").css("display", "block");
    $("#gone7").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone7").style.overflowY = "auto";
    }, 500);
  }
  if(a == 8){
    $.scrollify.disable();
    $("#gone8").css("display", "block");
    $("#gone8").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone8").style.overflowY = "auto";
    }, 500);
  }
  if(a == 9){
    $.scrollify.disable();
    $("#gone9").css("display", "block");
    $("#gone9").fadeTo("fast", 1);
    $(".title").css("margin-bottom", "5%");
    $(".titleFilm").css("margin-bottom", "1%");
    $(".detext").fadeTo("slow", 1);
    setTimeout(function () {
      document.getElementById("gone9").style.overflowY = "auto";
    }, 500);
  }
}

function closeOpending(){


  $(".detext").fadeTo(400, 0);
  $(".title").css("margin-bottom", "15%");
  $(".titleFilm").css("margin-bottom", "15%");
  setTimeout(function () {
    $("#gone1").fadeTo(500 , 0);
    $("#niks223").fadeTo(300 , 0);//Fade de niks overal
    setTimeout(function () {
      $("#gone1").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone2").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone2").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone3").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone3").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone4").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone4").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone5").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone5").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone6").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone6").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone7").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone7").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone8").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone8").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
    $("#gone9").fadeTo(500, 0);
    setTimeout(function () {
      $("#gone9").css("display", "none");
      $("#niks223").css("display", "none");
    }, 500);
  }, 400);
  $.scrollify.enable();
}
function balkje(){
  $(".title").hover(function(){
    $(".title").css("color", "grey");
  });
  $(".title").mouseleave(function(){
    $(".title").css("color", "black");
  });
}
