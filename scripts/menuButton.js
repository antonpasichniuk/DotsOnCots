(()=>{
	const button = document.querySelector('.menu_button')
	const menu = document.querySelector('.menu_list')
	button.addEventListener('click', ()=>{
		setTimeout(()=>{menu.classList.toggle('menu_list-hidden')}, 200)
		menu.classList.toggle('menu_list-inactive')
	})
})();