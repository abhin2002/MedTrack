import React, { useState } from 'react';
import StoreCard from '../components/StoreCard';
import BestPriceCard from '../components/BestPriceCard'; // import the new card

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

const Home = () => {
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredStores = () => {
    if (!search && !locationFilter) return mockStores;

    return mockStores
      .map((store) => {
        const matchesLocation = !locationFilter || store.location === locationFilter;
        const storeNameMatch = store.name.toLowerCase().includes(search.toLowerCase());
        const matchingMedicines = store.stock.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        if (!matchesLocation) return null;

        if (storeNameMatch || matchingMedicines.length > 0) {
          return {
            ...store,
            stock: storeNameMatch ? store.stock : matchingMedicines, // full stock if store matches
          };
        }

        return null;
      })
      .filter(Boolean); // remove nulls
  };

  const isMedicineSearch = () => {
    return (
      search &&
      !mockStores.some((store) =>
        store.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const uniqueLocations = [...new Set(mockStores.map((store) => store.location))];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nearby Medical Stores</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by store or medicine name..."
          className="border px-4 py-2 rounded w-full sm:w-2/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-4 py-2 rounded w-full sm:w-1/3"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Best price card shown only for medicine search */}
      {isMedicineSearch() && <BestPriceCard medicineName={search} />}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredStores().length > 0 ? (
          filteredStores().map((store) => (
            <StoreCard
              key={store.id}
              store={store}
              isMedicineSearch={isMedicineSearch()}
            />
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
