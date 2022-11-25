import { useGeolocated } from "react-geolocated";

const token = localStorage.getItem("token") || "";

const client = new WebSocket(
  `wss://hapi.bikunku.com/bus/stream?type=driver&token=${token}`
);

export default function LocationBar() {
  const updateLocationData = (pos) => {
    console.log(pos);
    client.send({
      long: pos.longitude,
      lat: pos.latitude,
      heading: pos.heading == null ? 0 : pos.heading,
      speed: pos.speed == null ? 0 : pos.speed,
    });
  };

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
      onSuccess: updateLocationData,
    });

  client.onopen = (event) => {
    console.log(event);
  };

  return (
    <div className="card w-96 h-fit bg-primary shadow-xl mt-4">
      <div className="card-body ">
        {!isGeolocationAvailable ? (
          <div className="font-semibold text-center">
            Your browser does not support Geolocation
          </div>
        ) : !isGeolocationEnabled ? (
          <div className="font-semibold text-center">
            Geolocation is not enabled
          </div>
        ) : coords ? (
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col items-start">
                <div className="font-bold">Longitude</div>
                <div>{coords.longitude}</div>
              </div>
              <div className="flex flex-col ml-auto items-end">
                <div className="font-bold">Latitude</div>
                <div>{coords.latitude}</div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col items-start">
                <div className="font-bold">Speed</div>
                <div>{coords.speed}</div>
              </div>
              <div className="flex flex-col ml-auto items-end">
                <div className="font-bold">Heading</div>
                <div>{coords.heading}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="font-semibold text-center">
            Getting the location data&hellip;
          </div>
        )}
      </div>
    </div>
  );
}
