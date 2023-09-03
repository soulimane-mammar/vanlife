import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VanDetail = () => {
  const id = useParams().id;
  const typeColors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  const [van, setVan] = useState({});
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, []);

  console.log(van);

  const displayedType =
    van?.type?.charAt(0).toUpperCase() + van?.type?.slice(1);
  return (
    <div className="van-detail">
      <img
        className="van-detail-img"
        src={new URL(van?.imageUrl, import.meta.url).href}
      />

      <h2
        className="van-card-type"
        style={{ backgroundColor: typeColors[van?.type] }}
      >
        {displayedType}
      </h2>
      <h2 className="van-detail-name">{van?.name}</h2>
      <h2 className="van-detail-price">
        ${van?.price}
        <span className="van-detail-day">/day</span>
      </h2>
      <p className="van-detail-desc">{van?.description}</p>
      <button className="van-detail-rent-btn">Rent this van</button>
    </div>
  );
};
export default VanDetail;
