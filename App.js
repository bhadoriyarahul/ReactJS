import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Content from './ContentComponent/Content';
import About from './AboutComponent/About';
import Service from './ServiceComponent/Service';
import Contact from './ContactComponent/Contact';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from './FooterComponent/Footer';

function App() {
  return (
    <div id="container" >
      
      <Header />  
      
      <Nav />

      <div id="main" >
      
      <Routes>
        <Route path="/" element={<Content />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>

        <Sidebar />        
      </div>

      <Footer />

    </div>
  );
}

export default App;