import "./QA.css"
import pregnantlady from "../icons/pregnantlady.png"
import projectFirestore  from "../firebase/config"
import {useState, useEffect} from "react"
// import useParams from "react-router-dom"

const QA = () => {
  const [search, setSearch] = useState("")
  const [find, setFind] = useState({})
  const [data, setData] = useState([])
  const [error, setError] = useState (false)

  // const { foodId } = useParams()

  useEffect ( () => {
    projectFirestore.collection("jidlo").get().then((snapshot) =>{
      let result = []
      snapshot.docs.forEach( (oneFood) => {
        result.push ( {id: oneFood.id, ...oneFood.data()})
      })
      setData(result)
      console.log(result);
    }).catch((err) => {
      setError(err.message)
    })

  
}, [search])


  const formSubmit = (e) => {
    e.preventDefault()

  //   const findFood = data.filter( (oneFood) => {
  //     return oneFood.název.toLowerCase().includes(search.toLowerCase())
  // })
  // setFind(findFood)

    console.log(search);
    setSearch("")
  }

  return <div>
    <section className="question">
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
  </section>
  <section>
    {error && <p>{error}</p>}
    {find.map ( (oneFood) => {
      const {id,název,popis} = oneFood

      return <div key={id}>
      <h2>{název}</h2>
      <p>{popis}</p>
    </div>
    })}
  </section>
  <img src={pregnantlady} alt="pregnant-lady" className="pregnant-lady"/>
</div>
 
}
export default QA
