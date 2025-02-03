import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import FilmsList from './components/Film/FilmsList';
import AddFilm from './components/Film/AddFilm'; 
import EditFilm from './components/Film/EditFilm';
import AddItem from './components/store/AddItem';
import ItemList from './components/store/ItemList';
import EditItem from './components/store/EditItem';
import Student from './components/Student/Student';
import AddStudent from './components/Student/AddStudent';
import EditStudent from './components/Student/EditStudent';
import Teacher from './components/teacher/Teachers';
import Addteacher from './components/teacher/Addteacher';
import Editteacher from './components/teacher/Editteacher';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/user" exact element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          {/* films route */}
          <Route path='/films' element={<FilmsList />} />
          <Route path="/addfilms" element={<AddFilm />} />
          <Route path="/edit_film/:id" element={<EditFilm />} />
          {/* store  route */}
          <Route path='/store' element={<ItemList />} />
          <Route path='/addItem' element={<AddItem />} />
          <Route path='/edititem/:id' element={<EditItem />} />
    {/* student registration */}
          <Route path='/student' element={<Student />} />
          <Route path='/addStudent' element={<AddStudent />} />
          <Route path='edit/stud/:id' element={<EditStudent />} />
          {/* Teacher */}
          
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/addTeacher' element={<Addteacher />} />
          <Route path='edit/teacher/:id' element={<Editteacher />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;