(function () {
    /* Add your code here */
    let submit = document.getElementById('submitButton');
    let deleteB = document.getElementById('deleteButton');
    submit.addEventListener('click', clicked);
    deleteB.addEventListener('click', deleteNotes);
}())

let searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', e =>{
    if(searchBar.value.length > 0) {
        display = filterList(notes, searchBar.value);
    } else {
        display = notes;
    }
    console.log(searchBar.value.length);
    renderList();
})

let notes = [];
let toRemove = [];
let idCount = 0;
let display = notes;

function clicked() {
    let testing = 'it works';
    var cardTitle = document.getElementById('titleInput');
    var cardArea = document.getElementById('inputArea');
    if(cardArea == null) {
        cardArea = "";
    }
    notes.push({id: idCount++, title: cardTitle.value, description: cardArea.value});
    renderList();
    cardTitle.value = '';
    cardArea.value = '';
}

function renderList() {
    let noteList = document.getElementById('notecardList');
    while (noteList.firstChild) {
        noteList.removeChild(noteList.firstChild);
    }
    
    for(let i = 0; i < display.length; i++) {
        noteList.appendChild(buildNoteDiv(display[i]));
    }
}

function buildNoteDiv(note) {
    let noteDiv = document.createElement('div');
    let noteTitle = document.createElement('h1');
    let noteDescription = document.createElement('p1');
    noteTitle.innerText = note.title;
    noteDescription.innerText = note.description;
    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteDescription);
    noteDiv.classList.add('card');
    noteDiv.addEventListener('click', function(){
        selected(note);
        noteDiv.toggleAttribute('selected', true);
    });
    return noteDiv; 
}

function deleteNotes() {
    console.log(notes);
    notes = notes.filter(note => {
        return toRemove.find(id => note.id == id) == undefined;
    })
    document.getElementById('deleteButton').style.background = '#FFFFFF';
    display = notes;
    toRemove = [];
    renderList();
}

function selected(removeThis) {
    toRemove.push(removeThis.id);
    document.getElementById('deleteButton').style.background = '#ff0000';
}

function filterList(list, input) {
    let filtered = [];
    for(let i = 0; i < list.length; i++) {
        if(list[i].title.includes(input)) {
            filtered.push(list[i]);
        }
    }
    return filtered;
}