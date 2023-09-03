import { useState, useEffect } from "react";
import HostVan from "../../components/HostVan";

const HostVans = () => {
  const [hostVanList, setHostVanList] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setHostVanList(data.vans));
  }, []);

  const hostVanListElements = hostVanList.map((van) => (
    <HostVan key={van.id} van={van} />
  ));
  return (
    <div className="host-vans-container">
      <h1>Your listed vans </h1>
      {hostVanListElements}
    </div>
  );
};
export default HostVans;
