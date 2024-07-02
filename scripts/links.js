const baseURL = "stevieevans.github.io/wdd230/";
// const linksURL = 'data/links.json'
const linksURL = "https://stevieevans.github.io/wdd230/data/links.json"
const linksCard = document.querySelector("#links")

const getLinks = async () => {
    const response = await fetch(linksURL)
    const data = await response.json()
    // console.log(data)
    displayLinks(data.lessons)
}

const displayLinks = (lessons) => {
    lessons.forEach(lesson => {
        let linkElement = document.createElement('li')
        linkElement.textContent = `${lesson.lesson}: `

        let content = document.createElement('span')

        lesson.links.forEach((link, index) => {
            let anchor = document.createElement('a')

            anchor.href = link.url
            anchor.target = "_blank"
            anchor.textContent = link.title

            if(index < lesson.links.length -1) {
                anchor.textContent +='| '
            }

            content.appendChild(anchor)
        });

        linkElement.appendChild(content)
        linksCard.appendChild(linkElement)

// const displayLinks = (lessons) => {
//     lessons.forEach(lesson => {
//         let links = lesson.links
//         let card = document.createElement('section');
//         let linkElement = document.createElement('li')
//         let anchor = document.createElement('a')

//         links.forEach(link => {
//             linkElement.textContent = `${lesson.lesson}: ${anchor} ${link.title} |`
            
//             anchor.setAttribute('href', link.url)
//             anchor.setAttribute('target', '_blank')
            
//             card.appendChild(linkElement)
//             card.appendChild(anchor)
//             linksCard.appendChild(card)
//             // console.log(linkElement)   
//         });

        // linkElement.textContent = `${lesson.lesson} ${anchor} ${links.title} |`
        // console.log(lesson)
        // console.log(linkElement)
        // console.log(links)
        // console.log(links)
    });
}

getLinks()