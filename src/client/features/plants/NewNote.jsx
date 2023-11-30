import { useState } from "react";
import { useCreateNoteMutation } from "../../store/Notes";

//  function for rendering our createNoteForm  // window to pop up on screen

export default function NewNote() {
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