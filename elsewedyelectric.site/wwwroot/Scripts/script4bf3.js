

/*========================================
    winners
    $(function(){
    structue bs yekon loaded
========================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});


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




/*==========================
          Slider
==========================*/

$(function () {
    $("#slider-items").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        slideSpeed: 300,
        paginationSpeed: 400,
        center: true,
        margin: 0,
        loop: true,
        autoplayHoverPause: true,
        singleItem: true




    });
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
side menu
========================================*/

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

function openCity1() {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 1; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 1; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

}

if (document.getElementById("defaultOpen") != null) {
    var hash = window.location.hash;
    var hash1 = hash.replace("#","");
    if (hash != "" && hash != "#" && document.getElementById(hash1) != null) {
        document.getElementById(hash1).click();
    } else {
        openCity1();
       // $(hash).click();
       // $(hash).toggleClass("active");
    }
    
}




/*========================================
    News-homePage
========================================*/
$(function () {
    $("#news-list-items").owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        margin: 20,
        dots: true,

        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 768 up
            768: {
                items: 2
            }
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
    history-aboutPage
========================================*/
$(function () {
    $("#history-list-items").owlCarousel({
        items: 5,
        autoplay: true,
        center: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        margin: 0,
        dots: false,

        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 456 up
            456: {
                items: 2
            },
            // breakpoint from 684 up
            684: {
                items: 3
            },
            // breakpoint from 912 up
            912: {
                items: 4
            },
            // breakpoint from 1140 up
            1140: {
                items: 5
            }
        }
    });
});


/*========================================
gal
========================================*/

/* CSS used here will be applied after bootstrap.css */



(function($){
    $('#thumbcarousel').carousel(0);
    var $thumbItems = $('#thumbcarousel .item');
    $('#carousel').on('slide.bs.carousel', function (event) {
       var $slide = $(event.relatedTarget);
       var thumbIndex = $slide.data('thumb');
       var curThumbIndex = $thumbItems.index($('#thumbcarousel .item.active').get(0));
        if (curThumbIndex>thumbIndex) {
            $('#thumbcarousel').one('slid.bs.carousel', function (event) {
                $('#thumbcarousel').carousel(thumbIndex);
            });
            if (curThumbIndex === ($thumbItems.length-1)) {
                $('#thumbcarousel').carousel('next');
            } else {
                $('#thumbcarousel').carousel(numThumbItems-1);
            }
        } else {
            $('#thumbcarousel').carousel(thumbIndex);
        }
    });
})(jQuery);



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



/*========================================
Show more but
========================================*/

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

/*========================================
Events
$(function(){
structue bs yekon loaded
========================================*/

$('.events').on('click', function () {
    //alert('.'this.id + '-gallery');
    $('#' + this.id + '-gallery').magnificPopup('open');
});

 


$('.gallery').each(function () {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        fixedContentPos: false
    });
});



/*========================================
videos
$(function(){
========================================*/

$('.oneVideo-action').on('click', function () {
    $('#' + this.id + '-play').magnificPopup('open');
});

$('.iframevideos').each(function () {
    $(this).magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false

    });
});

//$('#video-1').on('click', function () {
//    $('#video-1-play').magnificPopup('open');
//});

//$('#video-2').on('click', function () {
//    $('#video-2-play').magnificPopup('open');
//});

//$('#video-3').on('click', function () {
//    $('#video-3-play').magnificPopup('open');
//});

//$('#video-4').on('click', function () {
//    $('#video-4-play').magnificPopup('open');
//});





//$('#video-2-play').each(function () {
//    $(this).magnificPopup({
//        type: 'iframe',
//        mainClass: 'mfp-fade',
//        removalDelay: 160,
//        preloader: false,
//        fixedContentPos: false
//    });
//});

//$('#video-3-play').each(function () {
//    $(this).magnificPopup({
//        type: 'iframe',
//        mainClass: 'mfp-fade',
//        removalDelay: 160,
//        preloader: false,
//        fixedContentPos: false
//    });
//});

//$('#video-4-play').each(function () {
//    $(this).magnificPopup({
//        type: 'iframe',
//        mainClass: 'mfp-fade',
//        removalDelay: 160,
//        preloader: false,
//        fixedContentPos: false
//    });
//});








/*click on the image and open lightbox with close button and gallery*/
$(function () {
    $('#projects-gal').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});




























