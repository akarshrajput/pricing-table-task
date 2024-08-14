import React from "react";
import TableRow from "./TableRow";

const PricingTable = () => (
  <table className="w-full my-2 text-left text-sm md:text-md lg:text-lg bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-purple-600 dark:bg-purple-800 text-white">
        <th className="py-3 px-4">API</th>
        <th className="py-3 px-4">Model</th>
        <th className="py-3 px-4">Price per 1K Tokens</th>
      </tr>
    </thead>
    <tbody>
      <TableRow api="OpenAI" model="GPT-3.5" price="$0.002" />
      <TableRow api="OpenAI" model="GPT-4" price="$0.03" />
      <TableRow api="Together AI" model="Llama-2-70b" price="$0.0008" />
      <TableRow api="Together AI" model="Llama-2-13b" price="$0.0006" />
    </tbody>
  </table>
);

export default PricingTable;
