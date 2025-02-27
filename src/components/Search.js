import "./Search.css"

const Search = ({handleSearch, search, setSearch}) => {
  
  const formSubmit = (e) => {
    e.preventDefault()

    if(search.trim()){
      handleSearch(search)
      setSearch("")
    }
  }

  return <>
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
</>
}

export default Search