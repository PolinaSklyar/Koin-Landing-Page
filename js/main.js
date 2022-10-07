const play = document.querySelector('.adventages__play');
const video = document.querySelector(".adventages__video video");

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('adventages__play--hidden');
})



const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "/img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "/img/icons/nav-open.svg";
    }
}



AOS.init();