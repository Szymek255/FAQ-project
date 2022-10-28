document.querySelectorAll('.card__text-question-btn').forEach(item => {
	item.addEventListener('click', event => {
		let openanswer = item.nextElementSibling

		openanswer.classList.toggle('hidden')
	})
})
