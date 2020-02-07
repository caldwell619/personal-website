


//////////////////////////////////////////////////////////////////////////////////////////


//$('section').fadeIn(5000) to fade in content

//target the viewport to fade in specific content



//////////////////////////////////////////////////////////////////////////////////////////

//leaves card
let dropDowns = [$(".html-dropdown"), $(".css-dropdown"), $(".js-dropdown"), $('.react-dropdown'), $('#java-card')];

//HTML toggle
dropDowns[0].on("click", function() {
    dropDowns[1].toggleClass("hidden");
    dropDowns[2].toggleClass("hidden");
    dropDowns[3].toggleClass("hidden");
    dropDowns[4].toggleClass("hidden");
    $(".html-text").slideToggle();
});

//CSS Toggle
dropDowns[1].on("click", function(){
    dropDowns[0].toggleClass("hidden");
    dropDowns[2].toggleClass("hidden");
    dropDowns[3].toggleClass("hidden");
    dropDowns[4].toggleClass("hidden");
    $(".css-text").slideToggle();
});

//JS Toggle
dropDowns[2].on("click", function(){
    dropDowns[0].toggleClass("hidden");
    dropDowns[1].toggleClass("hidden");
    dropDowns[3].toggleClass("hidden");
    dropDowns[4].toggleClass("hidden");
    $(".js-text").slideToggle();
});

//React Toggle
$('.react-dropdown').on("click", function(){
    dropDowns[0].toggleClass("hidden");
    dropDowns[1].toggleClass("hidden");
    dropDowns[2].toggleClass("hidden");
    dropDowns[4].toggleClass("hidden");
    $(".react-text").slideToggle();
});

//java toggle
dropDowns[4].on("click", () => {
   dropDowns[0].toggleClass("hidden");
   dropDowns[1].toggleClass("hidden");
   dropDowns[2].toggleClass("hidden");
   dropDowns[3].toggleClass("hidden");
    $(".java-text").slideToggle();
});

$(".menu-toggle").on("click", () => {
    $(".mobile-navigation-links").toggleClass("link-collapse")
});

$(".mobile-navigation-links a").on("click", () => {
    $(".mobile-navigation-links").toggleClass("link-collapse")
});
