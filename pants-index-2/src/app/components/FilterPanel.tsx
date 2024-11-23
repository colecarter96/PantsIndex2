// import React from "react";

// // Define the type for filters
// type FilterType = {
//   rise: [number, number];
//   thigh: [number, number];
//   knee: [number, number];
// };

// // Update FilterPanelProps to use the type
// interface FilterPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
//   filters: FilterType; // Use the FilterType here
//   setFilters: (newFilters: FilterType) => void;
// }

// const FilterPanel: React.FC<FilterPanelProps> = ({
//   isOpen,
//   onClose,
//   filters,
//   setFilters,
// }) => {
//   // Slider change handler
//   const handleSliderChange = (
//     type: keyof FilterType, // Restrict to valid keys
//     index: number,
//     value: number
//   ) => {
//     setFilters({
//       ...filters,
//       [type]: filters[type].map((v, i) => (i === index ? value : v)) as [
//         number,
//         number
//       ],
//     });
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       } transition-transform duration-300`}
//     >
//       <div className="flex justify-between items-center p-4 border-b border-gray-200">
//         <h2 className="text-xl font-bold">Filters</h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
//           Close
//         </button>
//       </div>
//       <div className="p-4 space-y-6">
//         {(["rise", "thigh", "knee"] as (keyof FilterType)[]).map((filterType) => (
//           <div key={filterType}>
//             <h3 className="text-gray-700 font-semibold capitalize">
//               {filterType}
//             </h3>
//             <div className="flex justify-between text-sm text-gray-500">
//               <span>{filters[filterType][0]}</span>
//               <span>{filters[filterType][1]}</span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="20"
//               step="0.1"
//               value={filters[filterType][0]}
//               onChange={(e) =>
//                 handleSliderChange(filterType, 0, Number(e.target.value))
//               }
//               className="w-full"
//             />
//             <input
//               type="range"
//               min="0"
//               max="20"
//               step="0.1"
//               value={filters[filterType][1]}
//               onChange={(e) =>
//                 handleSliderChange(filterType, 1, Number(e.target.value))
//               }
//               className="w-full"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterPanel;


import React from 'react';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    rise: [number, number];
    thigh: [number, number];
    knee: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      rise: [number, number];
      thigh: [number, number];
      knee: [number, number];
    }>
  >;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`} // Increased z-index
    >
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-gray-600 text-lg"
      >
        ✕
      </button>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        <div>
          <label className="block font-medium mb-2">Rise</label>
          <input
            type="range"
            min="8"
            max="15"
            value={filters.rise[0]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                rise: [Number(e.target.value), prev.rise[1]],
              }))
            }
            className="w-full"
          />
          <input
            type="range"
            min="8"
            max="15"
            value={filters.rise[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                rise: [prev.rise[0], Number(e.target.value)],
              }))
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            {filters.rise[0]} - {filters.rise[1]}
          </p>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-2">Thigh</label>
          <input
            type="range"
            min="10"
            max="18"
            value={filters.thigh[0]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                thigh: [Number(e.target.value), prev.thigh[1]],
              }))
            }
            className="w-full"
          />
          <input
            type="range"
            min="10"
            max="18"
            value={filters.thigh[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                thigh: [prev.thigh[0], Number(e.target.value)],
              }))
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            {filters.thigh[0]} - {filters.thigh[1]}
          </p>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-2">Knee</label>
          <input
            type="range"
            min="8"
            max="15"
            value={filters.knee[0]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                knee: [Number(e.target.value), prev.knee[1]],
              }))
            }
            className="w-full"
          />
          <input
            type="range"
            min="8"
            max="15"
            value={filters.knee[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                knee: [prev.knee[0], Number(e.target.value)],
              }))
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            {filters.knee[0]} - {filters.knee[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
