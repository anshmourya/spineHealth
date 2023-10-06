//icons
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const TableStructure = ({
  patientData,
  deleteData,
  Header,
  TableDataView,
  editNavigationLink,
}) => {
  return (
    <>
      <div className="container m-auto my-10">
        <table>
          <thead className="border-b ">
            <tr>
              {Header.map((head, index) => (
                <th key={index} scope="col" className="text-left capitalize">
                  {head}
                </th>
              ))}
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((pateintData, index) => (
              <tr key={index} className="font-normal even:bg-slate-100">
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

                {/* //edit the data */}

                <td data-label="Edit" className="justify-between max-md:flex">
                  <Link to={editNavigationLink} state={pateintData}>
                    <BiEditAlt className="text-lg cursor-pointer md:m-auto" />
                  </Link>
                </td>
                {/* //delete the data */}
                <td
                  data-label="Delete"
                  className="justify-between max-md:flex"
                  onClick={() => deleteData(pateintData)}
                >
                  <MdOutlineDeleteOutline className="text-lg cursor-pointer md:m-auto" />
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
