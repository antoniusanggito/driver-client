import { useState } from "react";
import { toast } from "react-toastify";
import Client from "../api/axios";
import { sleep } from "../utils";

export default function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Client.post("/bus/login", {
      username: username,
      password: password,
    })
      .then(async (response) => {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "driverData",
          JSON.stringify({
            id: data.id,
            number: data.number,
            plate: data.plate,
            status: data.status,
            route: data.route,
            isActive: data.isActive,
          })
        );
        toast.success("Logged in");
        await sleep(1500);
        window.location.reload();
      })
      .catch(() => {
        toast.error("Login failed");
      });
  };

  return (
    <div className="card w-96 h-fit bg-base-100 shadow-xl">
      <div className="card-body">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary" onClick={login}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
