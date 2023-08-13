import { useState, useEffect, useContext } from "react";
//component
import { Patient } from "../../hooks/Patient";
import Radio from "../../generalComponents/input/radio/Radio";

const NewPatient = () => {
  const { addPatient } = useContext(Patient);
  const [patientProfileData, setPatientProfileData] = useState([]);

  const handelChange = (e) => {
    let { name, value } = e.target;
    setPatientProfileData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    console.log(patientProfileData);
  }, [patientProfileData]);
  return (
    <>
      <div className="container m-auto ">
        <h1 className="py-4 text-xl text-center border-b">Add New Patient</h1>
        <form
          action=""
          method="post"
          onSubmit={(e) => addPatient(e, patientProfileData)}
        >
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
          <Radio handelChange={handelChange} />
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

export function TextInput({ type, title, handelChange, value, name }) {
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
      />
    </div>
  );
}

function TextareaInput({ title, handelChange, value }) {
  return (
    <div className="mx-3 ">
      <label htmlFor="" className="block my-3 text-sm text-gray-500">
        {title}
      </label>
      <textarea
        name={title}
        className="w-full px-3 border border-gray-300 rounded-md outline-none min-h-[70px] resize-none"
        value={value[title] || ""}
        onChange={(e) => handelChange(e)}
      />
    </div>
  );
}
