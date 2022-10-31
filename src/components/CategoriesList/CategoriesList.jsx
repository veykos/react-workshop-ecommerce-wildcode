import styles from './styles.module.css'

export const CategoriesList = (props) => {

  const {children} = props
  return(
      <div className={styles.layout} >
        {children}
      </div>
  )
}