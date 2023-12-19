import { useState } from "react";
import { useCreateNoteMutation } from "../../store/Notes";
import '../components/popup.css';
import "./Note.less"

/** Form for creating new notes */
export default function NewNote() {
  const [note, setNote] = useState("");
  const [favoritePlant, setFavoritePlant] = useState("");
  const [noteName, setNoteName] = useState("");
  const [createNote] = useCreateNoteMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createNote({ note: note, favoritePlant: favoritePlant, name: noteName })
  };

  console.log(note);
  console.log(favoritePlant);
  console.log(noteName);

  return (
    <>
      <form onSubmit={create} id="newNote">
        <label>
          Note Name
          <input
            type="text"
            value={noteName}
            onChange={(e) => setNoteName(e.target.value)}
          />
        </label>

        <label>
          New Plant Note
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </label>
        
        <label>
          Attach to Favorite Plant By Id
          <input
            type="text"
            value={favoritePlant}
            onChange={(e) => setFavoritePlant(e.target.value)}
          />
        </label>

      </form>
      <button className="create-btn" onClick={create}>Create</button>
    </>
  );
}