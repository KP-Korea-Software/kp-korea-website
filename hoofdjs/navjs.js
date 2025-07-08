nm = 0;

async function klikBoven(){
  document.getElementById("navbar").style.display = "block";
  await sleep(300);
  document.getElementById("navbar").style.left = "0px";
  var x = document.getElementById("navbar");
  var y = x.getElementsByTagName("li");
  var i;
  for (i = 0; i < y.length; i++) {
      y[i].style.visibility = "visible";
  }
  document.getElementById("niks").style.visibility = "visible";
  await sleep(100);
  document.getElementById("niks").style.opacity = "0.6";
  await sleep(130);
}
async function terug(){
  document.getElementById("navbar").style.left = "-350px";
  await sleep(300);
  document.getElementById("navbar").style.display = "none";
  //$("niks").fadeTo("slow", 0);
  document.getElementById("niks").style.opacity = "0";
  await sleep(350);
  document.getElementById("niks").style.visibility = "hidden";
  var x = document.getElementById("navbar");
  var y = x.getElementsByTagName("li");
  var i;
  for (i = 0; i < y.length; i++) {
      y[i].style.visibility = "hidden";
  }
  nietKlikSourse();
}
async function hoveren(a){
  if(a==1){

    $("#id1").css("background-color", "#efefef");
    $("#id1").css("border-bottom", "solid 1px #bdbdbd");
    $("#id1").css("border-top", "solid 1px #bdbdbd");
  }
  if(a==2){

    $("#id2").css("background-color", "#efefef");
    $("#id2").css("border-bottom", "solid 1px #bdbdbd");
    $("#id2").css("border-top", "solid 1px #bdbdbd");
    $("#onHover1").css("height","auto");
    $("#onHover1").css("display","block");
    $("#onHover1").css("visibility","visible");
  }
  if(a==3){

    $("#id3").css("background-color", "#efefef");
    $("#id3").css("border-bottom", "solid 1px #bdbdbd");
    $("#id3").css("border-top", "solid 1px #bdbdbd");
    $("#onHover2").css("display","block");
    $("#onHover2").css("visibility","visible");
  }
  if(a==4){

    $("#id4").css("background-color", "#efefef");
    $("#id4").css("border-bottom", "solid 1px #bdbdbd");
    $("#id4").css("border-top", "solid 1px #bdbdbd");
    $("#onHover3").css("display","block");
    $("#onHover3").css("visibility","visible");
  }

}
function noHover(a){
  if(a==1){
    $("#id1").css("background-color", "white");
    $("#id1").css("border-bottom", "solid 1px white");
    $("#id1").css("border-top", "solid 1px white");
  }
  if(a==2){

    $("#id2").css("background-color", "white");
    $("#id2").css("border-bottom", "solid 1px white");
    $("#id2").css("border-top", "solid 1px white");
    $("#onHover1").css("display","none");
    $("#onHover1").css("visibility","hidden");
  }
  if(a==3){

    $("#id3").css("background-color", "white");
    $("#id3").css("border-bottom", "solid 1px white");
    $("#id3").css("border-top", "solid 1px white");
    $("#onHover2").css("display","none");
    $("#onHover2").css("visibility","hidden");
  }
  if(a==4){
    $("#id4").css("background-color", "white");
    $("#id4").css("border-bottom", "solid 1px white");
    $("#id4").css("border-top", "solid 1px white");
    $("#onHover3").css("display","none");
    $("#onHover3").css("visibility","hidden");
  }
  $(".active").css("background-color", "#efefef");
  $(".active").css("border-bottom", "solid 1px #bdbdbd");
  $(".active").css("border-top", "solid 1px #bdbdbd");
}
function klikSourse(){
  nm += 1;
  if(nm % 2 == 0){
    nietKlikSourse();
  }
  if(nm % 2 != 0){
    $("#sourceText").css("visibility","visible");
    $("#sourceText").css("display","block");
  }
}
function nietKlikSourse(){
  $("#sourceText").css("visibility","hidden");
  $("#sourceText").css("display","none");
}

$(function(){
  $(".body").on( "swipe", swipeHandler );

  function swipeHandler(){
    klikBoven();
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));//FUCKCKKKKKKKK
}
