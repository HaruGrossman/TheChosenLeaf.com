import { useState } from "react";
import { useCreateNoteMutation } from "../../store/Notes";
import '../components/popup.css';

/** Form for creating new notes */
export default function NewNote() {
  const [note, setNote] = useState("");
  const [favoritePlant, setFavoritePlant] = useState("");
  const [noteName, setNoteName] = useState("");
  const [data] = useCreateNoteMutation();

  const create = async (evt) => {
    evt.preventDefault();
    const createNote = { note, favoritePlant, name}
    await data(createNote).json;
  };

  console.log(note);
  console.log(favoritePlant);
  console.log(noteName);

  return (
    <>
    <form onSubmit={create}>
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
      <br/><br/>
      <label>
        Attach to Favorite Plant By Id
        <input
        type="text"
        value={favoritePlant}
        onChange={(e) => setFavoritePlant(e.target.value)}
        />
      </label>
      <button className="create-btn">Create</button>
    </form>
    </>
  );
}