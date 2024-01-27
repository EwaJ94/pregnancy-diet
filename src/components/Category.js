import "./Category.css"

const Category = (props) => {
  
  return <div>
    <menu>
      <ul>
        <li onClick={props.showDrinks}>Nápoje</li>
        <li onClick={props.showFoods}>Potraviny</li>
        <li onClick={props.showOthers}>Ostatní</li>
      </ul>
    </menu>
    <section className="category-result">
    {/* {drinks.map ( (oneDrink) => {
      const {id,název,popis} = oneDrink

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
    </div>
    })} */}
    </section>
  </div>
}

export default Category
