import Category from "./components/Category"
import QA from "./components/QA"
import projectFirestore  from "./firebase/config"
import {useState, useEffect} from "react"


const App = () => {

  
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [drinks, setDrinks] = useState([])
  const [foods, setFoods] = useState([])
  const [others, setOthers] = useState([])

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

  
  console.log(data)
  const showDrinks = () => {
    const finalDrinks = data.filter((oneDrink) => {
      return oneDrink.typ.includes("nápoj")
    })
    setDrinks(finalDrinks);
  }
  
      
  const showFoods = () => {
    const finalFoods = data.filter((oneFood) => {
      return oneFood.typ.includes("potraviny")
    })
    setFoods(finalFoods);
  }
  console.log(foods);

  const showOthers = () => {
    const finalOthers = data.filter((oneOther) => {
      return oneOther.typ.includes("ostatní")
    })
    setOthers(finalOthers);
  }
  console.log(others);

  return <section className="container"> 
    {error && <p>{error}</p>}
    
    <Category showDrinks={showDrinks} showFoods={showFoods} showOthers={showOthers}/>
    <QA/>
    
    
    
  </section>
}

export default App
