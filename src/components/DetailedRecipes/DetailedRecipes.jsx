import React from 'react'
import './DetailedRecipes.css'

const DetailedRecipes = ({ recipetitle, ingredient, time, recipedescription, howmuchpersons, howmuchingredients, unity }) => {
  return (
    <div className="detailed-recipe">
      <h2>{recipetitle}</h2>
      <div className="first-item">
        <div className="ingredients">
          <h4>Ingrédients :</h4>
          <ul>
            <li>{howmuchingredients} {unity} de {ingredient}</li>
            <li>{howmuchingredients} {unity} de {ingredient}</li>
            <li>{howmuchingredients} {unity} de {ingredient}</li>
          </ul>
        </div>
        <div className="time">
          <h4>Prépation :</h4>
          <div>{time}</div>
        </div>
        <div className="howmuch">
          <h4>Pour {howmuchpersons} personnes</h4>
        </div>
      </div>
      <div className="second-item">
        <div className="recipe-desciption">
          <h3>Recette :</h3>
          <p>
          {recipedescription}
          </p>
        </div>
      </div>
    </div>
  )
}

DetailedRecipes.defaultProps = {
  recipetitle: 'Titre de la recette',
  ingredient: 'ingrédient',
  time: '15 minutes',
  recipedescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eveniet debitis cum. Ut officiis adipisci dolorem repellat harum vero tempora, omnis laudantium exercitationem ipsam et eveniet error itaque distinctio doloremque veritatis. Eum eos voluptatibus doloribus esse quidem repudiandae aliquam quod.',
  howmuchpersons: 'x',
  howmuchingredients: '3',
  unity: 'kg'
}

export default DetailedRecipes