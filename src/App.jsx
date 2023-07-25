import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'
import Entrees from './pages/Entrees'
import Plats from './pages/Plats'
import Desserts from './pages/Desserts'
import AddRecipe from './pages/AddRecipe'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element ={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
