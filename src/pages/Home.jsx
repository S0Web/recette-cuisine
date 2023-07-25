import CardRecipe from "../components/CardRecipe";
import "../components/CardRecipe.css"
const Home = () => {
  return (
    <div >Home
      <div className="cards">
        <CardRecipe image="" title="titre" dif="moyen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi molestiae! Dignissimos magni architecto nesciunt cupiditate odio quae ducimus perspiciatis sapiente est. Soluta totam quo dolore dolores enim laboriosam perspiciatis!"/>
        <CardRecipe image="" title="titre" dif="facile" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi molestiae! Dignissimos magni architecto nesciunt cupiditate odio quae ducimus perspiciatis sapiente est. Soluta totam quo dolore dolores enim laboriosam perspiciatis!"/>
      </div>
    </div>
  )
}

export default Home