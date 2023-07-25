import "./RecipeForm.css"

const RecipeForm = () => {
  return (
    <div className="recipe-form">
      <form action="">
        <input type="text" placeholder="Titre" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Recette"></textarea>
        <input type="text" placeholder="Photo URL" />
        <input type="number" placeholder="Durée" />
        <select name="" id="">
          <option value="">Difficulté</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="number" placeholder="Portions" />

        <div id="tagsList" className="tags-list">
          <div className="tag"></div>
          <div className="tag"></div>
          <div className="tag"></div>
        </div>
        <input type="text" placeholder="Tags" />


        <div style={{
          display: "flex",
          gap: "10px",
          marginTop: "25px",
          marginBottom: "30px"
        }}>
          <input type="text" placeholder="Ingrédient" style={{width: "100px"}}/>
          <input type="text" placeholder="" style={{width: "100px"}} />
          <select name="" id="" style={{width: "100px"}}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <input type="checkbox" name="" id="" />
        </div>
        
        <button>valider</button>
      </form>
    </div>
  )
}

export default RecipeForm