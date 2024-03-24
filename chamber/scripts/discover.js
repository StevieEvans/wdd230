const visitsDisplay = document.querySelector(".visits")

// let discoverNumVisits = Number(window.localStorage.getItem("discoverNumVisits-ls")) || 0;

// if (discoverNumVisits == 0) {
//     visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
// } 

// discoverNumVisits = 1;

// localStorage.setItem("discoverNumVisits-ls", discoverNumVisits);

const msToDay = 84600000;
let today = new Date().getTime(); 

let lastVisitDate = localStorage.getItem("lastVisitDate-ls") || 0;

if (lastVisitDate === 0) {
    localStorage.setItem("lastVisitDate-ls", today)
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let update = today - lastVisitDate;

    let timeDifference = (update / msToDay)

    if (timeDifference < 1) {
        visitsDisplay.textContent = "Back so soon! Awesome!"
    } else {
        let daysText = dayDifference === 1 ? 'day' : 'days'
        visitsDisplay.textContent = `You last visited ${dayDifference} ${daysText} ago.`
    }
    localStorage.setItem("lastVisitDate-ls", today)
}



