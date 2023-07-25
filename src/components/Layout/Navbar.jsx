import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-content">
      <h1>
        <Link to="/">SPS's Recipe</Link>
      </h1>

      <div className="navbar-container">    
        <Link to="/entrees">Entrées</Link>
        <Link to="/plats">Plats</Link>
        <Link to="/desserts">Desserts</Link>
        <Link to="/AddRecipe">Créer une recette</Link>
      </div>
    </div>
  )
}

export default Navbar