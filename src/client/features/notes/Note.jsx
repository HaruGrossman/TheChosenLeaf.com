import { useState } from "react";
import { useDeleteNoteMutation, useEditNoteMutation } from "../../store/Notes";
import Popup from "../components/Popup";

//  function for rendering our createNoteForm  // window to pop up on screen
export default function Note({ note }) {

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
        <li className="individualNote">
            <section className="individualNoteButtons">
                <button onClick={() => setButtonPopup(true)}>Edit Note</button>
                <button className="delete-btn" onClick={onDelete}>Delete</button>
            </section>
            <section className="noteIdComment">
                <h3>{note.id}:</h3> {/*need to be able to grab the note as it is attached to the plant */}
                <h4>{note.note}</h4> {/* reflect the note */}
            </section>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>Edit existing note: {note.note} </h4>
                <br />
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
                    <button className="save-btn" onClick={save}>Save</button>
                    <input
                        type="text"
                        value={editedNote}
                        onChange={(e) => setEditedNote(e.target.value)}
                        required
                    />
                </form>
            </Popup>
        </li >

    )
}
