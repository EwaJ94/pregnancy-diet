import "./Question.css"
import projectFirestore  from "../firebase/config"
import {useState, useEffect} from "react"
// import useParams from "react-router-dom"

const Question = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [error, setError] = useState (false)

  // const { foodId } = useParams()

  useEffect ( () => {
    projectFirestore.collection("jídlo").get().then((document) =>{
      if(document.exists){
        setData(document.data())
      }else{setError("Nenalezená potravina")}
    }).catch((err) => {
      setError(err.message)
    },[])
  })

  const formSubmit = (e) => {
    e.preventDefault()

    console.log(search);
    setSearch("")
  }

  return <div>
    {error && <p>{error}</p>}
    {data.map( (oneFood) => {
      const {id, název, popis} = oneFood
    
    
      return <div key={id}>
      <form className="search-text" 
      onSubmit={formSubmit}> 

      <input 
      type="text" 
      className="input-text"
      value = {search}
      onChange={ (e) => setSearch(e.target.value)} 
      title="Pro přesnější vyhledávání v databázi, napište obecný název potraviny (np. místo hermelín napište sýr)." />

      <input 
      type="submit" 
      value="Hledat" 
      className="find"/>
    </form>

    <h2>{název}</h2>
    <p>{popis}</p>
    </div>
})}
  </div>
}
export default Question
