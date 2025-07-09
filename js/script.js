// const advs = document.querySelectorAll('.promo__adv img'),
// 	genre = document.querySelector('.promo__genre'),
// 	wrapper = document.querySelector('.promo__bg'),
// 	seriesList = document.querySelector('.promo__interactive-list')

// const seriesDB = {
// 	series: [
// 		'Omar',
// 		'The Final Legacy',
// 		'Ertugrul',
// 		'Magnificent Century',
// 		'The Great Seljuks: Guardians...',
// 	],
// }

// advs.forEach(item => {
// 	item.remove()
// })

// genre.textContent = 'Comedy'

// wrapper.style.backgroundImage = 'url(./img/1.jpg)'

// seriesList.innerHTML = ''

// seriesDB.series.forEach((item, index) => {
// 	seriesList.innerHTML += `
//   <li class="promo__interactive-item">
//     ${index + 1}. ${item}
//     <div class="delete"></div>
//   </li>
//   `
// })

document.addEventListener('DOMContentLoaded', () => {
	const advs = document.querySelectorAll('.promo__adv img'),
		genre = document.querySelector('.promo__genre'),
		wrapper = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = addForm.querySelector('.adding__input'),
		checkBox = addForm.querySelector('[type="checkbox"]')

	const seriesDB = {
		series: [
			'Omar',
			'The Final Legacy',
			'Ertugrul',
			'Magnificent Century',
			'The Great Seljuks: Guardians...',
		],
	}
	addForm.addEventListener('submit', event => {
		event.preventDefault()
		let newSeries = input.value
		const favorite = checkBox.checked
		if (newSeries) {
			if (newSeries.length > 18) {
				newSeries = `${newSeries.substring(0, 18)}...`
			}
			if (favorite) {
				console.log('Sevimli serial qo’shilidi')
			}
			seriesDB.series.push(newSeries)
			sort()
			setList()
		}
		event.target.reset()
	})
	advs.forEach(item => {
		item.remove()
	})
	genre.textContent = 'Comedy'
	wrapper.style.backgroundImage = 'url(./img/1.jpg)'

	function sort() {
		seriesDB.series.sort()
	}
	function setList() {
		seriesList.innerHTML = ``
		sort()

		seriesDB.series.forEach((item, index) => {
			seriesList.innerHTML += `
	<li class="promo__interactive-item">
		${index + 1}. ${item}
		<div class="delete"></div>
	</li>`
		})
		document.querySelectorAll('.delete').forEach((item, index) => {
			item.addEventListener('click', () => {
				seriesDB.series.splice(index, 1)
				setList()
			})
		})
	}
	sort()
	setList()
})
