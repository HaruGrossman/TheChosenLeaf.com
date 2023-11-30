import { useGetNotesQuery } from "../../store/Notes";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import Note from "./Note";


export default function Notes(){
    const token = useSelector(selectToken);
    const { data: notes, isLoading } = useGetNotesQuery();
    
    console.log(notes);
    
    if (!token) {
        return <p>You must be logged in to see your tasks.</p>;
    };
    
    
        return (
        <div className="notes">
            <h2>My Plant Notes</h2>
            <NewNote />
            {isLoading && <p>Loading notes...</p>}
            {notes && (
                <ul>
                    {notes.map((note) => (
                       <Note key={note.id} note={note} />
                       ))}
                </ul>
            )}
        </div>
        );
    };