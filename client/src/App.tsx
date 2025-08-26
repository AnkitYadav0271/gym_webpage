import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <section className='' id='home'>
    <Home></Home>
    </section>
    
    </BrowserRouter>
       
   
  )
}

export default App
