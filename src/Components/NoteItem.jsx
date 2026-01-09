import React from "react";

const NoteItem = ({ note, onDelete }) => {
  const handleDelete = ()=>{
    onDelete(note.id);
  };
  return (
    <div className="note-item">
      <div className="note-content">
        {/* note title */}
        <h3 className="note-title">{note.title}</h3>
        {/* note description */}
        {note.description && <p className="note-desc">{note.description}</p>}
      </div>
      <button className="delete-btn" onClick={handleDelete} aria-label="Delete note"> &times;</button>
    </div>
  );
};

export default NoteItem;
