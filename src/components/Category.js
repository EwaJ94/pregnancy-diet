import "./Category.css"
import projectFirestore  from "../firebase/config"

const Category = () => {

  const listOfDrinks = () => {
    
  }

  return <menu>
    <ul>
      <li onClick={() => listOfDrinks()}>Nápoje</li>
      <li>Potraviny</li>
      <li>Ostatní</li>
    </ul>
  </menu>
}

export default Category
