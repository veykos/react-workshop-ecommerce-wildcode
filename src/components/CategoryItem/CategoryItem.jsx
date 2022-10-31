export const CategoryItem = (props) => {
  const { name, image } = props;
    return (
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </div>
    );
  
}