import Category from "./components/Category"
import QA from "./components/QA"
import projectFirestore  from "./firebase/config"
import {useState, useEffect} from "react"


const App = () => {
  
  
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect ( () => {
    projectFirestore.collection("jidlo").get().then((snapshot) =>{
      const result = []
      snapshot.docs.forEach( (oneFood) => {
        result.push ( {id: oneFood.id, ...oneFood.data()})
      })
      setData(result)
      
    }).catch((err) => {
      setError(err.message)
    })
}, [])


  // if (find.length === 0) {
  //   <p>Potravina nenalezena, zkuste zadat obecný název.</p>
  // } else {
  //   return find
  // }

       
  //     console.log(findFood);
  // if (findFood.název.toLowerCase().includes(search.toLowerCase())){
  //   setFind(findFood)
  // } else {
  //   return <p>Potravina nenalezena, zkuste zadat obecný název.</p>
  // }

  

  const showDrinks = () => {
    data.filter( (oneDrink) => {
      return oneDrink.typ.includes("nápoj")
      })}
      
  const showFood = () => {
    data.filter( (oneFood) => {
      return oneFood.typ.includes("potraviny")
      })}

  // const showOthers = () => {
  //   data.filter( (oneOther) => {
  //     return oneOther.typ.includes("ostatní")
  //     })

  return <section className="container"> 
    {error && <p>{error}</p>}
    <Category showDrinks={showDrinks} showFood={showFood} />
    <QA/>
    {/* showOthers={showOthers} */}
    
  </section>
}

export default App
