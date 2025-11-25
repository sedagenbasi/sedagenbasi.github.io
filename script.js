// Daktilo Efekti
const typedTextSpan = document.querySelector(".typing-text");
const textArray = ["actionable insights", "strategic decisions", "visual stories", "business value"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Particles.js Ayarları (KOYU RENK PARÇACIKLAR)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#0A2342" }, /* Parçacık Rengi: Lacivert */
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2, "random": false }, /* Hafif görünürlük */
    "size": { "value": 3, "random": true },
    "line_linked": { 
        "enable": true, 
        "distance": 150, 
        "color": "#0A2342", /* Çizgi Rengi: Lacivert */
        "opacity": 0.15, 
        "width": 1 
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
  },
  "retina_detect": true
});
