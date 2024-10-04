import "./Category.css"

const Category = ({showDrinks, showFoods, showOthers}) => {
  return <section>
    <menu>
      <ul>
        <li onClick={showDrinks}>Nápoje</li>
        <li onClick={showFoods}>Potraviny</li>
        <li onClick={showOthers}>Ostatní</li>
      </ul>
    </menu>
</section>
}

export default Category
