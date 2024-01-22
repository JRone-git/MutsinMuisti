export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const loadNotes = () => {
    const notesString = localStorage.getItem('notes');
    return notesString ? JSON.parse(notesString) : [];
  };
  