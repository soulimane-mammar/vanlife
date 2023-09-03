import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import HostVanDetailsSummary from "../../components/HostVanDetailsSummary";
import HostVanDetailsNav from "../../components/HostVanDetailsNav";

const HostVanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState({});
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  return (
    <>
      &larr;{" "}
      <Link to=".." relative="path">
        Back to all vans
      </Link>
      <div className="host-van-details">
        <div className="host-van-details-contents">
          {Object.keys(van).length !== 0 && <HostVanDetailsSummary van={van} />}
          <HostVanDetailsNav />
          <Outlet context={van} />
        </div>
      </div>
    </>
  );
};
export default HostVanDetails;
