import React from 'react'
import DetailedRecipes from '../components/DetailedRecipes/DetailedRecipes'
import './DetailedRecipeTemplate.css'
import KitchenRecipeProvider, { useDetailed } from '../components/contexts/KitchenRecipeContext'

const DetailedRecipeTemplate = () => {
    const {datas} = useDetailed()

    console.log(datas);
    return (
        <div className="detailed-recipe-template">
            <KitchenRecipeProvider>
              <DetailedRecipes/>  
            </KitchenRecipeProvider>
        </div>
  )
}

export default DetailedRecipeTemplate