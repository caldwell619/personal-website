$('.mobile-menu-icon').on( "click", function (){
    console.log("Clicked");
  $('.collapsible-nav-links').slideToggle()
});

//$('.html-dropdown')

//targets entire card
//need to figure out how to slow transition to center
var dropDowns = [$("#html-card"), $("#css-card"), $("#js-card"), $('#react-card')];

//leaves card
// var dropDowns = [$(".html-dropdown"), $(".css-dropdown"), $(".js-dropdown"), $('.react-dropdown')];

//HTML toggle
dropDowns[0].on("click", function() {
    for (var i = 1; i < dropDowns.length; i++) {
        dropDowns[i].fadeToggle();
    }
    $(".html-text").slideToggle();
});

//CSS Toggle
dropDowns[1].on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[2].fadeToggle();
    dropDowns[3].fadeToggle();
    $(".css-text").slideToggle();
});

//JS Toggle
dropDowns[2].on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[1].fadeToggle();
    dropDowns[3].fadeToggle();
    $(".js-text").slideToggle();
});

//React Toggle
$('.react-dropdown').on("click", function(){
    dropDowns[0].fadeToggle();
    dropDowns[1].fadeToggle();
    dropDowns[2].fadeToggle();
    $(".react-text").slideToggle();
});




