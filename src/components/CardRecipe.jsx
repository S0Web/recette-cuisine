import React from 'react'
import "./CardRecipe.css"


const CardRecipe = ({image, title, dif, des}) => {
    const im = {image}
  return (
    <div className="Ca">
        <img src="" alt="image recette" width={50} height={50} />
        <h3>{title}</h3>
        <p>{des}</p>
        <p>{dif}</p>
    </div>
  )
}

export default CardRecipe