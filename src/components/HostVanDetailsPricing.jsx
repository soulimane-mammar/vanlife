import { useOutletContext } from "react-router-dom";

const HostVanDetailsPricing = () => {
  const van = useOutletContext();
  return (
    <div className="host-van-details-pricing">
      <h2>
        ${van.price}
        <span>/day</span>
      </h2>
    </div>
  );
};
export default HostVanDetailsPricing;
