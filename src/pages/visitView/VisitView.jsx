import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

//compoent
import Modal from "../../generalComponents/modal/Modal";
import TableStructure from "../../components/table/TableStructure";
import { VisitData } from "../../hooks/Visit";
import { CreateButton } from "../dashboard/Dashboard";
import { Goback } from "../../components/landingPage/buttons/Goback/Goback";

const VisitView = () => {
  const { VisitView, deleteVisit } = useContext(VisitData);
  const { state } = useLocation();
  const {
    name,
    age,
    phonNumber,
    natureOfWorking,
    designation,
    timeOfVisit,
    id: pateintId,
  } = state;

  const [visit, setVisit] = useState([]);
  const patientHeader = [
    "reason For Visit",
    "prescribed Medications",
    "notes",
    "time Of Visit",
  ];

  //pateint table header
  const pateintDetailHeader = [
    "name",
    "age",
    "phone Number",
    "gender",
    "nature Of Working",
    "designation",
    "time Of Visit",
  ];

  const handeldeleteVisit = (visit) => {
    deleteVisit(state.id, visit.visitId);
  };
  useEffect(() => {
    const fetchVisitData = async () => {
      try {
        const visitData = await VisitView(state.id);
        setVisit(visitData);
      } catch (error) {
        // Handle any error that might occur during data fetching
        console.error(error);
      }
    };

    fetchVisitData();
  }, []);
  return (
    <>
      <div className="px-2 content">
        <div className="flex items-center justify-between capitalize cursor-pointer mt-9">
          <Goback />
          <h1 className="text-lg font-semibold leading-3 lg:text-2xl ">
            {name}
          </h1>
          <div className="flex gap-7">Age {age}</div>
        </div>

        <div className="pb-10 my-3 capitalize border-b-2 cursor-pointer">
          <h6 className="text-lg font-light">{natureOfWorking}</h6>
          <h5 className="my-2 text-gray-500">{designation}</h5>
          <h5 className="my-2 text-sm text-gray-500">
            <span className="text-orange-400"> Last Visit: </span> {timeOfVisit}
            <Modal
              ButtonTitle={"Detail View"}
              ButtonStyle={
                "w-32 rounded-lg bg-orange-400 py-1.5 font-medium text-white hover:shadow-md text-sm block my-2"
              }
              ViewComponent={(props) => (
                <PatientDetail
                  {...props}
                  patientData={state}
                  header={pateintDetailHeader}
                />
              )}
            />
          </h5>
        </div>

        <div className="flex items-center justify-between px-2 content">
          <h1 className="text-2xl font-semibold max-sm:text-lg">Past Visit</h1>
          <Link to={`/visit/${pateintId}`}>
            <CreateButton title={"create New Visit"} />
          </Link>
        </div>
        {/* //table view  */}
        {visit && (
          <>
            <TableStructure
              Header={patientHeader}
              patientData={visit}
              TableDataView={TableDataView}
              editNavigationLink={`/visit/${pateintId}`}
              deleteData={handeldeleteVisit}
            />
          </>
        )}
      </div>
    </>
  );
};

export default VisitView;

//passing this component as a prop in tableStructure for dynamic rendering
const TableDataView = ({ patientDataValue }) => {
  return (
    <>
      {patientDataValue ? (
        <div className="text-sm">
          {patientDataValue.slice(0, 10)}
          <Modal
            ButtonTitle={"...read more"}
            ViewComponent={(props) => (
              <ViewVisit {...props} patientDataValue={patientDataValue} />
            )}
          />
        </div>
      ) : (
        "-"
      )}
    </>
  );
};

const ViewVisit = ({ patientDataValue }) => (
  <>
    {/* <h5 className="mt-2 font-semibold capitalize">Cheif Complatint</h5> */}
    <p className="py-2 border-b">
      {patientDataValue || "No dat is present Here."}
    </p>
  </>
);

const PatientDetail = ({ patientData, header }) => (
  <>
    {header.map((headerItem, index) => {
      const patientDataTitle = headerItem.split(" ").join("");
      const patientDataValue = patientData[patientDataTitle];
      return (
        <div key={index}>
          <h5 className="mt-2 font-semibold capitalize">{headerItem}</h5>
          <p className="py-2 border-b">
            {patientDataValue || "No data is present Here."}
          </p>
        </div>
      );
    })}
  </>
);
