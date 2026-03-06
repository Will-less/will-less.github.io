const projects = document.getElementById('project-grid');
const textBody = document.querySelector('.main-text-box');
bWidth = textBody.clientWidth;

//properly resizes images for future additions
if(projects) {
	colNum = getComputedStyle(projects).
			getPropertyValue("grid-template-columns")?.split(' ').length;
	const projectImages = projects.querySelectorAll('.project-image');

	projectImages?.forEach((image) => {
		image.style.width = `${bWidth/colNum}px`;
		image.style.height = `${bWidth/colNum-30}px`;

	});
}

//button for mobile support 
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', (e) => {
	e.target.innerHTML = e.target.innerHTML=='O' ? 'X' : 'O';
	dropdownContent.classList.toggle('show');
});

