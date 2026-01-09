import React from "react";
import NoteItem from "./NoteItem";
const NoteList = ({ notes, onDelete }) => {
  return (
    // list the shows all the notes
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
