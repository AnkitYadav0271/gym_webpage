import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Benefits } from './pages/Benifits'
import { OurClasses } from './pages/OurClasses'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <section className='' id='home'>
    <Home></Home>
    </section>

    <Benefits> </Benefits>

    <OurClasses></OurClasses>
    
    </BrowserRouter>
       
   
  )
}

export default App
