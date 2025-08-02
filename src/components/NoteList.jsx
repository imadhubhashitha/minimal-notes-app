import React from "react";
import Note from "./Note";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <div className="empty">No notes yet. Start writing!</div>;
  }
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
