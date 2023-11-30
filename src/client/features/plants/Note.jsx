import { useState } from "react";
import { useEditNoteMutation, useDeleteNoteMutation } from "../../store/Notes";


export default function Note ({ note }){



//~ function for rendering our editNoteForm  // window to pop up on screen
// function editNoteForm() {
//     //use the hooks to create the mutation functions we will use
//     //const [saveChangedNote] = useSaveChangedNoteMutation()

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

}
