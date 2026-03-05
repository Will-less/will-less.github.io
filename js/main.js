const projects = document.querySelector("project-grid");

if(projects) {
	const projectImages = projects.querySelectorAll("project-image");

	projectImages?.forEach((image) => {
		console.log("test");
	});
}
console.log(42);
