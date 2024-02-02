import "./Welcome.css"
import cross from "../icons/cross.png"

const Welcome = () => {
  return <section className="welcome-window">
    <img src={cross} alt="cross" />
    <h2>Pregnancy diet</h2>
    <p>Vítejte v aplikaci Pregnancy diet, díky které zjistíte, které potraviny jsou v těhotenství vhodné.<br /> Do vyhledávacího pole prosím zadávejte obecný název (např. chcete-li vyhledat "hermelín" zadejte slovo sýr). </p>
    
  </section>
}

export default Welcome
