import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MedicineTable from '../components/MedicineTable';

// Mock data (same as Home.js)
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

const StoreDetails = () => {
  const { id } = useParams();
  const store = mockStores.find((store) => store.id === id);
  const medicines = store ? store.stock : [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{store?.name} - Available Medicines</h1>
      {store ? (
        <>
          <MedicineTable medicines={medicines} />
          <p className="text-gray-600 mt-2">Location: {store.location}</p>
        </>
      ) : (
        <p className="text-red-500">Store not found.</p>
      )}
      <Link to="/" className="text-blue-500 mt-6 inline-block">
        ← Back to Store List
      </Link>
    </div>
  );
};

export default StoreDetails;
