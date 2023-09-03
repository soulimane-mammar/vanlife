import { useOutletContext } from "react-router-dom";
import { capitalize } from "./Utils";

const HostVanDetailsDetails = () => {
  const van = useOutletContext();

  return (
    <div className="host-van-details-details">
      <p>
        <strong>Name:</strong> {van.name}{" "}
      </p>
      <p>
        <strong>Category:</strong> {capitalize(van.type)}
      </p>
      <p>
        <strong>Description:</strong> {van.description}
      </p>
      <p>
        <strong>Visibility:</strong> Public
      </p>
    </div>
  );
};
export default HostVanDetailsDetails;
