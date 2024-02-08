const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener('click', () => {
    const myItem = input.value;
    if (input.value != '') {

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(deleteButton);
        deleteButton.textContent = '❌';
        list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.value = '';
        input.focus();
    } 
    else {
        window.alert("Please enter a book and chapter.");
        input.focus();
    }

});

