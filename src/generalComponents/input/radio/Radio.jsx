import "./Radio.css";
const Radio = ({ handelChange, value }) => {
  const handelRadioChange = (e) => handelChange(e);
  return (
    <>
      <div className="m-auto my-3 text-gray-500 radio-input">
        <label>
          <input
            type="radio"
            id="value-1"
            name="gender"
            value="male"
            onChange={handelRadioChange}
            required
            defaultChecked={value === "male"}
          />
          <span>Male</span>
        </label>
        <label>
          <input
            type="radio"
            id="value-2"
            name="gender"
            value="female"
            onChange={handelRadioChange}
            required
            defaultChecked={value === "female"}
          />
          <span>Female</span>
        </label>
        <span className="selection"></span>
      </div>
    </>
  );
};

export default Radio;
