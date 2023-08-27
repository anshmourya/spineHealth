import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
//component
import { TextInput, TextareaInput } from "../newPatient/NewPatient";
import { VisitData } from "../../hooks/Visit";

//component
const Visit = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { id } = useParams();
  const { addVisit, editVisit } = useContext(VisitData);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [newVisit, setNewVisit] = useState(state ? state : {});

  const onSubmit = (data) => {
    const newData = { ...newVisit, ...data };
    state ? editVisit(newData, id, state.visitId) : addVisit(newData, id);
  };

  // const textInputHeader = [
  //   { title: "name", type: "text" },
  //   { title: "age", type: "number" },
  //   { title: "gender", type: "text" },
  //   { title: "phoneNumber", type: "number" },
  // ];

  const textareaInputHeader = [
    { title: "reason For Visit", name: "reasonForVisit" },
    { title: "prescribed Medications", name: "prescribedMedications" },
    { title: "Note (If Any)", name: "notes" },
  ];

  return (
    <>
      <>
        <h1 className="py-4 text-xl text-center border-b">Visit</h1>
        <div className="container m-auto">
          <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            {textareaInputHeader.map((textareaInput, index) => (
              <TextareaInput
                key={index}
                title={textareaInput.title}
                name={textareaInput.name}
                control={control}
                errors={errors}
                patientProfileData={newVisit}
              />
            ))}
            <button
              type="submit"
              className="h-[37px] p-2 rounded-lg text-sm flex items-center gap-2 bg-orange-400 text-white text-center m-auto my-4  "
            >
              Submit
            </button>
          </form>
        </div>
      </>
    </>
  );
};

export default Visit;
