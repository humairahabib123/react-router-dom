import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;




// import React from 'react'
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   )
// }

// export default App
