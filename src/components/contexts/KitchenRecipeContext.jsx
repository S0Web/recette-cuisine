import React, { useState, useContext } from "react";

export const KitchenRecipeContext = React.createContext()

const KitchenRecipeProvider = ({children, values}) => {
  const [datas, setDatas] = useState()

  return (
    <KitchenRecipeContext.Provider
      value={{
        ...values,
        datas,
        setDatas
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