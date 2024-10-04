import "./Result.css"

const Result = ({drinks, foods, others, find, showCategory, showSearchedWord, error}) => {

  if (error) {
    return <div className="error-message">
      <p>{error}</p>
    </div>
  }

  return <div className="result">
  {showCategory && 
    <>
    {drinks.map ( (oneDrink) => {
      const {id, název, popis} = oneDrink

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
      </div>
    })}  

    {foods.map ( (oneFood) => {
      const {id, název, popis} = oneFood

    return <div key={id} >
      <h2>{název}</h2>
      <p>{popis}</p>
    </div>
    })}

  {others.map ( (oneOther) => {
  const {id, název, popis} = oneOther

  return <div key={id} >
    <h2>{název}</h2>
    <p>{popis}</p>
  </div>
  })}
  </>
}

{showSearchedWord && (
    find.map ( (oneFood) => {
      const {id,název,popis} = oneFood

      return <div key={id} >
        <h2>{název}</h2>
        <p>{popis}</p>
      </div>
      })
)}
</div>
}

export default Result