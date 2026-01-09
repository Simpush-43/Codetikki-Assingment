import React, { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import Loader from "./Components/Loader";
import EmptyState from "./Components/EmptyState";
import "./App.css";

function App() {
  // notes array and loading status
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);

  // stimulate api call with fake delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500);
    // clean up
    return () => clearTimeout(timer);
  }, []);
  // handler function to add note
  const addNote = (newnote) => {
    setnotes((prevnotes) => [newnote, ...prevnotes]);
  };
  // handler function to delete note
  const deleteNote = (id) => {
    setnotes((prevnotes) => prevnotes.filter((note) => note.id !== id));
  };
  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <h1>Notes App</h1>
        </header>

        <main className="main-content">
          {/* Always show form unless strictly required otherwise, but standard UX keeps it visible */}
          <NoteForm onAdd={addNote} />

          <div className="notes-section">
            {loading ? (
              <Loader />
            ) : notes.length === 0 ? (
              <EmptyState />
            ) : (
              <NoteList notes={notes} onDelete={deleteNote} />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
