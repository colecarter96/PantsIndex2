// import PantsCard from '@/components/PantsCard';

// const HomePage = () => {
//   const pantsData = [
//     {
//       id: 'dickies874',
//       name: '874',
//       brand: 'Dickies',
//       price: '$30',
//       coverImg: 'https://www.plaskateboarding.com/cdn/shop/products/DICKIES_ORIGINAL_874_WORK_PANTS_-_DARK_NAVY.jpg?v=1560289053',
//     },
//     {
//       id: 'thirdCut',
//       name: 'Third Cut',
//       brand: 'Our Legacy',
//       price: '€330',
//       coverImg: 'https://shop-us.doverstreetmarket.com/cdn/shop/files/THIRD_CUT_M4205TDD.jpg?v=1706214073',
//     },
//     {
//       id: 'landonPant',
//       name: 'Landon Pant',
//       brand: 'Carhartt WIP',
//       price: '$120',
//       coverImg: 'https://us.carhartt-wip.com/cdn/shop/files/I030468_89_60-ST-02_800x.jpg?v=1715115030',
//     },
//     {
//       id: 'dickies874',
//       name: '874',
//       brand: 'Dickies',
//       price: '$30',
//       coverImg: 'https://www.plaskateboarding.com/cdn/shop/products/DICKIES_ORIGINAL_874_WORK_PANTS_-_DARK_NAVY.jpg?v=1560289053',
//     },
//     {
//       id: 'thirdCut',
//       name: 'Third Cut',
//       brand: 'Our Legacy',
//       price: '€330',
//       coverImg: 'https://shop-us.doverstreetmarket.com/cdn/shop/files/THIRD_CUT_M4205TDD.jpg?v=1706214073',
//     },
//     {
//       id: 'landonPant',
//       name: 'Landon Pant',
//       brand: 'Carhartt WIP',
//       price: '$120',
//       coverImg: 'https://us.carhartt-wip.com/cdn/shop/files/I030468_89_60-ST-02_800x.jpg?v=1715115030',
//     },
//     // Add more pants data here...
//   ];

//   return (
//     <main id="content" className="ml-4 p-8 pt-18">
//       <div className="grid gap-6 xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//         {pantsData.map((pants) => (
//           <PantsCard key={pants.id} {...pants} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default HomePage;

// 'use client';

// import PantsCard from '@/components/PantsCard';
// import { useEffect, useState } from 'react';

// export interface Pants {
//   id: string;
//   name: string;
//   brand: string;
//   price: string;
//   rise: number;
//   thigh: number;
//   knee: number;
//   coverImg: string;
// }

// 'use client';

// import PantsCard from '@/components/PantsCard';
// import { useEffect, useState } from 'react';
// // import { Pants } from '@/types'; // Import the Pants interface

// export interface Pants {
//   id: string;
//   name: string;
//   brand: string;
//   price: string;
//   rise: number;
//   thigh: number;
//   knee: number;
//   coverImg: string;
// }

// const HomePage = () => {
//   const [pantsData, setPantsData] = useState<Pants[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/pants');
//         if (!response.ok) throw new Error('Failed to fetch pants data');
//         const data: Pants[] = await response.json();
//         setPantsData(data);
//       } catch (error) {
//         console.error('Error fetching pants data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <main id="content" className="p-8 pt-18">
//       <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//         {pantsData.map((pants) => (
//           <PantsCard key={pants.id} {...pants} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default HomePage;

'use client';

import { useEffect, useState } from 'react';
import PantsCard from '@/components/PantsCard';

interface Pants {
  _id: string;
  name: string;
  brand: string;
  price: string;
  waist: string;
  inseam: string;
  rise: string;
  thigh: string;
  knee: string;
  hem: string;
  coverImg: string;
  hoverImg: string;
}

const HomePage = () => {
  const [pantsData, setPantsData] = useState<Pants[]>([]); // Use the defined type here
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPantsData = async () => {
      try {
        const response = await fetch('/api/pants');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Pants[] = await response.json(); // Tell TypeScript the expected structure
        setPantsData(data);
      } catch (err) {
        console.error('Error fetching pants data:', err);
        setError('Failed to fetch pants data');
      }
    };

    fetchPantsData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pantsData.length) {
    return <div>Loading...</div>;
  }

  return (
    <main id="content" className="p-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pantsData.map((pants) => (
          <PantsCard key={pants._id} {...pants} /> // Spread type works because we enforce Pants type
        ))}
      </div>
    </main>
  );
};

export default HomePage;