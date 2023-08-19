import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
//component
import { TextInput, TextareaInput } from "../newPatient/NewPatient";
import { VisitData } from "../../hooks/Visit";

//component
const Visit = () => {
  const { id } = useParams();
  const { addVisit, editVisit } = useContext(VisitData);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [newVisit, setNewVisit] = useState(state ? state : {});

  const handelChange = (e) => {
    let { name, value } = e.target;
    setNewVisit((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    state ? editVisit(newVisit, id, state.visitId) : addVisit(newVisit, id);
  };

  // const textInputHeader = [
  //   { title: "name", type: "text" },
  //   { title: "age", type: "number" },
  //   { title: "gender", type: "text" },
  //   { title: "phoneNumber", type: "number" },
  // ];

  const textareaInputHeader = [
    { title: "reason For Visit" },
    { title: "prescribed Medications" },
    { title: "Note (If Any)", name: "notes" },
  ];

  return (
    <>
      <>
        <h1 className="py-4 text-xl text-center border-b">Visit</h1>
        <div className="container m-auto">
          <form action="" method="post" onSubmit={onSubmit}>
            {/* {textInputHeader.map((textInput, index) => (
              <TextInput
                key={index}
                title={textInput.title}
                type={textInput.type}
                value={newVisit}
                required={true}
                handelChange={handelChange}
              />
            ))} */}

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
