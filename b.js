AOS.init();
let countDate = new Date("Feb 24, 2024 10:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let resepsi = countDate - now;

  let hari = Math.floor(resepsi / (1000 * 60 * 60 * 24));
  let jam = Math.floor((resepsi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let menit = Math.floor((resepsi % (1000 * 60 * 60)) / (1000 * 60));
  let detik = Math.floor((resepsi % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari + "<br> Hari ";
  document.getElementById("jam").innerHTML = jam + "<br> Jam ";
  document.getElementById("menit").innerHTML = menit + "<br> Menit ";
  document.getElementById("detik").innerHTML = detik + "<br> Detik ";
}, 1000);

function scrollMainPage() {
  let page = document.getElementById("mainPage");
  let button = document.getElementById("buttonUndangan");
  button.onclick = function () {
    page.scrollIntoView({ behavior: "smooth" });
    button.style.display = "none";
    bgmAudio.play();
  };
}

let audioButton = document.getElementById("audioButton");
let bgmAudio = document.getElementById("bgmAudio");

audioButton.addEventListener("click", toggleAudio);

function toggleAudio() {
  const isPlaying = !bgmAudio.paused;

  if (isPlaying) {
    bgmAudio.pause();
  } else {
    bgmAudio.play();
  }

  updateButtonState();
}

function updateButtonState() {
  const isPlaying = !bgmAudio.paused;

  if (isPlaying) {
    audioButton.classList.remove("audio-paused");
    audioButton.classList.add("audio-playing");
  } else {
    audioButton.classList.remove("audio-playing");
    audioButton.classList.add("audio-paused");
  }
}

updateButtonState();
