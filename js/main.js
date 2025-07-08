window.onload = function(){

  $(".nav-selector").click(function(){
    $("header").css("opacity","0");
    $("header").css("top","-30%");
    $(".selector").css("width","70%");
    setTimeout(function () {
      $("header").css("display","none")
      $("nav").css("top","5%")

    }, 300);
    setTimeout(function () {
      $("#main-container").css("display","block")
      $("#bottom").css("display","block")
    }, 2000);
      setTimeout(function () {
        $("#main-container").css("opacity","1")
        $("#bottom").css("opacity","1")
    }, 2200);
  });

};

function setData(arr,id){
    $("body").css({"background": 'url('+arr[id]['image']+') no-repeat fixed',"background-size":"cover"});
    document.getElementById('py_selector').src=arr[id]['selectD'];
    document.getElementById('ws_selector').src=arr[id]['selectC'];
    document.getElementById('kg_selector').src=arr[id]['selectT'];

    document.getElementById('link').setAttribute('href',arr[id]['link']);
    document.getElementById('title_text').innerHTML = arr[id]['title'];
    document.getElementById('title_left').innerHTML = arr[id]['titleL'];
    document.getElementById('title_middle').innerHTML = arr[id]['titleM'];
    document.getElementById('title_right').innerHTML = arr[id]['titleR'];
    document.getElementById('title_left').setAttribute('href', arr[id]['titlelink1']);
    document.getElementById('title_middle').setAttribute('href', arr[id]['titlelink2']);
    document.getElementById('title_right').setAttribute('href', arr[id]['titlelink3']);
    document.getElementById('left_text').innerHTML = arr[id]['textL'];
    document.getElementById('right_text').innerHTML = arr[id]['textR'];
    document.getElementById('middle_text').innerHTML = arr[id]['textM'];

}

function section(title,titleL,titleM,titleR,textL,textM,textR,link,selectT,selectC,selectD,image,titlelink1,titlelink2,titlelink3){
    this.title = title;
    this.titleL = titleL;
    this.titleM = titleM;
    this.titleR = titleR;
    this.textL = textL;
    this.textM = textM;
    this.textR = textR;
    this.link = link;
    this.selectT = selectT;
    this.selectC = selectC;
    this.selectD = selectD;
    this.image = image;
    this.titlelink1 = titlelink1;
    this.titlelink2 = titlelink2;
    this.titlelink3 = titlelink3;
}

$( document ).ready(function() {

    var arr = [];

    arr.push(new section(
        'dagelijks leven',
        'Werkkampen','Weeshuis','Hongersnood',
        '“If someone goes inside this building, in three months he will be dead or disabled for life.” - survivor Camp 22',
        '“Ik wil een wetenschapper worden die satellieten de lucht in schiet!” - Yang, 6 jaar',
        '“Er is weinig eten en de officieren eisen grote porties op om te verkopen op de zwarte markt. Daardoor blijft er weinig over voor de gewone mensen.”',
        'info1/index.html',
        'img/tourisme-selector.png',
        'img/communisme-selector.png',
        'img/dagelijksleven-selected.png',
        'img/background-dagelijksleven.png',
        'info1/index.html#2',
        'info1/index.html#7',
        'info1/index.html#12'

    ));

    arr.push(new section('Communisme',
        'Geschiedenis','De Grote Leider','Propaganda',
        '“Communism has never come to power in a country that was not disrupted by war or corruption, or both.” - John F. Kennedy',
        'Vier jaar na de dood van Kim il-sung in 1994 werd er in de grondwet een artikel bijgeschreven dat hem de ‘Eeuwige President van de Republiek’ maakte.',
        '“Sinds je geboorte krijg je een constante stroom aan propaganda binnen” - Lee',
        'content_page2/index.html',
        'img/tourisme-selector.png',
        'img/communisme-selected.png',
        'img/dagelijksleven-selector.png',
        'img/background-communisme.png',
        'content_page2/index.html#2',
        'content_page2/index.html#9',
        'content_page2/index.html#14'
    ));

    arr.push(new section('Tourisme',
        'Touristen begeleiding','Kumgang Resort','Strandvakantie',
        'Alles moet vertaald worden en gevoelige vragen vertaalden onze gidsen simpelweg niet. - Marieke de Vries',
        '“De stranden in Wonsan zorgen voor contact met de lokale bevolking. Maar toch kijken de bewakers altijd toe.” - Olaf Schuelke',
        'Ooit in bezit van het zuid-Koreaanse Hyundai, zorgde dit resort voor inter-Koreaanse familie reünies. ',
        'content_page3/index.html',
        'img/tourisme-selected.png',
        'img/communisme-selector.png',
        'img/dagelijksleven-selector.png',
        'img/background-tourisme.png',
        'content_page3/index.html#2',
        'content_page3/index.html#10',
        'content_page3/index.html#17'
    ));


    $(".nav-selector").hover(
        function(){
            var navitem = $( "nav li" ).index(this);
          setData(arr, navitem);
        },
        function(){}
    );

});
