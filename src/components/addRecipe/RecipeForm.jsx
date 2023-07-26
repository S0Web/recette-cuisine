import { useState } from "react";
import "./RecipeForm.css"

const RecipeForm = () => {
  //les infos à récup
  const [titleInput, setTitleInput] = useState()
  const [textareaInput, setTextareaInput] = useState()
  const [photoInput, setPhotoInput] = useState()
  const [durationInput, setDurationInput] = useState()
  const [difficultyInput, setDifficultyInput] = useState()
  const [portionsInput, setPortionsInput] = useState()
  const [tagsInput, setTagsInput] = useState([])
  const [ingredInput, setIngredInput] = useState()
  const [quantityInput, setQuantityInput] = useState()
  const [measuresInput, setMeasuresInput] = useState()

  //stocker les informations du formulaire
  const [values, setValues] = useState([])
  
  const [isChecked, setIsChecked] = useState(false)
  
  //stocker les tags
  const [defaultTags, setDefaultTags] = useState([
    {id: 0, tag: "Petit déjeuner"},
    {id: 1, tag: "Déjeuner"},
    {id: 2, tag: "Dessert"},
    {id: 3, tag: "Collation"},
    {id: 4, tag: "Dîner"}
  ])
  
  // stocker les ingrédients
  const [ingredientArray, setIngredientArray] = useState([])

  //l'ajout d'un ingrédient
  const addIngredients = () => {
    const newState = [...ingredientArray]
    newState.push(ingredInput + " " + quantityInput + " " + measuresInput)
    setIngredientArray(newState)

    setIngredInput("")
    setQuantityInput("")
    setMeasuresInput("")
  }
  
  //Checkbox boolean
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  //ajouter l'array et écrire en même temps
  const handleClick = (id, name) => {
    setDefaultTags(prevState => {
      const tabtemp = [...tagsInput]
      tabtemp.push(name)
      setTagsInput(tabtemp)
      return prevState.filter(tag => tag.id !== id)
    })
  }

  //Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newState = [...values]
    newState.push(titleInput)
    newState.push(textareaInput)
    newState.push(photoInput)
    newState.push(durationInput)
    newState.push(difficultyInput)
    newState.push(portionsInput)
    newState.push(tagsInput)
    newState.push(ingredientArray)
    newState.push(isChecked)
    setValues(newState)

    
    setTitleInput("")
    setTextareaInput("")
    setPhotoInput("")
    setDurationInput("")
    setDifficultyInput("")
    setPortionsInput("")
    setTagsInput("")
    setIsChecked(false)
    
    console.log(newState);
  }

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Titre" 
          value={titleInput}
          onChange={title => setTitleInput(title.target.value)} 
        />
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder="Recette"
          value={textareaInput}
          onChange={textarea => setTextareaInput(textarea.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Photo URL" 
          value={photoInput}
          onChange={photo => setPhotoInput(photo.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Durée en minutes"
          value={durationInput}
          onChange={duration => setDurationInput(duration.target.value)} 
        />
        <select 
          name="" 
          id=""
          value={difficultyInput}
          onChange={difficulty => setDifficultyInput(difficulty.target.value)} 
        >
          <option value="">Difficulté</option>
          <option value="easy">Facile</option>
          <option value="normal">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
        <input 
          type="number" 
          placeholder="Portions"
          value={portionsInput}  
          onChange={portions => setPortionsInput(portions.target.value)} 
        />

        <div id="tagsList" className="tags-list">
          {
            defaultTags.map(tag => 
              <button 
                key={tag.id} 
                className="tag" 
                onClick={() => handleClick(tag.id, tag.tag)}>
                {tag.tag}
              </button>
            )
          }
        </div>

        <input 
          type="text" 
          placeholder="Tags"
          value={tagsInput}    
          onChange={tag => setTagsInput(tag.target.value)} 
        />


        <div style={{
          display: "flex",
          gap: "10px",
          marginTop: "25px",
          marginBottom: "30px"
        }}>
          <input 
            type="text" 
            placeholder="Ingrédient" 
            style={{width: "100px"}} 
            value={ingredInput}  
            onChange={ingredients => setIngredInput(ingredients.target.value)} 
            />
          <input 
            type="number" 
            placeholder="quantité" 
            style={{width: "100px"}} 
            value={quantityInput}  
            onChange={quantity => setQuantityInput(quantity.target.value)}
            />
          <select 
            name="" 
            id="" 
            style={{width: "100px"}} 
            value={measuresInput} 
            onChange={measure => setMeasuresInput(measure.target.value)} 
          >
            <option value="">Unité de mesure</option>
            <option value="kg">Kg</option>
            <option value="g">g</option>
            <option value="l">L</option>
            <option value="cl">cl</option>
            <option value="ml">ml</option>
            <option value="cuillère(s) à café">cuillère(s) à café</option>
            <option value="cuillère(s) à soupe">cuillère(s) à soupe</option>
            <option value="cuillère(s) à soupe de beurre ou margarine">cuillère(s) à soupe de beurre ou margarine</option>
            <option value="bol(s)">bol(s)</option>
            <option value="verre(s) à moutarde">verre(s) à moutarde</option>
            <option value="verre(s) à liqueur">verre(s) à liqueur</option>
            <option value="grand(s) verre(s)">grand(s) verre(s)</option>
            <option value="gallon(s)">gallon(s)</option>
            <option value="tasse(s)">tasse(s)</option>
            <option value="tasse(s) de farine">tasse(s) de farine</option>
            <option value="tasse(s) de fécule">tasse(s) de fécule</option>
            <option value="tasse(s) de sucre en poudre">tasse(s) de sucre en poudre</option>
            <option value="tasse(s) de sucre glacé">tasse(s) de sucre glacé</option>
            <option value="tasse(s) de sucre glacé">tasse(s) de sucre glacé</option>
            <option value="tasse(s) de beurre ou margarine">tasse(s) de beurre ou margarine</option>
            <option value="tasse(s) de noix, noisette, amandes concassées">tasse(s) de noix, noisette, amandes concassées</option>
            <option value="tasse(s) de fromage râpé">tasse(s) de fromage râpé</option>
            <option value="tasse(s) de miel ou de sirop d&apos;érable">tasse(s) de miel ou de sirop d&apos;érable</option>
            <option value="tasse(s) de crème fraiche">tasse(s) de crème fraiche</option>
            <option value="tasse(s) de fruits secs (raisins secs ou autres)">tasse(s) de fruits secs (raisins secs ou autres)</option>
            <option value="tasse(s) de fruits frais (framboises, cerises, etc.)">tasse(s) de fruits frais (framboises, cerises, etc.)</option>
            <option value="tasse(s) de céréales">tasse(s) de céréales</option>
          </select>
          <button 
            type="checkbox" 
            checked={isChecked}
            onClick={addIngredients}
            onChange={handleCheck}
          >
            Ajouter
          </button>      
        </div>

        <div style={{display: "flex", flexFlow: "column wrap", gap: "20px", fontSize: "15px"}}>
          {
            ingredientArray.map((ingreditent, i) => 
              <>
                {ingreditent} <br /> <br />
              </>
            )
          }
        </div>
        <button>valider</button>
      </form>
    </div>
  )
}

export default RecipeForm