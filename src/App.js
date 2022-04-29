import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
