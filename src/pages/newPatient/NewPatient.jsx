import { useState, useEffect, useContext } from "react";
//component
import { Patient } from "../../hooks/Patient";
import Radio from "../../generalComponents/input/radio/Radio";
import { useLocation } from "react-router-dom";

const NewPatient = () => {
  const { addPatient, editPatient } = useContext(Patient);
  const { state } = useLocation();

  const [patientProfileData, setPatientProfileData] = useState(
    state ? state : []
  );

  const handelChange = (e) => {
    let { name, value } = e.target;
    setPatientProfileData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    state ? editPatient(patientProfileData) : addPatient(patientProfileData);
  };

  return (
    <>
      <div className="container m-auto ">
        <h1 className="py-4 text-xl text-center border-b">Add New Patient</h1>
        <form action="" method="post" onSubmit={handelSubmit}>
          <TextInput
            type={"text"}
            title={"name"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <TextInput
            type={"Number"}
            title={"age"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <TextInput
            type={"Number"}
            title={"phoneNumber"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <Radio
            handelChange={handelChange}
            value={patientProfileData.gender}
          />
          <TextInput
            type={"text"}
            title={"nature Of Working"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <TextInput
            type={"text"}
            title={"Post (Designation)"}
            name={"designation"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <TextareaInput
            title={"History Of Illness"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <TextareaInput
            title={"Chief Complaint"}
            handelChange={handelChange}
            value={patientProfileData}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewPatient;

export function TextInput({
  type,
  title,
  handelChange,
  value,
  name,
  readOnly,
}) {
  const inputName = (name || title).split(" ").join("");
  return (
    <div className="flex flex-col mx-3 ">
      <label htmlFor="" className="my-3 text-sm text-gray-500">
        {title} <span className="text-red-600">*</span>
      </label>
      <input
        type={type}
        className="border border-gray-300 rounded-md h-[37px] outline-none px-3"
        value={value[inputName] || ""}
        name={inputName}
        onChange={(e) => handelChange(e)}
        required
        readOnly={readOnly || false}
      />
    </div>
  );
}

export function TextareaInput({ title, handelChange, value, name, required }) {
  const inputName = (name || title).split(" ").join("");
  return (
    <div className="mx-3 ">
      <label htmlFor="" className="block my-3 text-sm text-gray-500">
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        name={inputName}
        className="w-full p-3 border border-gray-300 rounded-md outline-none min-h-[70px] resize-none"
        value={value[inputName] || ""}
        onChange={(e) => handelChange(e)}
        required={required || false}
      />
    </div>
  );
}
