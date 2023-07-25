import React from 'react'
import "./CardRecipe.css"


const CardRecipe = ({image, title, dif, temps, des}) => {
  return (
    <div className="Ca">
        <img src={image} alt="image recette" width={50} height={50} />
        <h3>{title}</h3>
        <p>{des}</p>
        <p>Difficulté : {dif}</p>
        <p>Temps de préparation : {temps}</p>
    </div>
  )
}

export default CardRecipe