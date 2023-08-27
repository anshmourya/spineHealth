import { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
//component
import { Patient } from "../../hooks/Patient";
import Radio from "../../generalComponents/input/radio/Radio";
import { useLocation } from "react-router-dom";
import { CreateButton } from "../home/Home";

const NewPatient = () => {
  const { addPatient, editPatient } = useContext(Patient);
  const { state } = useLocation();

  const [patientProfileData, setPatientProfileData] = useState(
    state ? state : []
  );
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm();

  const handelSubmit = async (data) => {
    setLoading(true);
    const newData = await { ...patientProfileData, ...data };
    state ? editPatient(newData) : addPatient(newData);
    setLoading(false);
  };

  return (
    <>
      <div className="container m-auto">
        <h1 className="py-4 text-xl text-center border-b">Add New Patient</h1>
        <form onSubmit={handleSubmit(handelSubmit)}>
          <TextInput
            type={"text"}
            title={"name"}
            name={"name"}
            control={control}
            errors={errors}
            patientProfileData={patientProfileData}
          />
          <TextInput
            type={"number"}
            title={"Phone Number"}
            name={"phoneNumber"}
            control={control}
            errors={errors}
            patientProfileData={patientProfileData}
            validateFunc={(value) =>
              value.length === 10 ? true : "enter valid phone number"
            }
          />
          <TextInput
            type={"number"}
            title={"age"}
            name={"age"}
            control={control}
            errors={errors}
            patientProfileData={patientProfileData}
          />
          <Radio
            register={register}
            patientProfileData={patientProfileData}
            errors={errors}
          />
          <TextInput
            type={"text"}
            title={"nature Of Working"}
            name={"natureOfWorking"}
            control={control}
            errors={errors}
            patientProfileData={patientProfileData}
          />
          <TextInput
            type={"text"}
            title={"Post (Designation)"}
            name={"designation"}
            control={control}
            errors={errors}
            patientProfileData={patientProfileData}
          />
          <TextareaInput
            title={"History Of Illness"}
            name={"historyOfIllness"}
            control={control}
            patientProfileData={patientProfileData}
            errors={errors}
          />
          <TextareaInput
            title={"Chief Complaint"}
            name={"chiefComplaint"}
            control={control}
            patientProfileData={patientProfileData}
            errors={errors}
          />

          <CreateButton title={"Create Patient"} disable={loading} />
        </form>
      </div>
    </>
  );
};

export default NewPatient;

export function TextInput({
  type,
  title,
  control,
  errors,
  name,
  validateFunc,
  patientProfileData,
}) {
  const defaultValidateFunc = (value) =>
    value === "" ? `${title} field cannot be empty` : true;
  const validationFunction = validateFunc || defaultValidateFunc;

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => validationFunction(value),
        }}
        render={({ field }) => (
          <div className="flex flex-col mx-3">
            <label htmlFor="" className="my-3 text-sm text-gray-500">
              {title} <span className="text-red-600">*</span>
            </label>
            <input
              type={type}
              className="border border-gray-300 rounded-md h-[37px] outline-none px-3"
              {...field}
            />
          </div>
        )}
        defaultValue={patientProfileData[name] || ""}
      />
      <p
        className={`mx-3 my-2 text-sm font-semibold text-red-500 capitalize ${
          errors[name] ? "visible" : "invisible"
        }`}
      >
        {errors[name]?.message || "this field is required"}
      </p>
    </>
  );
}

export function TextareaInput({
  title,
  control,
  errors,
  name,
  validateFunc,
  patientProfileData,
}) {
  const defaultValidateFunc = () => true;

  const validationFunction = validateFunc || defaultValidateFunc;
  return (
    <Controller
      name={name}
      defaultValue={patientProfileData[name] || ""}
      control={control}
      rules={{
        validate: (value) => validationFunction(value),
      }}
      render={({ field }) => {
        return (
          <>
            <div className="mx-3">
              <label htmlFor="" className="block my-3 text-sm text-gray-500">
                {title}
                {validateFunc && <span className="text-red-600">*</span>}
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md outline-none min-h-[70px] resize-none"
                {...field}
              />
              <p
                className={`mx-3 my-2 text-sm font-semibold text-red-500 capitalize ${
                  errors[name] ? "visible" : "invisible"
                }`}
              >
                {errors[name]?.message || "this field is required"}
              </p>
            </div>
          </>
        );
      }}
    />
  );
}
