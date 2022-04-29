import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:_id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
