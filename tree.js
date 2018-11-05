/*particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  }
});
*/

window.develop = true;
window.setTimeout(function () {
  if (window.develop) return;
  window.location.reload();
}, 30000);

document.addEventListener("DOMContentLoaded", function () {
  var h = document.documentElement.clientHeight;
  var lowerBound = -0.021 * h;
  var upperBound = 0.052 * h;
  for (var ornament of document.getElementsByClassName("ornament")) {
    var margin = getRandomNumber(lowerBound, upperBound);
    ornament.style.marginTop = margin + "px";
  }
});

function getRandomNumber(start, end) {
  if (!start) start = 0;
  if (!end) end = 1;

  return Math.floor(Math.random() * end) + start;
}