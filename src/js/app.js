var SLIDEOUT_HIDE_DELAY = 400;

/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  //http://tsuyoshiwada.github.io/sweet-scroll/
  const sweetScroll = new SweetScroll({
    offset: -30, // Specifies the value to offset the scroll position in pixels
    updateURL: true, // Update the URL hash on after scroll (true | false | "push" | "replace")
  });

  if ($('#particles-js').length) {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#e87020"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 20,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 19.18081918081918,
            "size_min": 3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#e87020",
          "opacity": 0.4,
          "width": 5
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        },
        nb: 80
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

  }

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
  });

  // Slideout Toggle button
  document.querySelector('#toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });
    
  $('#menu').on('mouseleave', function(){
    setTimeout(function(){
        slideout.toggle()
    }, SLIDEOUT_HIDE_DELAY);
  });

  if ($('#particles-js').length) {
    var heroBottom = $('#particles-js').offset().top + $('#particles-js').height() - (16*4);

    // on scroll, 
    $(window).on('scroll',function(){

      // we round here to reduce a little workload
      stop = Math.round($(window).scrollTop());
      if (stop > heroBottom) {
        $('#header').removeClass('over-hero');
      } else {
        $('#header').addClass('over-hero');
      }

    });
  }

}, false);
