import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Benefits } from './pages/Benifits'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <section className='' id='home'>
    <Home></Home>
    </section>

    <Benefits> </Benefits>
    
    </BrowserRouter>
       
   
  )
}

export default App
