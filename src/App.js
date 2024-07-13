
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header/Header";
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NavbarLocation } from './components/Navbar/NavbarLocation';
import { Article } from './pages/Article/Article';
import { Contact } from './pages/Contact/Contact';
import { Shop } from './pages/Shop/Shop';
import { Footer } from './pages/Footer/Footer';
import { Blog } from './pages/Blog/Blog';
import { About } from './pages/About/About';
import { Error404 } from './pages/Error404/Error404';

function App() {
  return (
    <div className="app">
      <Header/>
      <NavbarLocation/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Article/>
    </div>
  );
}

export default App;
