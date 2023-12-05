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
    <>
    <h4>New Plant Note</h4>
    <form onSubmit={create}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
      />
      <button>Create</button>
    </form>
    </>
  );
}