const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')
const topTen = []

button.addEventListener('click', () => {
    const myItem = input.value;

    if (topTen.length > 9) {
        window.alert("Only 10 scriptures are allowed.");
        return 0
    };

    if (input.value != '') {

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        topTen.push(myItem)

        listItem.appendChild(deleteButton);
        deleteButton.textContent = '❌';
        list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            topTen.pop(myItem)
            input.focus();
        });

        input.value = '';
        input.focus();
    } 
    else {
        window.alert("Please enter a book and chapter.");
        input.focus();
    }

});

