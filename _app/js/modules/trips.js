export default function trips() {
	const slides = document.querySelectorAll('.slideshow__slide');
	const buttonPrevious = document.querySelector('.button-previous');
	const buttonNext = document.querySelector('.button-next');

	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);
	window.addEventListener('resize', handleResizeWindow);

	function handleButtonPreviousClick(event) {
		plusSlides(-1);
	}

	function handleButtonNextClick(event) {
		plusSlides(1);
	}

	function handleResizeWindow() {
		slidesPerView;
		updateSlideshowHTML();
	}

	let slidesPerView = window.innerWidth > 992 ? 3 : 1;
	let currentSlideIndex = 0;

	updateSlideshowHTML();

	function updateSlideshowHTML() {
		for (let index = 0; index < slides.length; index++) {
			slides[index].classList.remove('slide-active');
		}
		for (let index = currentSlideIndex; index < currentSlideIndex + slidesPerView; index++) {
			if (index < slides.length) {
				slides[index].classList.add('slide-active');
			}
		}
	}

	// This function takes in a parameter that adds on to the currentSlideIndex and moves to next or previous slide.
	// The function is called in the event handlers with 1 and -1 as parameters. 
	function plusSlides(addedSlides) {
		currentSlideIndex += addedSlides;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slides.length - slidesPerView;
		} else if (currentSlideIndex > slides.length - slidesPerView) {
			currentSlideIndex = 0;
		}
		updateSlideshowHTML();
	}
}