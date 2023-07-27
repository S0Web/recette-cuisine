import React, { useEffect } from "react";
import DetailedRecipes from "../components/DetailedRecipes/DetailedRecipes";
import "./DetailedRecipeTemplate.css";
import KitchenRecipeProvider, {
  useDetailed,
} from "../components/contexts/KitchenRecipeContext";

const DetailedRecipeTemplate = () => {
  const { datas } = useDetailed();

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  return (
    <div className="detailed-recipe-template">
      <DetailedRecipes />
    </div>
  );
};

export default DetailedRecipeTemplate;
