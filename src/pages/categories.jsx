import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import axios from 'axios'
export default function Categories() {
  const [categoriesResp, setCategoriesResp] = useState([]);
  const [errorResp, setErrorResp] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
    .then(response => setCategoriesResp(response))
    .catch(error => setErrorResp(error, "error"))
    .finally(() => setIsLoading(false));

  }, [])
  
  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }
  if (errorResp) {
    console.log(errorResp, 'error')
    return <h2>an error has occurred, please contact the support</h2>;

  }
  return (
    <div>
    <CategoriesList data={categoriesResp.data}/>
    <CategoryItem/>
  </div>
);
}