import logoTitle from "../../assets/images/logo-s.png";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br />I'm</h1>
        <img src={logoTitle} alt="developer"/>
      </div>
    </div>
  )
}

export default Home
