const url = 'data/members.json'

const gridButton = document.querySelector('#grid')
const listButton = document.querySelector('#list')
const memberCard = document.querySelector('article')

const goldMembers = document.querySelector('#gold-members')
const silverMembers = document.querySelector('#silver-members')
const bronzeMembers = document.querySelector('#bronze-members')

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    displayMembers(data.companies)

}

const displayMembers = (companies) => {
    companies.forEach(company => {
        const memSection = createMemberSection(company)
        // memberCard.appendChild(memSection)
        if(company.membershiplevel === "Gold") {
            goldMembers.appendChild(memSection)
        } else if (company.membershiplevel === "Silver") {
            silverMembers.appendChild(memSection)
        } else {
            bronzeMembers.appendChild(memSection)
        }
    });
}

const createMemberSection = (company) => {
    
    let memberSection = document.createElement('section')

    let companyImg = document.createElement('img')
    companyImg.src = company.img
    companyImg.alt = company.name
    companyImg.loading = "lazy"

    let companyName = document.createElement('p')
    companyName.id ="company-name"

    let companyAddress = document.createElement('p')
    let companyPhone = document.createElement('p')

    let companySite = document.createElement('a')
    companySite.href = company.weburl
    companySite.target = "_blank"
    companySite.textContent = company.weburl

    companyName.textContent = `${company.name}`
    companyAddress.textContent = `${company.address}`
    companyPhone.textContent = `${company.phonenumber}`

    memberSection.appendChild(companyImg)
    memberSection.appendChild(companyName)
    memberSection.appendChild(companyAddress)
    memberSection.appendChild(companyPhone)
    memberSection.appendChild(companySite)

    return memberSection
}

gridButton.addEventListener("click", ()=> {
    memberCard.classList.add("grid")
    memberCard.classList.remove("list")
})

const showList = () => {
    memberCard.classList.add("list")
    memberCard.classList.remove("grid")
}

listButton.addEventListener("click", showList)

getMembers();