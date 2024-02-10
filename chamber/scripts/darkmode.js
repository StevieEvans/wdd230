const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
	}
});
