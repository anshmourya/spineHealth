import React from "react";

const TableStructure2 = ({ data, columns }) => {
  return (
    <table>
      <thead className="border-b ">
        <tr>
          {columns.map((head, index) => (
            <th key={index} scope="col" className="text-left capitalize">
              {head.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="font-normal even:bg-slate-100">
            {columns.map((column, index) => (
              <td
                key={index}
                data-label={column.header}
                className="text-right capitalize lg:text-left"
              >
                {row[column.field] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableStructure2;
