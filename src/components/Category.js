import "./Category.css"

const Category = (props) => {

  return <menu>
    <ul>
      <li onClick={props.showDrinks}>Nápoje</li>
      <li onClick={props.showFood}>Potraviny</li>
      <li onClick={props.showOthers}>Ostatní</li>
    </ul>
  </menu>
}

export default Category
