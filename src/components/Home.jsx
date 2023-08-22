import Nav from "./Nav";
import Footer from "./Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home-image">
        <img src={new URL("../assets/mountain.png", import.meta.url).href} />
      </div>
      <div className="home-content">
        <h1> You got the travel plans, we got the travel vans. </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="home-button">Find your van</button>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
