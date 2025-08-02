import React, { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import "./App.css";

const getRandomPastel = () => {
  // Generates a random pastel color
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 90%)`;
};

function App() {
  const [notes, setNotes] = useState(() => {
    // Load from localStorage if exists
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save notes to localStorage on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    if (!text.trim()) return;
    setNotes([
      ...notes,
      {
        id: Date.now(),
        text,
        color: getRandomPastel(),
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>🌈 Minimal Notes</h1>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
