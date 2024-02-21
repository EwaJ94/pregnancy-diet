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

  const showDrinks = () => {
    setFoods([])
    setOthers([])
    try {
      const finalDrinks = data.filter((oneDrink) => {
        return oneDrink.typ.includes("nápoj")
      })
      setDrinks(finalDrinks)
      }catch(err) {
        setError(err.message)
      }
  }
  
  const showFoods = () => {
    setDrinks([])
    setOthers([])
    try {
      const finalFoods = data.filter((oneFood) => {
        return oneFood.typ.includes("potraviny")
      })
      setFoods(finalFoods)
      }catch(err) {
        setError(err.message)
      }
  }
  
  const showOthers = () => {
    setDrinks([])
    setFoods([])
    
    try {
      const finalOthers = data.filter((oneOther) => {
        return oneOther.typ.includes("ostatní")
      })
      setOthers(finalOthers)
      }catch(err) {
        setError(err.message)
      }
  }

const removeCategories = () => {
  setDrinks([])
  setFoods([])
  setOthers([])
}
  return <section className="container"> 
    {error && <p>{error}</p>}
    <Category showDrinks={showDrinks} showFoods={showFoods} showOthers={showOthers}/>
    <QA data={data} removeCategories={removeCategories}/>
    
    <div className="result">
      {drinks.map ( (oneDrink) => {
      const {id, název, popis } = oneDrink

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
      </div>
      })}

      {foods.map ( (oneFood) => {
      const {id, název, popis } = oneFood

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
      </div>
      })}

      {others.map ( (oneOther) => {
      const {id, název, popis } = oneOther

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
      </div>
      })}
</div>
</section>
}

export default App
