import { useState } from "react";
import { useDeleteNoteMutation, useEditNoteMutation } from "../../store/Notes";
import Popup from "../components/Popup";

//  function for rendering our createNoteForm  // window to pop up on screen
export default function Note ({ note }) {

    const [editNote] = useEditNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    
    const [editedNote, setEditedNote] = useState(note.editedNote);
    const [buttonPopup, setButtonPopup] = useState(false);

    // save edited note
    const save = async (evt) => {
        id = note.id;
        evt.preventDefault();
        editNote({ ...id, editedNote });
    }

    // delete note
    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteNote(note.id);
    };

    return (
        <li>
            <h3>{note.note}</h3>
            <button onClick={() => setButtonPopup(true)}>Edit Note</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>Edit existing note: {note.note} </h4>
                <h4>Attach to a favorite plant? {note.plantId} </h4>
                <form>
                <input 
                        type="text" 
                        value={editedNote}
                        onChange={(e) => setEditedNote(e.target.value)}
                        required
                    />
                </form>
                <h4>Note: </h4>
                <form>
                    <input 
                        type="text" 
                        value={editedNote}
                        onChange={(e) => setEditedNote(e.target.value)}
                        required
                    />
                    <button className="save-btn" onClick={save}>Save</button>
                    <button className="delete-btn" onClick={onDelete}>Delete</button>
                </form>
            </Popup>
    </li>

    )
}
