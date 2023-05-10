export default function trips() {
	const slides = document.querySelectorAll('.slideshow__slide');
	const buttonPrevious = document.querySelector('.button-previous');
	const buttonNext = document.querySelector('.button-next');
	console.log(slides, buttonNext, buttonPrevious);

	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	function handleButtonPreviousClick(event) {
		showPreviousSlide();
		updateSlideshowHTML();
	}

	function handleButtonNextClick(event) {
		showNextSlide();
		updateSlideshowHTML();
	}

	let currentSlideIndex = 0;

	function showPreviousSlide() {
		if (currentSlideIndex > 0) {
			currentSlideIndex--;
		} else {
			currentSlideIndex = slides.length - 1;
		}
	}

	function showNextSlide() {
		if (currentSlideIndex < slides.length - 1) {
			currentSlideIndex++;
		} else {
			currentSlideIndex = 0;
		}
	}

	function updateSlideshowHTML() {
		for (const slide of slides) {
			slide.classList.remove('slide-active');
		}
		slides[currentSlideIndex].classList.add('slide-active');
	}
}