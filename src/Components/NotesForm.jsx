// // src/components/NoteForm.jsx
// import React, { useState, useEffect } from 'react';

// const NoteForm = ({ onSubmit, note }) => {
//     const [formData, setFormData] = useState({ title: '', content: '', subject: '' });

//     useEffect(() => {
//         if (note) {
//             setFormData(note);
//         } else {
//             setFormData({ title: '', content: '', subject: '' });
//         }
//     }, [note]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(formData);
//     };

//     return (
//     <form onSubmit={handleSubmit}>
//         <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Title"
//             required
//         />
//         <textarea
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             placeholder="Content"
//             required
//         />
//         <input
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Subject"
//             required
//         />
//         <button type="submit">{note ? 'Update Note' : 'Create Note'}</button>
//     </form>
// );
// };

// export default NoteForm;
// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';
import './NoteForm.css'; // Import the CSS file

const NoteForm = ({ onSubmit, note }) => {
    const [formData, setFormData] = useState({ title: '', content: '', subject: '' });

    useEffect(() => {
        if (note) {
            setFormData(note);
        } else {
            setFormData({ title: '', content: '', subject: '' });
        }
    }, [note]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Content"
                required
            />
            <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
            />
            <button type="submit">{note ? 'Update Note' : 'Create Note'}</button>
        </form>
    );
};

export default NoteForm;