const hiddenCover = document.getElementById("cover");
const showMain = document.getElementById("main");
const buttonMain = document.getElementById("open-main");

buttonMain.onclick = function () {
  hiddenCover.style.display = "none";
  showMain.style.display = "block";
};

let countDate = new Date("Feb 24, 2024 00:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let resepsi = countDate - now;

  let hari = Math.floor(resepsi / (1000 * 60 * 60 * 24));
  let jam = Math.floor((resepsi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let menit = Math.floor((resepsi % (1000 * 60 * 60)) / (1000 * 60));
  let detik = Math.floor((resepsi % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML =
    hari + " Hari " + jam + " Jam " + menit + " Menit " + detik + " Detik.";
}, 1000);

const audioButton = document.getElementById("audioButton");
const bgmAudio = document.getElementById("bgmAudio");

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

// Update the button state based on the initial state of the audio
updateButtonState();

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
