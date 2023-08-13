//icons
import { MdOutlineDeleteOutline } from "react-icons/md";

const TableStructure = ({ patientData, deleteData, Header }) => {
  return (
    <>
      <div className="container m-auto">
        <table>
          <thead className="border-b ">
            <tr>
              {Header.map((head, index) => (
                <th key={index} scope="col" className="text-left capitalize">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patientData.map((pateintData) => (
              <tr
                key={pateintData.id}
                className="font-normal even:bg-slate-100"
              >
                {Header.map((header, index) => {
                  const patientDataTitle = header.split(" ").join("");
                  const patientDataValue = pateintData[patientDataTitle];

                  return (
                    <td
                      key={index}
                      data-label={header}
                      className="text-left capitalize"
                    >
                      {patientDataValue !== undefined ? patientDataValue : "-"}
                    </td>
                  );
                })}
                <td
                  data-label="Delete"
                  className="flex items-center justify-between lg:justify-center"
                  onClick={() => deleteData(pateintData.id)}
                >
                  <MdOutlineDeleteOutline className="text-lg cursor-pointer " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStructure;
