// import PantsCard from "@/app/components/PantsCard";

// interface Pants {
//   _id: string;
//   id: string;
//   brand: string;
//   modelName: string;
//   type: string;
//   listedSize: string;
//   waist: string;
//   inseam: string;
//   rise: string;
//   thigh: string;
//   knee: string;
//   legOpening: string;
//   price: string;
//   cover: string;
//   hover: string;
// }

// const HomePage = async () => {
//   // Fetch data from the API
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pants`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch pants data");
//   }

//   const pantsData: Pants[] = await res.json();

//   return (
//     <main id="content" className="ml-4 p-8 pt-18">
//       <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//         {pantsData.map((pants) => (
//           <PantsCard
//             key={pants._id}
//             _id={pants._id}
//             modelName={pants.modelName} // Maps "Model Name" from MongoDB
//             brand={pants.brand} // Maps "Brand" from MongoDB
//             price={pants.price} // Maps "Price" from MongoDB
//             cover={pants.cover} // Maps "Cover" from MongoDB
//           />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default HomePage;





"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import PantsCard from "@/app/components/PantsCard";
import FilterPanel from "@/app/components/FilterPanel";

interface Pants {
  _id: string;
  brand: string;
  modelName: string;
  legOpening: string;
  thigh: string;
  rise: string;
  price: string;
  cover: string;
}

const HomePage = () => {
  const [pantsData, setPantsData] = useState<Pants[]>([]);
  const [filteredPants, setFilteredPants] = useState<Pants[]>([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [filters, setFilters] = useState({
    legOpening: [5, 20],
    thigh: [5, 20],
    rise: [8, 20],
  });

  const toggleFilterPanel = () => {
    setShowFilterPanel((prev) => !prev);
  };

  useEffect(() => {
    const fetchPants = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pants`, {
          cache: "no-store",
        });
        const data = await res.json();
        setPantsData(data);
        setFilteredPants(data);
      } catch (err) {
        console.error("Failed to fetch pants data:", err);
      }
    };

    fetchPants();
  }, []);

  useEffect(() => {
    const filtered = pantsData.filter((pants) => {
      const legOpening = parseFloat(pants.legOpening);
      const thigh = parseFloat(pants.thigh);
      const rise = parseFloat(pants.rise);

      return (
        legOpening >= filters.legOpening[0] &&
        legOpening <= filters.legOpening[1] &&
        thigh >= filters.thigh[0] &&
        thigh <= filters.thigh[1] &&
        rise >= filters.rise[0] &&
        rise <= filters.rise[1]
      );
    });

    setFilteredPants(filtered);
  }, [filters, pantsData]);

  return (
    <>
      <Header toggleFilterPanel={toggleFilterPanel} />
      <main className="p-8">
        {showFilterPanel && (
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            closePanel={() => setShowFilterPanel(false)}
          />
        )}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPants.map((pants) => (
            <PantsCard
              key={pants._id}
              modelName={pants.modelName}
              brand={pants.brand}
              price={pants.price}
              cover={pants.cover}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
