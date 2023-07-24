import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'
import Entrees from './pages/Entrees'
import Plats from './pages/Plats'
import Desserts from './pages/Desserts'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/entrees" element={<Entrees/>} />
        <Route path="/plats" element={<Plats/>} />
        <Route path="/desserts" element={<Desserts/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
