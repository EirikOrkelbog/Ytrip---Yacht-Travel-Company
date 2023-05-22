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

	// Function to show a slide by adding the "review__visible" class
	function showReview(slideIndex) {
	  // Remove "review__visible" class from all reviews
	  for (let i = 0; i < reviews.length; i++) {
		 reviews[i].classList.remove("review__visible");
	  }
	
	  // Add "review__visible" class to the specified slide
	  reviews[slideIndex].classList.add("review__visible");
	
	  // Update current slide index
	  currentReview = slideIndex;
	}
	
	// Example usage: Show the first slide initially
	showReview(0);

	function nextReview() {
		let newIndex = currentReview + 1;

		// If the next slide index is greater than the number of reviews, wrap around to the first slide
		if (newIndex >= reviews.length) {
		  newIndex = 0;
		}
	 
		showReview(newIndex);
	}

	function previousReview() {
		let newIndex = currentReview - 1;

		// If the previous slide index is less than 0, wrap around to the last slide
		if (newIndex < 0) {
		  newIndex = reviews.length - 1;
		}
	 
		showReview(newIndex);
	}
}




