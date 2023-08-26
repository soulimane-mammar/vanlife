import Footer from "./Footer";
import VanCard from "./VanCard";

const Vans = (props) => {
  const vansList = props.vans.map((van) => <VanCard van={van} key={van.id} />);
  return (
    <div className="vans">
      <h1 className="vans-title"> Explore our van options </h1>
      <div className="vans-filters">
        <input type="checkbox" name="simple" />
        <label htmlFor="simple">Simple</label>

        <input type="checkbox" name="luxury" />
        <label htmlFor="luxury">Luxyry</label>

        <input type="checkbox" name="rugged" />
        <label htmlFor="rugged">Rugged</label>

        <button>Clear filters</button>
      </div>
      <div className="vans-list">{vansList}</div>
    </div>
  );
};

export default Vans;
