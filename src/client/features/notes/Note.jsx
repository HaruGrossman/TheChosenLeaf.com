import { useState } from "react";
import { useDeleteNoteMutation, useEditNoteMutation } from "../../store/Notes";
import Popup from "../components/Popup";

//  function for rendering our createNoteForm  // window to pop up on screen
export default function Note ({ note }) {

    const [editNote] = useEditNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    
    const [editedNote, setEditedNote] = useState(note.note);
    const [editedPlant, setEditedPlant] = useState(note.favoritePlantId);
    const [buttonPopup, setButtonPopup] = useState(false);

    // save edited note
    const save = async (evt) => {
        evt.preventDefault();
        const id = note.id;
        editNote({ id: id, data: { note: editedNote, favoritePlantId: editedPlant } });
    };

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
                <h4>Note : {note.note} </h4>
                <h4>Favorite Plant : {note.favoritePlantId} </h4>
                <form>
                    <label> Edit existing note:
                    <input 
                        type="text" 
                        value={editedNote}
                        onChange={(e) => setEditedNote(e.target.value)}
                    />
                    </label>
                    <label> Attach to favorite plant:
                    <input
                        type="text"
                        value={editedPlant}
                        onChange={(e) => setEditedPlant(e.target.value)}
                    />
                    </label>
                    <button className="save-btn" onClick={save}>Save</button>
                    <button className="delete-btn" onClick={onDelete}>Delete</button>
                </form>
            </Popup>
    </li>

    )
}
