import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
//component
import { TextInput, TextareaInput } from "../newPatient/NewPatient";
import { VisitData } from "../../hooks/Visit";

//component
const Visit = () => {
  const { addVisit } = useContext(VisitData);
  const { state } = useLocation();
  const [newVisit, setNewVisit] = useState({});

  const handelChange = (e) => {
    let { name, value } = e.target;
    setNewVisit((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addVisit(newVisit, state.id);
  };

  const textInputHeader = [
    { title: "name", type: "text" },
    { title: "age", type: "number" },
    { title: "gender", type: "text" },
    { title: "phoneNumber", type: "number" },
  ];

  const textareaInputHeader = [
    { title: "Current Illness" },
    { title: "Medication Given" },
    { title: "Note (If Any)", name: "note" },
  ];
  return (
    <>
      <div className="container m-auto">
        <form action="" method="post" onSubmit={onSubmit}>
          {textInputHeader.map((textInput, index) => (
            <TextInput
              key={index}
              title={textInput.title}
              type={textInput.type}
              value={state}
              required={true}
              handelChange={handelChange}
            />
          ))}

          {textareaInputHeader.map((textareaInput, index) => (
            <TextareaInput
              key={index}
              title={textareaInput.title}
              name={textareaInput.name}
              value={newVisit}
              handelChange={handelChange}
              required={true}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Visit;
