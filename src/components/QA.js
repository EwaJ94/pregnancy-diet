import "./QA.css"
import {useState} from "react"

const QA = ({handleSearch}) => {
  const [search, setSearch] = useState("")
  
  const formSubmit = (e) => {
    e.preventDefault()

    if(search.trim()){
      handleSearch(search)
      setSearch("")
    }
  }

  return <div>
    <section className="question">
      <form 
      className="search-text" 
      onSubmit={formSubmit}> 
      <input 
      type="text" 
      className="input-text" 
      value = {search}
      onChange={ (e) => setSearch(e.target.value)} 
      title="Zadejte obecný název potraviny (np. místo hermelín, zadejte sýr)." />
      <input 
      type="submit" 
      value="Hledat" 
      className="find"/>
    </form>
  </section>
</div>
}

export default QA