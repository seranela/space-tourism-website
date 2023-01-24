/* --- Main Menu Navigation --- */

const menuButton = document.querySelector('#menu-toggle');
const menuNav = document.querySelector('.header-nav');
const menuLinks = document.querySelectorAll('.header-nav-link');

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

/* --- Section Switcher --- */

function changeSection(sectionNumber) {
	const navLinks = document.querySelectorAll('.header-nav-link');
	for (let i = 0; i < navLinks.length; ++i) {
		if ((i+1) == sectionNumber) {
			navLinks[i].classList.add('header-nav-link-active');
		} else {
			navLinks[i].classList.remove('header-nav-link-active');
		}
	}

	switch (sectionNumber) {
		case 1:
			// Intro
			document.body.classList.remove('background-destinations', 'background-crew', 'background-technology');
			document.body.classList.add('background-intro');
			break;
		case 2:
			// Destinations
			document.body.classList.remove('background-intro', 'background-crew', 'background-technology');
			document.body.classList.add('background-destinations');
			break;
		case 3:
			// Crew
			document.body.classList.remove('background-intro', 'background-destinations', 'background-technology');
			document.body.classList.add('background-crew');
			break;
		case 4:
			// Technology
			document.body.classList.remove('background-intro', 'background-destinations', 'background-crew');
			document.body.classList.add('background-technology');
			break;
	}

	const sections = document.querySelectorAll('.section');
	for (let i = 0; i < sections.length; ++i) {
		if ((i+1) === sectionNumber) {
			sections[i].classList.remove('hidden');
			sections[i].setAttribute('aria-hidden', false);
		} else {
			sections[i].classList.add('hidden');
			sections[i].setAttribute('aria-hidden', true);
		}
	}
}

// Intro "EXPLORE" button
const exploreButton = document.querySelector('#explore-button');
exploreButton.addEventListener('click', (e) => {
	e.preventDefault();
	changeSection(2);
}, false);

for (let i = 0; i < menuLinks.length; ++i) {
	menuLinks[i].addEventListener('click', (e) => {
		e.preventDefault();
		if (menuNav.getAttribute('aria-expanded') === 'true') {
			menuNav.setAttribute('aria-expanded', false);
			menuNav.classList.remove('header-nav-show');
			menuButton.classList.remove('header-nav-button-close');
		}
		changeSection(parseInt(e.currentTarget.dataset.section));
	}, false);
}

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

// Destination info buttons
const infoButtons = document.querySelectorAll('.destination-radio');
for (let i = 0; i < infoButtons.length; ++i) {
	infoButtons[i].addEventListener('change', changePanel, false);
}

// Crew info buttons
const crewButtons = document.querySelectorAll('.crew-radio');
for (let i = 0; i < crewButtons.length; ++i) {
	crewButtons[i].addEventListener('change', changePanel, false);
}

// Technology info buttons
const techButtons = document.querySelectorAll('.technology-radio');
for (let i = 0; i < techButtons.length; ++i) {
	techButtons[i].addEventListener('change', changePanel, false);
}

/* --- Transitions --- */

/*function onSlideOutFinished(section) {
	section.remove();
}

function onSlideInFinished(section) {
	section.classList.remove('slide-in');
}

function slideToSection(sectionNumber) {
	if (sectionNumber === 2) {
		const sectionLeave = document.querySelector('.intro');
		sectionLeave.classList.add('slide-out');
		sectionLeave.addEventListener('transitionend', () => {
			onSlideOutFinished(sectionLeave);
		}, false);

		const sectionEnter = document.querySelector('.destination');
		sectionEnter.classList.add('slide-in');
		sectionEnter.addEventListener('transitionend', () => {
			onSlideInFinished(sectionEnter);
		}, false);
	}
}*/