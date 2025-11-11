const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



function setupDeleteButtons() {
    document.querySelectorAll('.delete-button').forEach(dButton => {
        dButton.addEventListener('click', () => {
            const li = dButton.parentNode;
            list.removeChild(li);
            input.focus();
        });
    });
}


setupDeleteButtons();

button.addEventListener('click', () => {
    if (input.value.length > 0) {

        const addChapter = input.value;

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = addChapter;

        deleteButton.textContent = 'X';

        deleteButton.classList.add('delete-button');

        
        deleteButton.setAttribute('aria-label', `Remove ${addChapter}`);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    }
});