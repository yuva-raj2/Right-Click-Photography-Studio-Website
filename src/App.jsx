import React from 'react'
import {Routes,Route} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Footer/>
       <div className='page-container'>
      {/*<Routes>
        <Route path='/' element={<Photography/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/experiences' element={<Experiences/>}/>
         <Route path='/locateme' element={<LocateMe/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/reviews' element={<Review/>}/>
         <Route path='/services' element={<Services/>}/>
      </Routes>*/}
      </div>
    </div>
  )
}

export default App