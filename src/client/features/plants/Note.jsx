import { useSaveCreatedNoteMutation, useSaveChangedNoteMutation } from "/store"    //create slice


//~ function for rendering our createNoteForm  // window to pop up on screen
function createNoteForm({ note }) {
    //use the hooks to create the mutation functions we will use
    const [saveCreatedNote] = useSaveCreatedNoteMutation()

    const closePopupWindow = () => {
        // "x" button for closing window
        ///onclick close window
        ////error if text!=== 0 {return "Are you sure you want to close without saving note?"}
    }
    const saveCreatedNote = () => {
        // "Save Note" button to add 
        ///onclick save note and close window
        ////error if text === 0 {return "There is no note to save"}
    }

    return (
        <>
            <form>
                <textarea name="note" rows="10" cols="20" />
                <button onClick={closePopupWindow} id="delete">X</button>
                <button onClick={saveCreatedNote} id="submit">Create Note</button>
            </form>
        </>
    )
}


//~ function for rendering our editNoteForm  // window to pop up on screen
function editNoteForm() {
    //use the hooks to create the mutation functions we will use
    const [saveChangedNote] = useSaveChangedNoteMutation()

    const closePopupWindow = () => {  // "x" button for closing window
        ///onclick close window
        ////error if no change in text {return "No changes are saved"}
    }
    const saveChangedNote = () => {
        // input field for text
        // text.value = text[selected note id] ; This will be the previous saved Note
        // "Edit Note" button to add 
        ///onclick update state, delete previous data and close popup window
    }

    return (
        <>
            <form>
                <textarea name="note" rows="10" cols="20" />
                <button onClick={closePopupWindow} id="delete">X</button>
                <button onClick={saveChangedNote} id="submit">Create Note</button>
            </form>
        </>
    )
}


//getElement by id createNoteBTN
//onclick createNoteBTN(createNoteForm)
//getElement by id editBTN
//onclick editBTN(editNoteForm)
