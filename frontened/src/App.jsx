import './App.css'
import Search from './components/Search'
import Pagination from './components/Pagination'
import News from './components/News'
import { SiKakaotalk } from "react-icons/si";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { AddNews } from "./pages/AddNews";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Logout from './components/Logout';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>

    </>
  )
}

export default App;
