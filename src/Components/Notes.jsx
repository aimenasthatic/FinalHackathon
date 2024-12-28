import React, { useState } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([
        { noteId: 1, title: 'Note 1', content: 'This is the first note.', subject: 'Math', lastEditedBy: '  Aimen Iqbal' },
        { noteId: 2, title: 'Note 2', content: 'This is the second note.', subject: 'Science', lastEditedBy: '  Arooj Ashfaq' },
        { noteId: 3, title: 'Note 3', content: 'This is the 3rd note.', subject: 'English', lastEditedBy: ' Zainab Nadeem' },

    ]);

    const handleEdit = (noteId) => {
        // Logic for editing the note
        console.log(`Edit note with ID: ${noteId}`);
    };

    const handleDelete = (noteId) => {
        // Logic for deleting the note
        setNotes(notes.filter(note => note.noteId !== noteId));
        console.log(`Deleted note with ID: ${noteId}`);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>User Notes</h1>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {notes.map((note) => (
                    <li key={note.noteId} style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '15px', margin: '10px 0', backgroundColor: '#fff' }}>
                        <h2 style={{ margin: '0', color: '#007bff' }}>{note.title}</h2>
                        <p style={{ margin: '5px 0', color: '#555' }}>{note.content}</p>
                        <p style={{ margin: '5px 0', color: '#555' }}>Subject: {note.subject}</p>
                        <p style={{ margin: '5px 0', color: '#555' }}>Last Edited By: {note.lastEditedBy}</p>
                        <button
                            onClick={() => handleEdit(note.noteId)}
                            style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(note.noteId)}
                            style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;