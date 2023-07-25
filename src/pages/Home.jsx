import CardRecipe from "../components/CardRecipe";

import "./Home.css"



const Home = () => {
  return (
    <div >Home
      <div className="cards">
        <CardRecipe 
          image="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Frecette-facile-debuter-en-cuisine-18487.2F12670508-1-fre-FR.2F40-recettes-pour-apprendre-a-cuisiner.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgQ2hyaXMgQ291cnQgUGhvdG9ncmFwaHkvIFN1Y3LDqSBTYWzDqSAvIEZlbW1lIEFjdHVlbGxl/40-recettes-pour-apprendre-a-cuisiner.jpeg" 
          title="titre" 
          dif="moyen" 
          temps="45 min"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi molestiae! Dignissimos magni architecto nesciunt cupiditate odio quae ducimus perspiciatis sapiente est. Soluta totam quo dolore dolores enim laboriosam perspiciatis!"/>
        <CardRecipe 
          image="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/39392/cuisine_simple_pixabay.jpg" 
          title="titre" 
          dif="facile" 
          temps="15 min"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi molestiae! Dignissimos magni architecto nesciunt cupiditate odio quae ducimus perspiciatis sapiente est. Soluta totam quo dolore dolores enim laboriosam perspiciatis!"/>
      </div>
    </div>
  )
}

export default Home