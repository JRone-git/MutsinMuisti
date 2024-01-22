import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const buttonStyle = {
  margin: '5px',
  padding: '8px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const hrStyle = {
  margin: '10px 0',
};

export default function NotesList({ searchQuery, notes, addNote }) {
  const [searchedNotes, setSearchedNotes] = useState(notes);
  const navigate = useNavigate();

  function handleSearch(query) {
    setSearchedNotes(notes.filter(note => note.title.includes(query)));
  }

  function handleAddNote() {
    const title = window.prompt('Syötä otsikko uudelle muistiinpanolle:');
    const category = window.prompt('Syötä kategoria uudelle muistiinpanolle:');
    const tagsString = window.prompt('Syötä tunnisteet (pilkulla eroteltuna) uudelle muistiinpanolle:');

    if (title && category) {
      const newNote = {
        id: notes.length + 1,
        title: title,
        tags: tagsString ? tagsString.split(',').map(tag => tag.trim()) : [],
      };

      // Update the state of notes in the App component
      addNote(newNote);

      // Update the state of searchedNotes in the local state
      setSearchedNotes([...searchedNotes, newNote]);
    }
  }

  function handleNewTab(category) {
    navigate(`/category/${category}`);
  }

  return (
    <div className="container mt-4">
      <p>Haku: {searchQuery}</p>
      <button className="btn btn-success" onClick={handleAddNote} style={buttonStyle}>
        Lisää muistiinpano
      </button>
      {searchedNotes.map(note => (
        <div key={note.id} className="mb-3">
          <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
            <h3 className="text-primary">{note.title}</h3>
            <p className="text-muted">{note.tags.join(', ')}</p>
          </Link>
        </div>
      ))}
      <hr className="bg-success" style={hrStyle} />
      <p className="text-muted">Kategoriat:</p>
      {[...new Set(notes.map(note => note.tags).flat())].map(category => (
        <button key={category} onClick={() => handleNewTab(category)} className="btn btn-outline-success" style={buttonStyle}>
          {category}
        </button>
      ))}
    </div>
  );
}
