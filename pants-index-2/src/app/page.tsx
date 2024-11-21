import PantsCard from '@/components/PantsCard';

const HomePage = () => {
  const pantsData = [
    {
      id: 'dickies874',
      name: '874',
      brand: 'Dickies',
      price: '$30',
      coverImg: 'https://www.plaskateboarding.com/cdn/shop/products/DICKIES_ORIGINAL_874_WORK_PANTS_-_DARK_NAVY.jpg?v=1560289053',
    },
    {
      id: 'thirdCut',
      name: 'Third Cut',
      brand: 'Our Legacy',
      price: '€330',
      coverImg: 'https://shop-us.doverstreetmarket.com/cdn/shop/files/THIRD_CUT_M4205TDD.jpg?v=1706214073',
    },
    {
      id: 'landonPant',
      name: 'Landon Pant',
      brand: 'Carhartt WIP',
      price: '$120',
      coverImg: 'https://us.carhartt-wip.com/cdn/shop/files/I030468_89_60-ST-02_800x.jpg?v=1715115030',
    },
    {
      id: 'dickies874',
      name: '874',
      brand: 'Dickies',
      price: '$30',
      coverImg: 'https://www.plaskateboarding.com/cdn/shop/products/DICKIES_ORIGINAL_874_WORK_PANTS_-_DARK_NAVY.jpg?v=1560289053',
    },
    {
      id: 'thirdCut',
      name: 'Third Cut',
      brand: 'Our Legacy',
      price: '€330',
      coverImg: 'https://shop-us.doverstreetmarket.com/cdn/shop/files/THIRD_CUT_M4205TDD.jpg?v=1706214073',
    },
    {
      id: 'landonPant',
      name: 'Landon Pant',
      brand: 'Carhartt WIP',
      price: '$120',
      coverImg: 'https://us.carhartt-wip.com/cdn/shop/files/I030468_89_60-ST-02_800x.jpg?v=1715115030',
    },
    // Add more pants data here...
  ];

  return (
    <main id="content" className="ml-4 p-8 pt-18">
      <div className="grid gap-6 xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {pantsData.map((pants) => (
          <PantsCard key={pants.id} {...pants} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;


// "use client";

// import React from "react";
// import PantsCard from "@/components/PantsCard";

// const HomePage = async () => {
//   const res = await fetch("/api/pants");
//   const pantsData = await res.json();

//   return (
//     <main id="content" className="p-8 pt-18">
//       <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//         {pantsData.map((pants: any) => (
//           <PantsCard key={pants._id} {...pants} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default HomePage;