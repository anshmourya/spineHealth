//icons
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "../../generalComponents/modal/Modal";

const TableStructure = ({ patientData, deleteData, Header, TableDataView }) => {
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
                      data-label={header}
                      className="text-right capitalize lg:text-left"
                      key={index}
                    >
                      <TableDataView
                        patientDataValue={patientDataValue}
                        state={pateintData}
                      />
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
