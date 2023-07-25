import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
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
        <Route path="/" element={<Home/>} />
        <Route path="/entrees" element={<Entrees/>} />
        <Route path="/plats" element={<Plats/>} />
        <Route path="/desserts" element={<Desserts/>} />
        <Route path="/addrecipe" element={<AddRecipe/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
