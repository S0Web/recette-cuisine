import React, {useState} from 'react'
import './DetailedRecipes.css'
import { useDetailed } from '../contexts/KitchenRecipeContext'

const DetailedRecipes = () => {

  const {datas} = useDetailed()
  const [recipe,] = useState(datas[0])

  return (
    <div className="detailed-recipe">
      <h2>{recipe.title}</h2>
      <img src={recipe.photo} alt="" />
      <div className="first-item">
        <div className="ingredients">
          <h4>Ingrédients :</h4>
          <ul>
            {recipe.ingredients.map((element, index) => (
              <li key={index}>{element.name} {element.quantity} {element.measures}</li>
              ))}
          </ul>
        </div>
        <div className="time">
          <h4>Prépation :</h4>
          <div>{recipe.duration}</div>
          <div>{recipe.difficulty}</div>
          <div>{recipe.tags}</div>
        </div>
        <div className="howmuch">
          <h4>Pour {recipe.portions} personnes</h4>
        </div>
      </div>
      <div className="second-item">
        <div className="recipe-desciption">
          <h3>Recette :</h3>
          <p>
          {recipe.textarea}
          </p>
        </div>
      </div>
    </div>
  )
}

// DetailedRecipes.defaultProps = {
//   recipetitle: 'Titre de la recette',
//   ingredient: 'ingrédient',
//   time: '15 minutes',
//   recipedescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eveniet debitis cum. Ut officiis adipisci dolorem repellat harum vero tempora, omnis laudantium exercitationem ipsam et eveniet error itaque distinctio doloremque veritatis. Eum eos voluptatibus doloribus esse quidem repudiandae aliquam quod.',
//   howmuchpersons: 'x',
//   howmuchingredients: '3',
//   unity: 'kg',
//   urlphoto: 'https://img.freepik.com/vecteurs-libre/gateau-aux-carottes-recette-dessine-main_23-2148539487.jpg?size=626&ext=jpg&ga=GA1.2.848368829.1689859106&semt=ais'
// }

export default DetailedRecipes