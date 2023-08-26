import { Link } from "react-router-dom";

const VanCard = (props) => {
  const displayedType =
    props.van.type.charAt(0).toUpperCase() + props.van.type.slice(1);

  const typeColors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  return (
    <div className="van-card">
      <Link to={`/vans/${props.van.id}`}>
        <img
          className="van-card-img"
          src={new URL(props.van.imageUrl, import.meta.url).href}
        />
        <div className="van-card-info">
          <h2 className="van-card-name">{props.van.name}</h2>
          <h2 className="van-card-price">${props.van.price}</h2>
        </div>
        <p className="van-card-day">/day</p>
        <h2
          className="van-card-type"
          style={{ backgroundColor: typeColors[props.van.type] }}
        >
          {displayedType}
        </h2>
      </Link>
    </div>
  );
};
export default VanCard;
