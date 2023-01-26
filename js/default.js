/* --- Main Menu Navigation --- */

const menuButton = document.querySelector('#menu-toggle');
const menuNav = document.querySelector('.header-nav');

function resizeUpdate() {
	if (document.body.offsetWidth >= 768) {
		menuNav.removeAttribute('aria-expanded');
		menuNav.classList.remove('header-nav-show');
		menuButton.classList.remove('header-nav-button-close');
	}
}

function toggleMenu() {
	if (menuNav.getAttribute('aria-expanded') === 'false') {
		menuNav.setAttribute('aria-expanded', true);
		menuNav.classList.add('header-nav-show');
		menuButton.classList.add('header-nav-button-close');
	} else {
		menuNav.setAttribute('aria-expanded', false);
		menuNav.classList.remove('header-nav-show');
		menuButton.classList.remove('header-nav-button-close');
	}
}

window.addEventListener('resize', resizeUpdate, false);
menuButton.addEventListener('click', toggleMenu, false);

/* --- Sub-Info Panel Switcher --- */

function changePanel(e) {
	const currentPanelId = `${e.target.value}_panel`;
	const sectionId = e.target.value.split('_')[1];
	const section = document.querySelector(`.${sectionId}`);
	const panels = section.querySelectorAll('.section-panel');
	const images = section.querySelectorAll('.section-image');
	for (let i = 0; i < panels.length; ++i) {
		if (panels[i].id === currentPanelId) {
			images[i].classList.remove('hidden');
			images[i].setAttribute('aria-hidden', false);
			panels[i].classList.remove('hidden');
			panels[i].setAttribute('aria-hidden', false);
		} else {
			panels[i].classList.add('hidden');
			panels[i].setAttribute('aria-hidden', true);
			images[i].classList.add('hidden');
			images[i].setAttribute('aria-hidden', true);
		}
	}
}

// Destination, Crew and Technology info buttons
const infoButtons = document.querySelectorAll('.destination-radio, .crew-radio, .technology-radio');
for (let i = 0; i < infoButtons.length; ++i) {
	infoButtons[i].addEventListener('change', changePanel, false);
}