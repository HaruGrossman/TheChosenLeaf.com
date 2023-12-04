import { useState } from "react";
// import { useCreateTaskMutation } from "./taskSlice";
import { useCreateNoteMutation } from "../../store/Notes";

/** Form for creating new tasks */
export default function NewNote() {
  const [note, setNote] = useState("");
  const [createNote] = useCreateNoteMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createNote({ note });
  };

  return (
    <form onSubmit={create}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
      />
      <button>Create</button>
    </form>
  );
}

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
//     const create = async (evt) => {
//         evt.preventDefault();
//         createNote({ note });
//     };

//     return(
//         <form onSubmit={create}>
//             <input
//             type="text"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             required
//             />
//             <button>Create Note</button>
//         </form>
//     );
// }