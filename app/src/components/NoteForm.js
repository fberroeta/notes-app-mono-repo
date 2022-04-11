import React,{ useState, useRef} from 'react';
import Togglable from './Togglable';

const NoteForm = ({ handleLogOut, addNote }) => {
  const [newNote, setNewNote] = useState('');
  const toggleRef = useRef();
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) =>{
    event.preventDefault();       

    const noteObject = {
      content: newNote,
      important: false,
    };

    addNote(noteObject);
    setNewNote('');
    toggleRef.current.toggleVisibility();
  };  
  return ( 
    <Togglable buttonLabel='Show create note' ref={toggleRef}>       
      <h3 >Create a new note</h3> 

      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Write your content note'
          value={newNote} 
          onChange={handleChange} 
        />
        <button type="submit">save</button>
      </form>
            
      <div>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </Togglable>
  );
};



export default NoteForm;