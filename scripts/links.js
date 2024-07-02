const baseURL = "stevieevans.github.io/wdd230/";
const linksURL = "stevieevans.github.io/wdd230/data/links.json"

const getLinks = async () => {
    const response = await fetch(linksURL)
    const data = await response.json()
    console.log(data)
    // displayLinks(data.lessons)
}

const displayLinks = (lessons) => {

}

getLinks()