import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'
import Starters from './pages/Starters'
import Dishes from './pages/Dishes'
import Desserts from './pages/Desserts'
import AddRecipe from './pages/AddRecipe'
import DetailedRecipeTemplate from './pages/DetailedRecipeTemplate'
import KitchenRecipeProvider from './components/contexts/KitchenRecipeContext'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <KitchenRecipeProvider>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/detailedrecipetemplate" element={<DetailedRecipeTemplate/>} />
              <Route path="/starters" element={<Starters/>} />
              <Route path="/dishes" element={<Dishes/>} />
              <Route path="/desserts" element={<Desserts/>} />
              <Route path="/addrecipe" element={<AddRecipe/>} />
            </Routes>
          </KitchenRecipeProvider>
      </BrowserRouter>
    </>
  )
}

export default App