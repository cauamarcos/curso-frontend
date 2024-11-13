// Seleções
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-btn");
const noteInput = document.querySelector("#note-input");
const addNoteBtn = document.querySelector("#add-note-btn");
const notesContainer = document.querySelector("#notes-container");

// Funções
function showNotes() {
    cleanNotes();

    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);

        notesContainer.appendChild(noteElement);
    });
}

function cleanNotes() {
    notesContainer.replaceChildren([]);
}

function addNote() {
    const notes = getNotes();

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);
    saveNotes(notes);

    noteInput.value = "";
}

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed) {
    const element = document.createElement("div");
    element.classList.add("note");

    if(fixed)
        element.classList.add("fixed");

    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.placeholder = "Adicione algum texto...";
    element.appendChild(textarea);
    textarea.addEventListener("keydown", (e) => {
        const noteContent = e.target.value;
        // A nota só é atualizada ao pressionar Enter
        if(e.key === "Enter") {
            updateNote(id, noteContent);
        }
    });

    const pinIcon = document.createElement("i");
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);
    pinIcon.addEventListener("click", () => {
        toggleFixNote(id);
    });

    const xIcon = document.createElement("i");
    xIcon.classList.add(...["bi", "bi-x-lg"]);
    element.appendChild(xIcon);
    xIcon.addEventListener("click", () => {
        deleteNote(id, element);
    });

    const duplicateIcon = document.createElement("i");
    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
    element.appendChild(duplicateIcon);
    duplicateIcon.addEventListener("click", () => {
        duplicateNote(id);
    });

    return element;
}

function toggleFixNote(id) {
    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0];
    targetNote.fixed = !targetNote.fixed;

    saveNotes(notes);

    showNotes();
}

// Local Storage
function getNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    const orderedNotes = notes.sort((a, b) => a.fixed > b.fixed ? -1 : 1);

    return orderedNotes;
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id !== id);

    saveNotes(notes);

    notesContainer.removeChild(element);
}

function duplicateNote(id) {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed);

    notesContainer.appendChild(noteElement);
    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id === id)[0];

    targetNote.content = newContent;

    saveNotes(notes);
    showNotes();
}

function searchNotes(search) {
    const searchResults = getNotes().filter((note) => note.content.toLowerCase().includes(search));

    if(search !== "") {
        cleanNotes();

        searchResults.forEach((note) => {
            const noteElement = createNote(note.id, note.content);
            notesContainer.appendChild(noteElement);
        });

        return;
    }

    cleanNotes();
    showNotes();
}

function exportData() {
    const notes = getNotes();

    const cvsString = [
        ["ID", "Conteudo", "Fixado?"],
        ...notes.map((note) => [note.id, note.content, note.fixed]),
    ].map((e) => e.join(",")).join("\n");

    const element = document.createElement("a");
    element.href = "data:text/csv;charset=utf-8," + encodeURI(cvsString);
    element.target = "_blank";
    element.download = "notes.csv";
    element.click();
}

// Eventos
searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    
    searchNotes(search.toLowerCase());
});

addNoteBtn.addEventListener("click", () => addNote());

noteInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
        addNote();
});

exportBtn.addEventListener("click", () => {
    exportData();
});

// Inicialização
showNotes();