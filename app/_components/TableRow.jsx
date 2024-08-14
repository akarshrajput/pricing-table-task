import React from "react";

const TableRow = ({ api, model, price }) => (
  <tr className="border-t border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
    <td className="py-3 px-4 text-gray-800 dark:text-gray-300">{api}</td>
    <td className="py-3 px-4 text-gray-800 dark:text-gray-300">{model}</td>
    <td className="py-3 px-4 text-gray-800 dark:text-gray-300">{price}</td>
  </tr>
);

export default TableRow;
