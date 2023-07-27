import React from 'react'
import DetailedRecipes from '../components/DetailedRecipes/DetailedRecipes'
import './DetailedRecipeTemplate.css'
import KitchenRecipeProvider from '../components/contexts/KitchenRecipeContext'

const DetailedRecipeTemplate = () => {
    return (
        <div className="detailed-recipe-template">
            <KitchenRecipeProvider>
              <DetailedRecipes/>  
            </KitchenRecipeProvider>
        </div>
  )
}

export default DetailedRecipeTemplate