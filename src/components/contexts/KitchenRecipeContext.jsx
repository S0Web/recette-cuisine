import React, { useState, useContext } from "react";

export const KitchenRecipeContext = React.createContext()

const KitchenRecipeProvider = ({children, values}) => {

  

  
  return (
    <KitchenRecipeContext.Provider
      value={{
        ...values,

      }}
    >
      {children}
    </KitchenRecipeContext.Provider>
  )
}

export default KitchenRecipeProvider

export const useDetailed = () => {
  return useContext(KitchenRecipeContext)
}