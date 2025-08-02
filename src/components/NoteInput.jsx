import React, { useState } from "react";

function NoteInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="note-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
        rows={2}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd} disabled={!text.trim()}>
        Add
      </button>
    </div>
  );
}

export default NoteInput;
