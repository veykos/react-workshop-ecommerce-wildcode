import styles from './styles.module.css'

export const CategoriesList = () => {
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


  return(
      <div className={styles.layout} >
        {data.map((element,index) => {
          const {id,name,image} = element;
          return (
            <div key={id || index}>
            <h3>{name}</h3>
            <img src={image} alt={element.name} />
          </div>
          )
        })}
      </div>
  )
}