$('.mobile-menu-icon').on( "click", function (){
    console.log("Clicked");
  $('.collapsible-nav-links').slideToggle()
});



//////////////////////////////////////////////////////////////////////////////////////////


//$('section').fadeIn(5000) to fade in content

//target the viewport to fade in specific content



//////////////////////////////////////////////////////////////////////////////////////////

//leaves card
let dropDowns = [$(".html-dropdown"), $(".css-dropdown"), $(".js-dropdown"), $('.react-dropdown'), $('#java-card')];

//HTML toggle
dropDowns[0].on("click", function() {
    dropDowns[1].fadeToggle();
    dropDowns[2].fadeToggle();
    $(".html-text").slideToggle();
});

//CSS Toggle
dropDowns[1].on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[2].fadeToggle();
    $(".css-text").slideToggle();
});

//JS Toggle
dropDowns[2].on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[1].fadeToggle();
    $(".js-text").slideToggle();
});

//React Toggle
$('.react-dropdown').on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[1].fadeToggle();
    dropDowns[2].fadeToggle();
    dropDowns[4].fadeToggle();
    $(".react-text").slideToggle();
});




