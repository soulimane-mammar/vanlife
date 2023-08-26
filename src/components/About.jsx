import Nav from "./Nav";
import Footer from "./Footer";
const About = () => {
  return (
    <div className="about">
      <img
        className="about-image"
        src={new URL("../assets/van-night.png", import.meta.url).href}
      />

      <div className="about-content">
        <h1> Don't squeeze in a sedan when you could relax in a van. </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels. Let's go
        </p>
        <div className="explore-vans">
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
          <button className="explore-vans-button">Explore our vans</button>
        </div>
      </div>
    </div>
  );
};
export default About;
