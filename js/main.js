const projects = document.getElementById('project-grid');
const textBody = document.querySelector('.main-text-box');
bWidth = textBody.clientWidth;

if(projects) {
	colNum = getComputedStyle(projects).
			getPropertyValue("grid-template-columns")?.split(' ').length;
	const projectImages = projects.querySelectorAll('.project-image');

	projectImages?.forEach((image) => {
		image.style.width = `${bWidth/colNum}px`;
	});
}
