import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src={new URL("../assets/mountain.png", import.meta.url).href} />
      </div>
      <div className="home-content">
        <h1> You got the travel plans, we got the travel vans. </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="home-button">
          Find your van
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
