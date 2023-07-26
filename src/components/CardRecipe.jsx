import React from 'react'
import "./CardRecipe.css"


const CardRecipe = ({image, title, dif, temps, onClick}) => {
  return (
    <div className="card-recipe" onClick={onClick}>
        <img src={image} alt="image recette" />
        <h3>{title}</h3>
    </div>
  )
}

export default CardRecipe