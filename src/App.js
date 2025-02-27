import Category from "./components/Category"
import Search from "./components/Search"
import Result from "./components/Result"
import projectFirestore from "./firebase/config"
import {useState, useEffect} from "react"
import pregnantlady from "./icons/pregnantlady.png"

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [drinks, setDrinks] = useState([])
  const [foods, setFoods] = useState([])
  const [others, setOthers] = useState([])
  const [showCategory, setShowCategory] = useState(false)
  const [showSearchedWord, setShowSearchedWord] = useState(false)
  const [search, setSearch] = useState("")
  const [find, setFind] = useState([])

  useEffect ( () => {
    projectFirestore.collection("jidlo").get().then((snapshot) => {
      const result = []
      snapshot.docs.forEach( (oneFood) => {
        result.push ( {id: oneFood.id, ...oneFood.data()})
      })
      setData(result)
      
    }).catch((err) => {
      setError(err.message)
    })
}, [])

  const resetResults = () => {
    setDrinks([])
    setFoods([])
    setOthers([])
    setFind([])
    setError("")
    setShowSearchedWord(false)
  }

  const showDrinks = () => {
    resetResults()
    setShowCategory(true)

    const finalDrinks = data.filter((oneDrink) => {
      return oneDrink.typ.includes("nápoj")})
      setDrinks(finalDrinks)
  }
  
  const showFoods = () => {
    resetResults()
    setShowCategory(true)

    const finalFoods = data.filter((oneFood) => {
      return oneFood.typ.includes("potraviny")})
      setFoods(finalFoods)
  }
  
  const showOthers = () => {
    resetResults()
    setShowCategory(true)

    const finalOthers = data.filter((oneOther) => {
      return oneOther.typ.includes("ostatní")})
      setOthers(finalOthers)
  }

  const handleSearch = (searchValue) => {
    resetResults()
    setSearch(searchValue)
    
    if (!searchValue.trim()){
      setError("Prosím zadejte hledaný text.")
      return
    }

    const findItem = data.filter((oneItem) => 
      oneItem.název.toLowerCase().includes(searchValue.toLowerCase())
  )

    if (findItem.length === 0) {
      setError("Potravina nenalezena, zkuste zadat obecný název.")
      return
    } else {
      setFind(findItem)
      setError("")
      setShowCategory(false)
      setShowSearchedWord(true)
    }  
  }

  return <section className="container"> 
    <Category 
    showDrinks={showDrinks} 
    showFoods={showFoods} 
    showOthers={showOthers}/>
    <Search handleSearch={handleSearch} search={search} setSearch={setSearch}/>
    <Result 
    drinks={drinks} 
    foods={foods} 
    find={find} 
    others={others} 
    showCategory={showCategory} 
    showSearchedWord={showSearchedWord} 
    error={error}/>
    <img 
    src={pregnantlady} 
    alt="pregnant lady" 
    className="pregnant-lady"/>
  </section>
}

export default App
