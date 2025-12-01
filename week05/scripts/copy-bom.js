const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 1. Declarar el array y asignarle el valor de localStorage o un array vacío
// chaptersArray será un array de strings (capítulos)
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.length > 0) {
    
        const newChapter = input.value;

        displayList(newChapter);

        chaptersArray.push(newChapter);

        setChapterList();

        input.value = '';
        input.focus();
    }
});


function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌'; 

    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('aria-label', `Remove ${item}`);

    deleteButton.addEventListener('click', () => {
        
        deleteChapter(li.textContent);

        
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);
}

function setChapterList() {
    
    localStorage.setItem('BOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    
    const storedList = localStorage.getItem('BOMList');
    return JSON.parse(storedList);
}

function deleteChapter(chapter) {

    const chapterName = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter(item => item !== chapterName);

    setChapterList();
}
