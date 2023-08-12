import { useEffect, useContext, useState } from "react";

import { Patient } from "../../hooks/Patient";
//component
import TableStructure from "../../components/table/TableStructure";
import SearchPatient from "../../generalComponents/SearchPatient";

//icons
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  const { patientData, getAllPatients } = useContext(Patient);

  const [patientToDisplay, setPatientToDisplay] = useState(null);
  useEffect(() => {
    getAllPatients();
  }, []);
  return (
    <>
      {
        patientData &&   <><div className="container m-auto flex justify-between">
        <SearchPatient
          patientData={patientData}
          setPatientToDisplay={setPatientToDisplay}
        />
        <div>
          <CreatePatient />
        </div>
      </div>

      {patientToDisplay?.length > 0 ? (
        <TableStructure patientData={patientToDisplay} />
      ) : (
        <div>loading...</div>
      )}</>
    }
    </>
  );
};

export default Home;

function CreatePatient({}) {
  return (
    <button className=" h-[37px] p-2 rounded-lg text-sm flex items-center gap-2 bg-blue-600 text-white">
      Create New Patient <AiOutlinePlus className="text-white" />
    </button>
  );
}
