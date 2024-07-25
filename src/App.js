
import { Navigate, Route, Routes } from 'react-router-dom';
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
import { Account } from './pages/Account/Account';
import { Dashboard } from './pages/Account/Dashboard';
import { OrderHistory } from './pages/Account/OrderHistory';
import { Wishlist } from './pages/Account/Wishlist';
import { ShoppingCart } from './pages/Account/ShoppingCart';
import { Settings } from './pages/Account/Settings';
import { Logout } from './pages/Account/Logout';

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
          <Route path='account/*' element={<Account/>}>
            <Route path='dashboard' element ={<Dashboard/>}/>
            <Route path='orderhistory' element ={<OrderHistory/>}/>
            <Route path='wishlist' element ={<Wishlist/>}/>
            <Route path='shoppingcart' element ={<ShoppingCart/>}/>
            <Route path='settings' element ={<Settings/>}/>
            <Route path='logout' element ={<Logout/>}/>
          </Route>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='*' element={<Error404/>}/> 
      </Routes>
      {/* <Account/> */}
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
