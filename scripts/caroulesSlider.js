let slideIndex = 1

showSlides(slideIndex)

let interval = setInterval(()=>{plusSlide(1)}, 4000)

let carousel = document.querySelector('.carousel');
carousel.addEventListener('click', ()=>{clearInterval(interval)})


function plusSlide(n) {
	showSlides(slideIndex += n)
}

function currentSlide(n) {
	showSlides(slideIndex = n)
}

function showSlides(n) {
	let slides = document.querySelectorAll('.slide');
	let dots = document.querySelectorAll('.dot');

	if (n > slides.length) {
		slideIndex = 1		
	}

	if (n < 1) {
		slideIndex = slides.length
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}

	for (var i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active')	
	}

	slides[slideIndex - 1].style.display = 'flex'
	dots[slideIndex - 1].classList.add('active')
}



