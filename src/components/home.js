import { useEffect, useState } from "react";
import LocationBar from "./location";
import Toggler from "./toggler";

export default function Home() {
  const [data, setData] = useState({});

  const deleteCache = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const localData = localStorage.getItem("driverData");
    // setData(JSON.parse(localData));
    setData({});
  }, []);

  return (
    <>
      {/* <p className="font-bold text-4xl">
        {data.number} | {data.plate}
      </p> */}

      <LocationBar />

      {/* <Toggler /> */}

      <button className="btn btn-error mt-4 w-96" onClick={deleteCache}>
        Logout
      </button>
    </>
  );
}
