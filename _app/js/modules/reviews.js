export default function reviews() {
	const buttonPrevious = document.getElementById('review__previous');
	const buttonNext = document.getElementById('review__next');
	const reviews = document.querySelectorAll('.reviews__slide');

	buttonNext.addEventListener('click', handleNextClick);
	buttonPrevious.addEventListener('click', handlePreviousClick);

	let currentReview = 0;

	function handleNextClick() {
		nextReview();
	}

	function handlePreviousClick() {
		previousReview();
	}

	// This function first removes the visible class from all slides, and then adds the class to the slideIndex.
	// The slideIndex starts on index 0 when showReview(0) is called.
	function showReview(slideIndex) {
		for (let index = 0; index < reviews.length; index++) {
			reviews[index].classList.remove("review__visible");
		}

		reviews[slideIndex].classList.add("review__visible");

		currentReview = slideIndex;
	}

	showReview(0);

	// The next and previous functions assigns a new variable; newIndex that adds or substracts 1 from the currentReview.
	function nextReview() {
		let newIndex = currentReview + 1;

		if (newIndex >= reviews.length) {
			newIndex = 0;
		}

		showReview(newIndex);
	}

	function previousReview() {
		let newIndex = currentReview - 1;

		if (newIndex < 0) {
			newIndex = reviews.length - 1;
		}

		showReview(newIndex);
	}
}