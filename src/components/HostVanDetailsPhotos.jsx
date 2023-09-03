import { useOutletContext } from "react-router-dom";

const HostVanDetailsPhotos = () => {
  const van = useOutletContext();
  return (
    <div className="host-van-details-photos">
      <img src={new URL(van?.imageUrl, import.meta.url).href}></img>
    </div>
  );
};
export default HostVanDetailsPhotos;
