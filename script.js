//====================================

// ================ Login popup ======================= //

document.getElementById("loginto").addEventListener("click", function () {
  document.querySelector(".login").style.display = "flex";
});
document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".login").style.display = "none";
});

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eyeclose.png";
  } else {
    password.type = "password";
    eyeicon.src = "eyeopen.png";
  }
};



// =============  slider 1 ============ //

let sliderfive = tns({
  container: ".my-sliderfive",
  grabCursor: true,
  speed: 300,
  autoplayspeed: 1000,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  responsive: {
    1444: {
      items: 5,
    },
    1200:{
      items : 5,
    },
    1024: {
      items: 3,
    },
    768: {
      items: 2,
    },
    480: {
      items: 1,
    },
  },
});

// ================ Automated and button slider ============= //

let slider = tns({
  container: '.my-slider7',
  slideBy: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  responsive: {
    1440: {
      items: 4,
      gutter: 20
    },
    1024: {
      items: 3,
      gutter: 20
    },
    768: {
      items: 2,
      gutter: 20
    },
    480: {
      items: 1
    }
  }
});

