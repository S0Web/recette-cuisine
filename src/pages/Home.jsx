import React, { useState } from 'react';
import CardRecipe from "../components/CardRecipe";
import "./Home.css"
import "../components/CardRecipe.css"

const Home = () => {
  return (
    <div className="home-content" >
      <div className="cards">
        <CardRecipe 
          image="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Frecette-facile-debuter-en-cuisine-18487.2F12670508-1-fre-FR.2F40-recettes-pour-apprendre-a-cuisiner.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgQ2hyaXMgQ291cnQgUGhvdG9ncmFwaHkvIFN1Y3LDqSBTYWzDqSAvIEZlbW1lIEFjdHVlbGxl/40-recettes-pour-apprendre-a-cuisiner.jpeg" 
          title="Recette 1" 
          dif="moyen" 
          temps="30 min"/>
        <CardRecipe 
          image="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/39392/cuisine_simple_pixabay.jpg" 
          title="Recette 2" 
          dif="facile" 
          temps="15 min"/>
        <CardRecipe 
          image="https://img-3.journaldesfemmes.fr/_w4wbI9RdtnuAO4Uffa6Ior5K20=/1500x/smart/0908e694506e4fe989cf158fde4fb524/ccmcms-jdf/26978903.jpg" 
          title="Recette 3" 
          dif="difficile" 
          temps="45 min"/>
        <CardRecipe 
          image="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Frecette-facile-debuter-en-cuisine-18487.2F12670508-1-fre-FR.2F40-recettes-pour-apprendre-a-cuisiner.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgQ2hyaXMgQ291cnQgUGhvdG9ncmFwaHkvIFN1Y3LDqSBTYWzDqSAvIEZlbW1lIEFjdHVlbGxl/40-recettes-pour-apprendre-a-cuisiner.jpeg" 
          title="Recette 1" 
          dif="moyen" 
          temps="30 min"/>
        <CardRecipe 
          image="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/39392/cuisine_simple_pixabay.jpg" 
          title="Recette 2" 
          dif="facile" 
          temps="15 min"/>
        <CardRecipe 
          image="https://img-3.journaldesfemmes.fr/_w4wbI9RdtnuAO4Uffa6Ior5K20=/1500x/smart/0908e694506e4fe989cf158fde4fb524/ccmcms-jdf/26978903.jpg" 
          title="Recette 3" 
          dif="difficile" 
          temps="45 min"/>
        <CardRecipe 
          image="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Frecette-facile-debuter-en-cuisine-18487.2F12670508-1-fre-FR.2F40-recettes-pour-apprendre-a-cuisiner.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgQ2hyaXMgQ291cnQgUGhvdG9ncmFwaHkvIFN1Y3LDqSBTYWzDqSAvIEZlbW1lIEFjdHVlbGxl/40-recettes-pour-apprendre-a-cuisiner.jpeg" 
          title="Recette 1" 
          dif="moyen" 
          temps="30 min"/>
        <CardRecipe 
          image="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/39392/cuisine_simple_pixabay.jpg" 
          title="Recette 2" 
          dif="facile" 
          temps="15 min"/>
        <CardRecipe 
          image="https://img-3.journaldesfemmes.fr/_w4wbI9RdtnuAO4Uffa6Ior5K20=/1500x/smart/0908e694506e4fe989cf158fde4fb524/ccmcms-jdf/26978903.jpg" 
          title="Recette 3" 
          dif="difficile" 
          temps="45 min"/>

      </div>
    </div>
  )
}

export default Home