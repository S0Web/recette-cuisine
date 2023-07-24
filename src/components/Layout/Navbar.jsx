import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/entrees">Entrées</Link>
      <Link to="/plats">Plats</Link>
      <Link to="/desserts">Desserts</Link>
              
    </div>
  )
}

export default Navbar