import React from 'react';

const MedicineTable = ({ medicines }) => {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border">Medicine Name</th>
          <th className="px-4 py-2 border">Quantity</th>
          <th className="px-4 py-2 border">Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((med, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border">{med.name}</td>
            <td className="px-4 py-2 border">{med.quantity}</td>
            <td className="px-4 py-2 border">{med.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicineTable;

