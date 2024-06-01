const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const screenSizeButton = document.querySelector("#screen-size")

modeButton.addEventListener("click", () => {
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
		screenSizeButton.style.color = "#000"
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
	}
});

