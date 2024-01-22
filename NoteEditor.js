import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteEditor = ({ onAddNote }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNoteClick = () => {
    if (category && title && content) {
      const newNote = { category, title, content };
      onAddNote(newNote);
      setCategory('');
      setTitle('');
      setContent('');
    } else {
      alert('Please fill in all fields before adding a note.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Muistiin</h2>
      <div className="mb-3">
        <label className="form-label">
          Kategoria:
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Otsikko:
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Sisältö:
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleAddNoteClick}>
          Lisää Muistiinpano
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
