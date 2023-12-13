import { useState } from "react";
import { useDeleteNoteMutation, useEditNoteMutation } from "../../store/Notes";
import Popup from "../components/Popup";

//  function for rendering our createNoteForm  // window to pop up on screen
export default function Note({ note }) {

    const [editNote] = useEditNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    
    const [editedPlantName, setEditedPlantName] = useState(note.name);
    const [editedNote, setEditedNote] = useState(note.note);
    const [editedPlantId, setEditedPlantId] = useState(note.favoritePlantId);
    const [buttonPopup, setButtonPopup] = useState(false);

    // save edited note
    const save = async (evt) => {
        evt.preventDefault();
        const id = note.id;
        editNote({ id: id, data: { note: editedNote, favoritePlantId: editedPlantId, name: editedPlantName } });
    };

    // delete note
    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteNote(note.id);
    };


    console.log(note);
    return (
        <li className="individualNote">
            <section className="individualNoteButtons">
                <button onClick={() => setButtonPopup(true)}>Edit Note</button>
                <button className="delete-btn" onClick={onDelete}>Delete</button>
            </section>
            <section className="noteIdComment">
                <h3>My Plant Name: {note.name}</h3> 
                <h3>Note ID: {note.id} </h3>{/*need to be able to grab the note as it is attached to the plant */}
                <h4>Favorite Plant: {note.favoritePlantId}</h4> {/* shows if a plant is attached to the note */}
                <h4>{note.note}</h4> {/* reflect the note */}
            </section>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>My Plant Name : </h4>
                <h4>Current Note : {note.note} </h4>
                <h4>Current Plant ID: {note.favoritePlantId} </h4>
                <form>
                    <label> New Plant Name:
                        <input 
                            type="text" 
                            value={editedPlantName}
                            onChange={(e) => setEditedPlantName(e.target.value)}
                        />
                    </label>
                    <label> New Note:
                        <input 
                            type="text" 
                            value={editedNote}
                            onChange={(e) => setEditedNote(e.target.value)}
                        />
                    </label>
                    <label> New Plant ID:
                        <input
                            type="text"
                            value={editedPlantId}
                            onChange={(e) => setEditedPlantId(e.target.value)}
                        />
                    </label>
                    <button className="save-btn" onClick={save}>Save</button>
                </form>
            </Popup>
        </li >
    )
}
