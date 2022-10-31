import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import axios from 'axios'
export default function Categories() {
  const data = [
    {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6011",
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=304",
    },
    {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=9450",
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3133",
    },
    {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=4432",
    },
  ];
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }, [])
  
  


  return (
    <div>
    <CategoriesList data={data}/>
    <CategoryItem/>
  </div>
);
}