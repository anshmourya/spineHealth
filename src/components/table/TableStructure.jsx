import { MdOutlineDeleteOutline } from "react-icons/md";

const TableStructure = ({ patientData }) => {
  const patientHeader = [
    "Name",
    "Age",
    "Phone",
    // "Gender",
    "Date Of Visit",
    "Nature of Disease",
    "Delete",
  ];
  return (
    <>
      <div className="container m-auto">
        <table>
          <thead className="border-b ">
            <tr>
              {patientHeader.map((head, index) => (
                <th key={index} scope="col">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patientData.map(
              ({ id, name, age, PhoneNumber, timeOfVisit, mainProblem }) => (
                <tr key={id} className="font-normal even:bg-slate-100">
                  <td className="capitalize" data-label="Name">
                    {name}
                  </td>
                  <td data-label="Age">{age}</td>
                  <td data-label="Phone Number">{PhoneNumber}</td>
                  {/* <td data-label="Gender">{gender}</td> */}
                  <td data-label="Date of Vist">{timeOfVisit.split(" ")[0]}</td>
                  <td data-label="Nature of Disease">{mainProblem}</td>
                  <td
                    data-label="Delete"
                    className=" flex justify-between items-center lg:justify-center"
                  >
                    <MdOutlineDeleteOutline className="text-lg cursor-pointer " />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStructure;
