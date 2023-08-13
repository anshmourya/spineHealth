import "./Radio.css";
const Radio = ({ handelChange }) => {
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
            onClick={handelRadioChange}
            required
          />
          <span>Male</span>
        </label>
        <label>
          <input
            type="radio"
            id="value-2"
            name="gender"
            value="female"
            onClick={handelRadioChange}
            required
          />
          <span>Female</span>
        </label>
        <span className="selection"></span>
      </div>
    </>
  );
};

export default Radio;
