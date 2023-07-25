import React from 'react'
import "./CardRecipe.css"


const CardRecipe = ({image, title, dif, temps}) => {
  return (
    <div className="Ca">
        <img src={image} alt="image recette" width={250} height={250} />
        <h3>{title}</h3>
        <p>Difficulté : {dif}</p>
        <p>Temps de préparation : {temps}</p>
    </div>
  )
}

export default CardRecipe