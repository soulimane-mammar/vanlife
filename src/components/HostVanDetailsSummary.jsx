const HostVanDetailsSummary = (props) => {
  const displayedType =
    props.van.type?.charAt(0).toUpperCase() + props.van.type?.slice(1);
  const typeColors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  console.log(props);
  return (
    <div className="host-van-detail-summary">
      <img
        className="host-van-img"
        src={new URL(props.van?.imageUrl, import.meta.url).href}
      />
      <div className="host-van-info">
        <h2
          className="van-card-type"
          style={{ backgroundColor: typeColors[props.van.type] }}
        >
          {displayedType}
        </h2>
        <h1>{props.van.name}</h1>
        <h2>
          <span>${props.van.price}</span>/day
        </h2>
      </div>
    </div>
  );
};
export default HostVanDetailsSummary;
