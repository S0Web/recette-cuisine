import { useState } from "react";
import "./RecipeForm.css"

const RecipeForm = () => {
  const [titleInput, setTitleInput] = useState()
  const [textareaInput, setTextareaInput] = useState()
  const [photoInput, setPhotoInput] = useState()
  const [durationInput, setDurationInput] = useState()
  const [difficultyInput, setDifficultyInput] = useState()
  const [portionsInput, setPortionsInput] = useState()
  const [tagsInput, setTagsInput] = useState()
  const [ingredInput, setIngredInput] = useState()
  const [quantityInput, setQuantityInput] = useState()
  const [measuresInput, setMeasuresInput] = useState()
  const [checkInput, setCheckInput] = useState()
  
  const [values, setValues] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newState = [...values]
    newState.push(titleInput)
    setValues(newState)
    newState.push(textareaInput)
    setValues(photoInput)
    console.log(newState);


    
    
    
    setTitleInput("")
    setTextareaInput("")
    setPhotoInput("")
    setDurationInput("")
    setDifficultyInput("")
    setPortionsInput("")
    setTagsInput("")
    setIngredInput("")
    setQuantityInput("")
    setMeasuresInput("")
    setCheckInput("")
  }

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Titre" 
          onChange={e => setTitleInput(e.target.value)} 
          value={titleInput}
        />
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder="Recette"
          onChange={e => setTextareaInput(e.target.value)} 
          value={textareaInput}
        />
        <input type="text" placeholder="Photo URL"/>
        <input type="number" placeholder="Durée en minutes"/>
        <select name="" id="">
          <option value="">Difficulté</option>
          <option value="easy">Facile</option>
          <option value="normal">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
        <input type="number" placeholder="Portions"/>

        <div id="tagsList" className="tags-list">
          {/* <input className="tag" />
          <input className="tag" />
          <input className="tag" /> */}
        </div>
        <input type="text" placeholder="Tags"/>


        <div style={{
          display: "flex",
          gap: "10px",
          marginTop: "25px",
          marginBottom: "30px"
        }}>
          <input type="text" placeholder="Ingrédient" style={{width: "100px"}}/>
          <input type="number" placeholder="quantité" style={{width: "100px"}}/>
          <select name="" id="" style={{width: "100px"}}>
            <option value="">Unité de mesure</option>
            <option value="">Kg</option>
            <option value="">g</option>
            <option value="">L</option>
            <option value="">cl</option>
            <option value="">ml</option>
            <option value="">cuillère(s) à café</option>
            <option value="">cuillère(s) à soupe</option>
            <option value="">cuillère(s) à soupe de beurre ou margarine</option>
            <option value="">bol(s)</option>
            <option value="">verre(s) à moutarde</option>
            <option value="">verre(s) à liqueur</option>
            <option value="">grand(s) verre(s)</option>
            <option value="">gallon(s)</option>
            <option value="">tasse(s)</option>
            <option value="">tasse(s) de farine</option>
            <option value="">tasse(s) de fécule</option>
            <option value="">tasse(s) de sucre en poudre</option>
            <option value="">tasse(s) de sucre glacé</option>
            <option value="">tasse(s) de sucre glacé</option>
            <option value="">tasse(s) de beurre ou margarine</option>
            <option value="">tasse(s) de noix, noisette, amandes concassées</option>
            <option value="">tasse(s) de fromage râpé</option>
            <option value="">tasse(s) de miel ou de sirop d&apos;érable</option>
            <option value="">tasse(s) de crème fraiche</option>
            <option value="">tasse(s) de fruits secs (raisins secs ou autres)</option>
            <option value="">tasse(s) de fruits frais (framboises, cerises, etc.)</option>
            <option value="">tasse(s) de céréales</option>
          </select>
          <input type="checkbox" name="" id=""/>
        </div>
        
        <button>valider</button>
      </form>
    </div>
  )
}

export default RecipeForm