import React from "react";

function Note({ note, onDelete }) {
  return (
    <div className="note" style={{ background: note.color }}>
      <div className="note-text">{note.text}</div>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        &times;
      </button>
    </div>
  );
}

export default Note;
