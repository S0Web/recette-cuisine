import React from 'react'

const CardRecipe = ({image, title, des}) => {
    const im = {image}
  return (
    <div>CardRecipe
        <img src="" alt="" />
        <h3>{title}</h3>
        <p>{des}</p>
    </div>
  )
}

export default CardRecipe