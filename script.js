'use strict';

const playSlideshow = () =>
{
	const ul = document.getElementById('slides');

	for (let i = 1; i < 10; i++)
	{
		const li = document.createElement('li');
		// li.appendChild(document.createTextNode(slide));
		li.setAttribute('class', 'slide');
		li.style.backgroundImage = `url('${i}.jpg')`;
		ul.appendChild(li);
	}
	const slides = document.querySelectorAll('#slides .slide');
	let currentPhoto = 0;
	// document.getElementById('slides').style.backgroundImage = `url('${currentPhoto}.jpg')`;
	setInterval(() =>
	{
		// slides[currentPhoto].className = 'slide';
		slides[currentPhoto].classList.remove('showing');
		currentPhoto = (currentPhoto + 1) % slides.length;
		// slides[currentPhoto].className = 'slide showing';
		slides[currentPhoto].classList.add('showing');
	}, 3000);
};