function toggle () {
    let promotionalVideo = document.querySelector(".promotional-video");
    let video = document.querySelector("video");
    promotionalVideo.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
