"use client";

import { Range } from "react-range";

interface FilterPanelProps {
  filters: {
    legOpening: [number, number];
    thigh: [number, number];
    rise: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      legOpening: [number, number];
      thigh: [number, number];
      rise: [number, number];
    }>
  >;
  closePanel: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  setFilters,
  closePanel,
}) => {
  const STEP = 0.5;
  const MIN = 4;
  const MAX = 20;

  const handleFilterChange = (
    key: "legOpening" | "thigh" | "rise",
    values: [number, number]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: values }));
  };

  return (
    <div className="fixed inset-y-0 right-0 bg-white shadow-lg p-6 z-50 w-1/3 overflow-y-auto transform transition-transform duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filter Pants</h2>
        <button
          onClick={closePanel}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </div>

      {/* Leg Opening Slider */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">
          Leg Opening: {filters.legOpening[0]} - {filters.legOpening[1]}
        </label>
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={filters.legOpening}
          onChange={(values) => handleFilterChange("legOpening", values)}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-2 bg-gray-300 rounded">
              <div
                className="absolute bg-blue-500 h-2 rounded"
                style={{
                  left: `${((filters.legOpening[0] - MIN) / (MAX - MIN)) * 100}%`,
                  right: `${100 - ((filters.legOpening[1] - MIN) / (MAX - MIN)) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={index}
              className="h-4 w-4 bg-blue-500 rounded-full shadow"
            />
          )}
        />
      </div>

      {/* Add similar sliders for Thigh and Rise */}
    </div>
  );
};

export default FilterPanel;

