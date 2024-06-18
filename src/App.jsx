
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import PrivateComponent from './middlewares/PrivateComponent';
import C from './pages/course/c/C';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Course from './components/course/Course';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/c" element={<C />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/batch/:name' element={<Course />} />

      <Route element={<PrivateComponent/>}>  
      <Route path='/profile' element={<Home />} />
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
