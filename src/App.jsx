import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import "./App.css";

function App() {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const addNote = (newnote) => {
    setnotes((prevnotes) => [newnote, ...prevnotes]);
  };

  const deleteNote = (id) => {
    setnotes((prevnotes) => prevnotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes Manager</h1>
      </header>

      {/* This main container becomes the Flex Parent */}
      <main className="main-content">
        
        {/* Left Side: Fixed Sidebar */}
        <aside className="sidebar">
          <NoteForm onAdd={addNote} />
        </aside>

        {/* Right Side: Scrollable List */}
        <section className="notes-display">
          {loading ? (
            <Loader />
          ) : notes.length === 0 ? (
            <EmptyState />
          ) : (
            <NoteList notes={notes} onDelete={deleteNote} />
          )}
        </section>
        
      </main>
    </div>
  );
}

export default App;