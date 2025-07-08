$(document).ready(function() {

  $.scrollify({
    section : ".section-class-name",
    sectionName : "section-name",
    before: function(section){

    if(section <= 5 ){
      if(section === 2){
        setTimeout(function () {
          $('#pag1_1').css('top','45%');
          $('#pag1_1').css('opacity','1');
        }, 500);

      }
      if(section !== 2){
        $('#pag1_1').css('top','55%');
        $('#pag1_1').css('opacity','0');
      }

      if(section === 3){
        setTimeout(function () {
          $('#pag1_2').css('top','45%');
          $('#pag1_2').css('opacity','1');
        }, 500);
      }
      if(section !== 3){
        $('#pag1_2').css('top','55%');
        $('#pag1_2').css('opacity','0');
      }
      if(section === 4){
        setTimeout(function () {
          $('#pag1_3').css('top','45%');
          $('#pag1_3').css('opacity','1');
        }, 500);

      }
      if(section !== 4){
        $('#pag1_3').css('top','55%');
        $('#pag1_3').css('opacity','0');
      }
      if(section === 5){
        setTimeout(function () {
          $('#pag1_4').css('top','45%');
          $('#pag1_4').css('opacity','1');
        }, 500);
      }
      if(section !== 5){
        $('#pag1_4').css('top','55%');
        $('#pag1_4').css('opacity','0');
      }
    }
    if(section === 6){
      setTimeout(function () {
        $('#pag1_5').css('top','45%');
        $('#pag1_5').css('opacity','1');
      }, 500);
    }
    if(section !== 6){
      $('#pag1_5').css('top','55%');
      $('#pag1_5').css('opacity','0');
    }

      if(section === 7){
        setTimeout(function () {
          $('#pag1_6').css('top','45%');
          $('#pag1_6').css('opacity','1');
        }, 500);
      }
      if(section !== 7){
        $('#pag1_6').css('top','55%');
        $('#pag1_6').css('opacity','0');
      }
    if(section <= 13 && section >= 8 ){
      // HOOFDSTUK 2 ------------------------
      //

      if(section === 9){
        setTimeout(function () {
          $('#pag2_1').css('top','45%');
          $('#pag2_1').css('opacity','1');
        }, 500);
      }
      if(section !== 9){
        $('#pag2_1').css('top','55%');
        $('#pag2_1').css('opacity','0');
      }

      if(section === 10){
        setTimeout(function () {
          $('#pag2_2').css('top','45%');
          $('#pag2_2').css('opacity','1');
        }, 500);
      }
      if(section !== 10){
        $('#pag2_2').css('top','55%');
        $('#pag2_2').css('opacity','0');
      }

      if(section === 11){
        setTimeout(function () {
          $('#pag2_3').css('top','45%');
          $('#pag2_3').css('opacity','1');
        }, 500);
      }
      if(section !== 11){
        $('#pag2_3').css('top','55%');
        $('#pag2_3').css('opacity','0');
      }

      if(section === 12){
        setTimeout(function () {
          $('#pag2_4').css('top','45%');
          $('#pag2_4').css('opacity','1');
        }, 500);
      }
      if(section !== 12){
        $('#pag2_4').css('top','55%');
        $('#pag2_4').css('opacity','0');
      }

      if(section === 13){
        setTimeout(function () {
          $('#pag2_5').css('top','45%');
          $('#pag2_5').css('opacity','1');
        }, 500);
      }
      if(section !== 13){
        $('#pag2_5').css('top','55%');
        $('#pag2_5').css('opacity','0');
      }
    }
// HOOFDSTUK 3 ----------------------------
//
    if(section <= 20 && section >= 14 ){
      if(section === 14){
        setTimeout(function () {
          $('#pag3_2').css('top','45%');
          $('#pag3_2').css('opacity','1');
        }, 500);
      }
      if(section !== 14){
        $('#pag3_2').css('top','55%');
        $('#pag3_2').css('opacity','0');
      }

      if(section === 15){
        setTimeout(function () {
          $('#pag3_3').css('top','45%');
          $('#pag3_3').css('opacity','1');
        }, 500);
      }
      if(section !== 15){
        $('#pag3_3').css('top','55%');
        $('#pag3_3').css('opacity','0');
      }

      if(section === 16){
        setTimeout(function () {
          $('#pag3_4').css('top','45%');
          $('#pag3_4').css('opacity','1');
        }, 500);
      }
      if(section !== 16){
        $('#pag3_4').css('top','55%');
        $('#pag3_4').css('opacity','0');
      }

      if(section === 17){
        setTimeout(function () {
          $('#pag3_5').css('top','30%');
          $('#pag3_5').css('opacity','1');
        }, 500);
      }
      if(section !== 17){
        $('#pag3_5').css('top','40%');
        $('#pag3_5').css('opacity','0');
      }

      if(section === 18){
        setTimeout(function () {
          $('#pag3_6').css('top','45%');
          $('#pag3_6').css('opacity','1');
        }, 500);
        $('#pijltje').css('transform', 'rotate(180deg) scaleX(-1)');
        $('#pijltje').click(function(){
            window.location.href  = "../index.html";
            $('#pijltje').css('transform', 'rotate(0deg) scaleX(-1)');
        });
      }
      if(section !== 18){
        $('#pag3_6').css('top','55%');
        $('#pag3_6').css('opacity','0');
        $('#pijltje').css('transform', 'rotate(0deg) scaleX(-1)');

      }

    }
  }
  });

  $('#pijltje').click(function(){
    $.scrollify.next()
  });

});
