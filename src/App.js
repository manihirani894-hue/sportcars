import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Getcars from './components/Getcars';
import Addcars from './components/Addcars';
import Mpesapayment from './components/Mpesapayment';
// import Navbar from './components/Navbar';


function app(){

 return (
    <Router>
    <div className="App">
     <div className='App-header'>
      <h1 className='text-warning bg-success'><b></b>WELCOME TO CARS PALACE</h1>
     </div>
     {/* <Navbar/> */}
<nav className='m-2'>
  <Link to="/signup" className='btn btn-outline-success ms-2'id='su'>Signup</Link>
  <Link to="/signin" className='btn btn-outline-success ms-2'>Signin</Link>
  <Link to="/addcars" className='btn btn-outline-success ms-2' id='ap'>Add cars</Link>
  <Link to="/getcars" className='btn btn-outline-success ms-2'>Get cars</Link>
  
</nav>

  
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/addcars' element={<Addcars/>}/>
      <Route path='/getcars' element={<Getcars/>}/>
      <Route path='/makepayment' element={<Mpesapayment/>}/>
     </Routes>
    </div>
    </Router>


 )
};

  

export default app;
