export default function Toggler() {
  return (
    <div className="card w-96 h-fit bg-primary shadow-xl mt-4">
      <div className="card-body ">
        <select className="select select-accent w-full max-w-xs">
          <option disabled selected>
            Route
          </option>
          <option>RED</option>
          <option>BLUE</option>
        </select>

        <select className="select select-accent w-full max-w-xs">
          <option disabled selected>
            Status
          </option>
          <option>EMPTY</option>
          <option>MODERATE</option>
          <option>FULL</option>
        </select>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Is Active</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>
    </div>
  );
}
