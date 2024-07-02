const baseURL = "stevieevans.github.io/wdd230/";
const linksURL = "stevieevans.github.io/wdd230/data/links.json"

getLinks = async () => {
    const response = await fetch(linksURL)
    data = response.json()
    console.log(data)
}

getLinks()