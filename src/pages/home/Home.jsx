import { useEffect, useContext, useState } from "react";

import { Patient } from "../../hooks/Patient";
//component
import TableStructure from "../../components/table/TableStructure";
import SearchPatient from "../../generalComponents/SearchPatient";

//icons
import { AiOutlinePlus } from "react-icons/ai";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

const Home = () => {
  const { patientData, getAllPatients, deletePatient } = useContext(Patient);

  const [patientToDisplay, setPatientToDisplay] = useState([]);

  useEffect(() => {
    getAllPatients();
  }, []);

  //pateint table header
  const patientHeader = [
    "name",
    "age",
    "phone Number",
    "gender",
    "nature Of Working",
    "designation",
    "time Of Visit",
  ];

  const handeldelete = (patient) => {
    deletePatient(patient.id);
  };
  return (
    <>
      {patientData && (
        <>
          <div className="container flex justify-between m-auto my-5">
            <SearchPatient
              patientData={patientData}
              setPatientToDisplay={setPatientToDisplay}
            />
            <div>
              <Link to="/newPatient">
                <CreateButton title={"create new Patient"} />
              </Link>
            </div>
          </div>

          {patientToDisplay.length > 0 ? (
            <TableStructure
              patientData={patientToDisplay}
              deleteData={handeldelete}
              Header={patientHeader}
              TableDataView={TableDataView}
              editNavigationLink={"/newPatient"}
            />
          ) : (
            <Loader />
          )}
        </>
      )}
    </>
  );
};

export default Home;

export function CreateButton({ title }) {
  return (
    <button className=" h-[37px] p-2 rounded-lg text-sm flex items-center gap-2 bg-orange-400 text-white capitalize">
      {title} <AiOutlinePlus className="text-white" />
    </button>
  );
}

function TableDataView({ patientDataValue, state }) {
  return (
    <>
      <Link to="/visitView" state={state}>
        {patientDataValue !== undefined ? patientDataValue : "-"}
      </Link>
    </>
  );
}
