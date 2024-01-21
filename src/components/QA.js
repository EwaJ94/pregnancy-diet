import "./QA.css"
import pregnantlady from "../icons/pregnantlady.png"
import {useState} from "react"


const QA = (props) => {
  const [search, setSearch] = useState("")

  const formSubmit = (e) => {
    e.preventDefault()

  }
  

  return <div>
    <section className="question">
      <form className="search-text" 
      onSubmit={formSubmit}> 

      <input 
      type="text" 
      className="input-text" 
      // value = {search}
      onChange={ (e) => setSearch(e.target.value)} 
      title="Pro přesnější vyhledávání v databázi, napište obecný název potraviny (np. místo hermelín napište sýr)." />

      <input 
      type="submit" 
      value="Hledat" 
      className="find"
      onSubmit={props.findFood}/>
    </form>
    
  </section>
  <section className="result">
    
    {find.map ( (oneFood) => {
      const {id,název,popis} = oneFood

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
    </div>
    })}
  </section>
  <img src={pregnantlady} alt="pregnant-lady" className="pregnant-lady"/>
</div>
 
}
export default QA
