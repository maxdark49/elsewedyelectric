




/*========================================
    Navigation menu
========================================*/
$(function () {

    //show & hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        //show & hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50 && $(window).width() >= 768) {

            // Show white nav
            $(".main-header").addClass("scroll-nav-top");
            $(".header-options").addClass("header-options-scroll");

            $(".homeBut-menu").addClass("homeBut-menu-scroll");
            $(".dropbtn-menu").addClass("dropbtn-scroll");


        } else {

            // Hide white nav
            $(".main-header").removeClass("scroll-nav-top");
            $(".header-options").removeClass("header-options-scroll");

            $(".homeBut-menu").removeClass("homeBut-menu-scroll");
            $(".dropbtn-menu").removeClass("dropbtn-scroll");

        }
    }


});








$(document).ready(function () {
    // This will fire when document is ready:
    $(window).resize(function () {
        // This will fire each time the window is resized:
        if ($(window).width() >= 768) {
            // if larger or equal
            $("#mainMenu-nav").addClass("navbar-fixed-top");
        } else {
            // if smaller
            $("#mainMenu-nav").removeClass("navbar-fixed-top");
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});







$(function(){
    
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        // get section id like #about, # services, #work, #team and etc.
        var section_id = $(this).attr("href");
        var widthNum = $(window).width();
        if(widthNum<992){
            $("html, body").animate({
                scrollTop:$(section_id).offset().top
            }, 1250, "easeInOutExpo");
        }
        

        
    });
     
 });












/*========================================
    Animation

    $(function(){
    structue bs yekon loaded

    $(window).on('load', function () {
    lazem kol 7aga tkon loaded 7ata el images
========================================*/

// animate on scroll
$(function () {
    new WOW().init();
});




/*========================================
    locations
========================================*/
/* 
$(function () {
    $("#locations-items").owlCarousel({
        items: 2,
        autoplay: true,
        center: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        margin: 0,
        autoWidth:false,
        dots: true
        
        

    });
});


 */





























