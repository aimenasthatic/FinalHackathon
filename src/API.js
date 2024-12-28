// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const login = async (credentials) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
};

export const register = async (userData) => {
    return await axios.post(`${API_URL}/auth/register`, userData);
};

export const fetchNotes = async () => {
    return await axios.get(`${API_URL}/notes`);
};

export const createNote = async (noteData) => {
    return await axios.post(`${API_URL}/notes`, noteData);
};

export const updateNote = async (noteId, noteData) => {
    return await axios.put(`${API_URL}/notes/${noteId}`, noteData);
};

export const deleteNote = async (noteId) => {
    return await axios.delete(`${API_URL}/notes/${noteId}`);
};