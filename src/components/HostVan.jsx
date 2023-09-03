import { Link } from "react-router-dom";
const HostVan = (props) => {
  return (
    <Link to={`/host/vans/${props.van?.id}`}>
      <div className="host-van">
        <img
          className="host-van-img"
          src={new URL(props.van?.imageUrl, import.meta.url).href}
        />
        <div className="host-van-info">
          <h1>{props.van.name}</h1>
          <h2>${props.van.price}/day</h2>
        </div>
      </div>
    </Link>
  );
};
export default HostVan;
