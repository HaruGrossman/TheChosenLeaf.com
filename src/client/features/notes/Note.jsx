import { useState } from "react";
import { useDeleteNoteMutation, useEditNoteMutation } from "../../store/Notes";

//  function for rendering our createNoteForm  // window to pop up on screen
export default function Note ({ note }) {

    const [editNote] = useEditNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();

    // const [selectNote, setSelectNote] = useState(data);
    
    const [editedNote, setEditedNote]= useState(note.note);

    // save edited note
    const save = async (evt) => {
        evt.preventDefault();
        editNote({ ...note, editedNote});
    }

    // delete note
    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteNote(note.id);
    };

    return (
        <li>
            <form onSubmit={save}>
                <input 
                    type="text" 
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    required
                />
                <button>Save Changes</button>
                <button onClick={onDelete}> 
                Delete 
                </button>
            </form>
        </li>
    )
}


    // const select = (e) => {
    //     e.preventDefault();
    //     const id = note.id;
    //     selectNote({id});
    //     console.log(selectedNote);
    // };

    // const showNote = async (evt) => {
    //     const hidden = evt.target.style.visibility = "hidden";
    // ul.addEventListener("click", hide, false);
    // }

    // const hideNote = async (evt) => {
    //     const visible = evt.target.style.visibility = "visible";
    //     ul.addEventListener("click", hide, true);
    // }

    // function toggleNote(id){
        // const target = document.getElementById(id),
        // visibility = target.style.visibility;
        // target.style.visibility = visibility && visibility == 'visibile' ? 'hidden' : 'visibile';
    // }
