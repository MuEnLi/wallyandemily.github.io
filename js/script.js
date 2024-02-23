(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


     // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                $('.scroll-to-top').addClass('active');
            });
        } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                 $('.scroll-to-top').removeClass('active');
            });
        }
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -180
    });


  //Popup elements

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


   // Show embed video 

    var playVideo = $('.video-cover .play-but')
    $('.video-cover').each(function() {
        if ($(this).find('iframe').length) {
            $(this).find('iframe').attr('data-src', $(this).find('iframe').attr('src'), $(this).find('iframe').attr('src', ''));

        }

    });

    playVideo.on("click", function() {
        var blockVideo = $(this).closest('.video-cover');
        var iframeInstance = blockVideo.find('iframe');
        blockVideo.addClass('show-video');
        iframeInstance.attr('src', iframeInstance.attr('data-src'));
        return false;

    });



// Instagram feed setup

    var instaFeed = new Instafeed({
        get: 'user',
        userId: '13339175373',
        accessToken: '13339175373.95cbc68.b63a06b452874b6e8384eebc29a005ce',
        limit: 5,
        resolution: 'standard_resolution',
        template: '<li><a class="hover-effect rounded-circle" target="_blank" href="{{link}}"><span class="hover-effect-container"><span class="hover-effect-icon hover-effect-icon-small"><span class="fa fa-heart hover-effect-icon-inner"></span></span></span></span><img class=" mw-100" src="{{image}}" /></a></li>'
    });
    instaFeed.run();




  // Countdown setup

    $('.countdown').countdown('2024/08/17').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 ">%d</span> <span class="label ">Day%!d</span></div></div> '
    + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%H</span> <span class="label">Hour%!H</span></div></div> '
    + '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%M</span> <span class="label">Minute%!M</span></div></div> '
    + '<div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">%S</span> <span class="label">Second%!S</span></div></div>'));
});


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date("Aug 17, 2024 14:30:00")) + 0 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


})(jQuery);