import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewNote from "./NewNote";
import { useGetNotesQuery } from "../../store/Notes";
import Note from "./note";

export default function Notes(){
    const token = useSelector(selectToken);
    const { data: notes, isLoading } = useGetNotesQuery();

    if (!token) {
        return <p>You must be logged in to see your tasks.</p>;
    };
    
        return (
        <div className="notes">
            <h2>My Plant Notes</h2>
            <NewNote />
            <h3>Your Notes</h3>
            {isLoading && <p>Loading notes...</p>}
            {notes && (
                <ul className="notes-list">
                    {notes.map((note) => (
                        <Note key={note.id} note={note} /> 
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
