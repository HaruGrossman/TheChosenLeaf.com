import { useState } from "react";
import { useCreateNoteMutation } from "../../store/Notes";
import '../components/popup.css';
import "./Note.less"

/** Form for creating new notes */
export default function NewNote() {
  const [note, setNote] = useState("");
  const [createNote] = useCreateNoteMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createNote({ note });
  };

  return (
    <main id="createNote">
      <h4>New Plant Note</h4>
      <form onSubmit={create}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        />
        <button className="create-btn">Create</button>
      </form>
    </main>
  );
}