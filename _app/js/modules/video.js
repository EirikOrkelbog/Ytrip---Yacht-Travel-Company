export default function video() {
	const button = document.querySelector(".video__button");
	const video = document.querySelector(".video__player video");
		
	button.addEventListener('click', handleButtonClick);
	video.addEventListener('click', handleVideoClick);
	
	function handleButtonClick() {
		playVideo();
	}
	
	function handleVideoClick() {
		pauseVideo();
	}
	
	function playVideo() {
		if(video.paused) {
			video.play();
			button.classList.add('video__hide');
		}
	}
	
	function pauseVideo() {
		if(video.play) {
			video.pause();
			button.classList.remove('video__hide');
		}
	}
}