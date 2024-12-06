// ------------------------Theme Switch -----------------------

function light() {
  document.body.classList.remove("dark-mode");
  document.getElementById("light").style.display = "none";
  document.getElementById("dark").style.display = "block";
}
function dark() {
  document.body.classList.add("dark-mode");
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";
}

function theme() {
  document.body.classList.toggle("dark-mode");
  const label = document.getElementsByClassName("label");
  for (let i = 0; i < label.length; i++) {
    label[i].classList.add("dark");
  }
}
function navtoggle() {
  document.querySelector(".bar").classList.toggle("active");
}

// ----------------------multi Tag line---------------------------------------

var typingEffect = new Typed(".multiText", {
  strings: ["BCA Graduate", "Web Developer", "UI<span > / </span>UX Designer"],

  loop: true,

  typeSpeed: 100,

  backSpeed: 80,

  backDelay: 1500,
});

// ---------------------------Scroll Animation--------------------------------

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//   ----------------------------Loader Animation ---------------------------------

var loadtime;

function loader() {
  document.getElementById("loader").style.display = "block";
}

window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("nav").style.display = "flex";
  setTimeout(showHome, 100);
  light();
};

function showHome() {
  document.getElementById("home").classList.add("active");
}

const date = new Date();
const year = date.getFullYear();
document.getElementById("copy").innerHTML = year;

// -----------------------------tilt animation --------------------------

VanillaTilt.init(document.querySelector(".hero-image"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".edu-box"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".button"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".skill"), {
  max: 25,
  speed: 400,
});

// ----------------------------mouse-move-------------------------

function spark(event) {
  let i = document.createElement("s");
  i.className = "mouseTrail";
  i.style.left = event.pageX + "px";
  i.style.top = event.pageY + "px";

  i.style.transform = `scale(${Math.random() * 2 + 1})`;

  i.style.setProperty("--x", getRandomTransitionValue());
  i.style.setProperty("--y", getRandomTransitionValue());
  document.body.appendChild(i);

  setTimeout(() => {
    document.body.removeChild(i);
  }, 2000);
}

function getRandomTransitionValue() {
  return `${Math.random() * 400 - 200}px`;
}

document.addEventListener("mousemove", spark);

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// ---------------------------------Disable Inspect Element-------------------------------

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
    e.preventDefault();
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
});
