// menu-burger
const btnMenu = document.querySelector('.header-burger__btn');
const navMenu = document.querySelector('.header__menu');
const click1 = document.querySelector('.header__link-1');
const click2 = document.querySelector('.header__link-2');
const click3 = document.querySelector('.header__link-3');
const click4 = document.querySelector('.header__link-4');
const click5 = document.querySelector('.header__link-5');
btnMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    btnMenu.classList.toggle('active');
});

click1.addEventListener('click', function() {
	navMenu.classList.remove('active');
	btnMenu.classList.remove('active');
})

click2.addEventListener('click', function() {
	navMenu.classList.remove('active');
	btnMenu.classList.remove('active');
})

click3.addEventListener('click', function() {
	navMenu.classList.remove('active');
	btnMenu.classList.remove('active');
})

click4.addEventListener('click', function() {
	navMenu.classList.remove('active');
	btnMenu.classList.remove('active');
})

click5.addEventListener('click', function() {
	navMenu.classList.remove('active');
	btnMenu.classList.remove('active');
})
// menu-burger

// phone-mask
$(document).ready(function () {
    $("#phone").inputmask({
        "mask": "+38(099) 999-99-99"
    });
});
// phone-mask

// video
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("play-btn");
const videoBg = document.querySelector(".video__bg");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
	videoBg.classList.toggle('hide');
});
circlePlayButton.addEventListener('click', function() {
    videoBg.classList.toggle('hide');
});
// video

