const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

                                     // if first visit or localStorage item is missing,
let chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

const setChapterList = () => {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

displayList = (item) => {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
    console.log('lol')
}

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});