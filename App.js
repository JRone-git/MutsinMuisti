import React, { useState, useEffect } from 'react';
import NoteEditor from './NoteEditor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { saveNotes, loadNotes } from './storage';

const App = () => {
  const [notes, setNotes] = useState(loadNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleRemoveNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const categories = [...new Set(notes.map((note) => note.category))]; // Unique categories

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Mutsin muistiinpanot</h1>
      <NoteEditor onAddNote={handleAddNote} />

      <h2 className="mt-5 mb-3">Muistiinpanot</h2>
      <Tabs defaultActiveKey={categories[0]} className="mb-3">
        {categories.map((category) => (
          <Tab key={category} eventKey={category} title={category}>
            <ul className="list-group">
              {notes
                .filter((note) => note.category === category)
                .map((note, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Title:</strong> {note.title}, <strong>Content:</strong> {note.content}
                    </div>
                    <button className="btn btn-danger" onClick={() => handleRemoveNote(index)}>
                      Remove
                    </button>
                  </li>
                ))}
            </ul>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
