async function loadData() {
    const response = await fetch("../data/members.json");
    const data = await response.json();
    console.log(data)
}

loadData();


// const url ='../data/members.json'

// const getData = () => {
//     fetch(url)
//         .then(res => res.json())
//         .then(console.log())
// }

