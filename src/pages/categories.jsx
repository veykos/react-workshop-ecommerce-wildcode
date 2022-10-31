import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
export default function Categories() {
  const [categoriesResp, errorResp, isLoading] = useFetch(
    `https://api.escuelajs.co/api/v1/categories`
  );
  
  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }
  if (errorResp) {
    console.log(errorResp, 'error')
    return <h2>an error has occurred, please contact the support</h2>;

  }
  return (
    <div>
    <CategoriesList>
      {categoriesResp.data.map(({id,name,image}, index) => {
            return (
            <CategoryItem key={id || index} name={name} image={image} />
              
            );
          })}
    </CategoriesList>
  </div>
);
}