import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import Contactus from './components/Contactus';
import ViewCart from './components/ViewCart';

function App() {
  return (
    <Router>
      <div className="App">

        <header
  className="App-header text-center py-5"
  style={{
    background: "#2C3947",
    borderBottom: "2px solid #547A95"
  }}
>
  <h1
    style={{
      color: "#C2A56D",
      fontSize: "3rem",
      fontWeight: "bold"
    }}
  >
    Welcome to Vishnu enterprises limited
  </h1>

  <p
    style={{
      color: "#E8EDF2",
      fontSize: "1.2rem",
      marginTop: "10px"
    }}
  >
    Explore the finest collection of luxury watches
  </p>
</header>
        <Navbar />

        <div className="container my-5">
          <Routes>
            <Route path='/' element={<Getproduct />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/addproduct' element={<Addproduct />} />
            <Route path='/getproduct' element={<Getproduct />} />
            <Route path='/makepayment' element={<Mpesapayment />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/cart' element={<ViewCart/>} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;