import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import MyNavbar from './Components/MyNavbar';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Notification from './Components/Notification';
import Settings from './Components/Settings';
import Confirm from './Components/Confirm';
import NotesForm from './Components/NotesForm';
import Notes from './Components/Notes';


function App() {
  return (
    <>
     <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/notesform" element={<NotesForm />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
        
       </BrowserRouter>
    </>
  );
}

export default App;
