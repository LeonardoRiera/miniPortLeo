import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Portfolio from './Components/Portolio/Portfolio';
import Footer from './Components/Footer/Footer';
/* import Habilidades from './Components/Habilidades/Habilidades'; */

function App() {
  

  return (
    <div className='App'>

      
      
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/home' element={<Header />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
     
    </div>
  )
}

export default App
