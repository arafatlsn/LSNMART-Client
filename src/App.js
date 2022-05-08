import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/My Items/MyItems';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from '../src/Components/Blogs/Blogs'
import About from './Components/About/About';
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
        <Route path='/manageinventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
