import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element ={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
