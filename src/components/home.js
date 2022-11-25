import { useEffect, useState } from "react";
import LocationBar from "./location";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const localData = localStorage.getItem("driverData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <>
      <p className="font-bold text-4xl">
        {data.number} | {data.plate}
      </p>

      <LocationBar />
    </>
  );
}
