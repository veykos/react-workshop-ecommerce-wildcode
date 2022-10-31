import styles from './styles.module.css'

export const CategoriesList = (props) => {
  const {data} = props

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