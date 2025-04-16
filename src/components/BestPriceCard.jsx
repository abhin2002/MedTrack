import React from 'react';

const PriceComparisonCard = ({ medicineName }) => {
  const mockStores = [
    {
      id: '1',
      name: 'HealthPlus Pharmacy',
      location: 'Main Street',
      image: 'med1.jpg',
      stock: [
        { name: 'Paracetamol 500mg', rate: 12, quantity: 40 },
        { name: 'Amoxicillin 250mg', rate: 25, quantity: 20 },
        { name: 'Cetirizine 10mg', rate: 10, quantity: 50 },
        { name: 'Metformin 500mg', rate: 18, quantity: 35 },
      ],
    },
    {
      id: '2',
      name: 'CityMed Store',
      location: 'Market Road',
      image: 'med2.jpg',
      stock: [
        { name: 'Paracetamol 500mg', rate: 10, quantity: 25 },
        { name: 'Ibuprofen 400mg', rate: 22, quantity: 30 },
        { name: 'Metformin 500mg', rate: 16, quantity: 20 },
        { name: 'Azithromycin 500mg', rate: 35, quantity: 15 },
      ],
    },
    {
      id: '3',
      name: 'GreenLife Drugs',
      location: 'North Avenue',
      image: 'med3.jpg',
      stock: [
        { name: 'Cetirizine 10mg', rate: 11, quantity: 60 },
        { name: 'Amoxicillin 250mg', rate: 27, quantity: 25 },
        { name: 'Vitamin C 500mg', rate: 14, quantity: 100 },
        { name: 'Paracetamol 500mg', rate: 11, quantity: 30 },
      ],
    },
  ];

  const allMatches = [];

  mockStores.forEach((store) => {
    store.stock.forEach((med) => {
      if (med.name.toLowerCase().includes(medicineName.toLowerCase())) {
        allMatches.push({
          ...med,
          storeName: store.name,
          location: store.location,
        });
      }
    });
  });

  if (allMatches.length === 0) return null;

  // Sort by price
  const sorted = allMatches.sort((a, b) => a.rate - b.rate);

  return (
    <div className="bg-white border border-green-500 p-4 rounded mb-6 shadow">
      <h2 className="text-lg font-semibold text-green-700 mb-4">Price Comparison for “{sorted[0].name}”</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-green-100 text-left">
            <tr>
              <th className="px-3 py-2">Store</th>
              <th className="px-3 py-2">Location</th>
              <th className="px-3 py-2">Rate (₹)</th>
              <th className="px-3 py-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((item, i) => (
              <tr
                key={i}
                className={i === 0 ? 'bg-green-50 font-semibold' : ''}
              >
                <td className="px-3 py-2">{item.storeName}</td>
                <td className="px-3 py-2">{item.location}</td>
                <td className="px-3 py-2">₹{item.rate}</td>
                <td className="px-3 py-2">{item.quantity} pcs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceComparisonCard;
