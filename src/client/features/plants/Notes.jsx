import { useGetNotesQuery, useEditNoteMutation, useDeleteNoteMutation } from "../../store/Notes";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useState } from "react";

//  function for rendering our createNoteForm  // window to pop up on screen
function NoteCard({ note }) {

    const [editNote] = useEditNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();

    const [editedNote, setEditedNote]= useState(note.note);

    console.log(note);

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

    // save edited note
    const save = async (evt) => {
        evt.preventDefault();
        editNote({ ...note, editedNote});
    }

    // delete note
    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteNote(note);
    };

    return (
        <li>
            <form onSubmit={save}>
                <h4>{note.id}</h4>
                <h4>{note.note}</h4>
                {/* <button onClick={toggleNote}>Update</button> */}
                <section className="hide">
                <input 
                    type="text" 
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    required
                />
                <button>Save Changes</button>
                <button onClick={onDelete}> 
                🞪 
                </button>
                {/* <button onClick={hideNote}>Close</button> */}
                </section>
            </form>
        </li>
    )
}

function NewNote() {
    const [note, setNote] = useState("");

    //     use the hooks to create the mutation functions we will use
    const [createNote] = useCreateNoteMutation();

//     const closePopupWindow = () => {
//         "x" button for closing window
//         /onclick close window
//         //error if text!=== 0 {return "Are you sure you want to close without saving note?"}
//     }
//     const createNote = () => {
//         "Save Note" button to add 
//         /onclick save note and close window
//         //error if text === 0 {return "There is no note to save"}
//     }

//     return (
//         <>
//             <form>
//                 <textarea name="note" rows="10" cols="20" />
//                 <button onClick={closePopupWindow} id="delete">X</button>
//                 <button onClick={saveCreatedNote} id="submit">Create Note</button>
//             </form>
//         </>
//     )
// }
    const create = async (evt) => {
        evt.preventDefault();
        createNote({ note });
    };

    return(
        <form onSubmit={create}>
            <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
            />
            <button>Create Note</button>
        </form>
    );
}


export default function Notes(){
    const token = useSelector(selectToken);
    const { data: notes, isLoading } = useGetNotesQuery();
    
    // console.log(notes);

    // function Note() {
    //     notes.map(note)
    // };
    

    if (!token) {
        return <p>You must be logged in to see your tasks.</p>;
    };
    
    
        return (
        <div className="notes">
            <h2>My Plant Notes</h2>
            {/* <NewNote /> */}
            {isLoading && <p>Loading notes...</p>}
            {notes && (
                <ul className="notes-list">
                    {notes?.map((note) => (
                        <NoteCard key={note.id} note={note} /> 
                     ))} 
                </ul>
            )}
        </div>
        );
    };

    //~ function for rendering our editNoteForm  // window to pop up on screen
// function editNoteForm() {

//     const closePopupWindow = () => {  // "x" button for closing window
//         ///onclick close window
//         ////error if no change in text {return "No changes are saved"}
//     }
    //const saveChangedNote = () => {
        // input field for text
        // text.value = text[selected note id] ; This will be the previous saved Note
        // "Edit Note" button to add 
        ///onclick update state, delete previous data and close popup window
    //}

//     return (
//         <>
//             <form>
//                 <textarea name="note" rows="10" cols="20" />
//                 <button onClick={closePopupWindow} id="delete">X</button>
//                 <button onClick={saveChangedNote} id="submit">Create Note</button>
//             </form>
//         </>
//     )
// };


//getElement by id createNoteBTN
//onclick createNoteBTN(createNoteForm)
//getElement by id editBTN
//onclick editBTN(editNoteForm)

// }
