// export default function faq() {
// 	const faqItems = document.querySelectorAll('.faq__item');
// 	const icons = document.querySelectorAll('.faq__item img');

// 	faqItems.forEach((item) => {
// 		const answer = item.querySelector('.faq__answer');
// 		const icon = item.querySelector('img');

// 		item.addEventListener('click', () => {
// 			answer.classList.toggle('hide-answer');
// 			if (answer.className.includes('hide-answer')) {
// 				icon.src = '/_app/assets/icons/plus.svg';
// 			} else {
// 				icon.src = '/_app/assets/icons/minus.svg';
// 			}
// 			// Close all other answers
// 			faqItems.forEach((otherItem) => {
// 				if (otherItem !== item) {
// 					const otherAnswer = otherItem.querySelector('.faq__answer');
// 					const otherIcon = otherItem.querySelector('img');

// 					otherAnswer.classList.add('hide-answer');
// 					otherIcon.src = '/_app/assets/icons/plus.svg';
// 				}
// 			});
// 		});
// 		icons.forEach(otherIcon => {
// 			if (otherIcon !== icon) {
// 				otherIcon.src = '/_app/assets/icons/plus.svg';
// 			}
// 		});
// 		answer.classList.add('hide-answer');
// 		icon.src = '/_app/assets/icons/plus.svg';
// 	});
// }


export default function faqFunctionality(faqItems, icons) {
	const toggleAnswer = (item, answer, icon) => {
	  const isAnswerHidden = answer.classList.toggle('hide-answer');
	  icon.src = isAnswerHidden ? '/_app/assets/icons/plus.svg' : '/_app/assets/icons/minus.svg';
	};
 
	const closeOtherAnswers = (currentItem) => {
	  faqItems.forEach((item) => {
		 if (item !== currentItem) {
			const otherAnswer = item.querySelector('.faq__answer');
			const otherIcon = item.querySelector('img');
			otherAnswer.classList.add('hide-answer');
			otherIcon.src = '/_app/assets/icons/plus.svg';
		 }
	  });
	};
 
	faqItems.forEach((item) => {
	  const answer = item.querySelector('.faq__answer');
	  const icon = item.querySelector('img');
 
	  item.addEventListener('click', () => {
		 toggleAnswer(item, answer, icon);
		 closeOtherAnswers(item);
	  });
 
	  icons.forEach((otherIcon) => {
		 if (otherIcon !== icon) {
			otherIcon.src = '/_app/assets/icons/plus.svg';
		 }
	  });
 
	  answer.classList.add('hide-answer');
	  icon.src = '/_app/assets/icons/plus.svg';
	});
 }