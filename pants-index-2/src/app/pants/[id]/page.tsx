
// "use client";

// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";

// interface PantsData {
//   _id: string;
//   modelName: string;
//   brand: string;
//   price: string;
//   details: string;
//   images: string[]; // Array of image URLs
// }

// const PantsDetailsPage = () => {
//   const { id } = useParams(); // Retrieve the dynamic ID from the route
//   const router = useRouter();
//   const [pants, setPants] = useState<PantsData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPantsData = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pants/${id}`, {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch pants data");
//         }

//         const data = await res.json();
//         setPants({
//           _id: data._id,
//           modelName: data.modelName,
//           brand: data.brand,
//           price: data.price,
//           details: data.details || "No additional details available.",
//           images: [data.cover, data.hover],
//         });
//       } catch (error) {
//         console.error(error);
//         setError("Pants not found or failed to load.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPantsData();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   if (!pants) return null; // Guard against null pants data

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 p-8">
//       {/* Left Section: Photo Carousel */}
//       <PhotoCarousel images={pants.images} modelName={pants.modelName} />

//       {/* Right Section: Pants Details */}
//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-4">{pants.modelName}</h1>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Brand:</strong> {pants.brand}
//         </p>
//         <p className="text-gray-900 text-lg mb-2">
//           <strong>Price:</strong> {pants.price}
//         </p>
//         <p className="text-gray-600 text-lg">{pants.details}</p>
//       </div>
//     </div>
//   );
// };

// const PhotoCarousel = ({ images, modelName }: { images: string[]; modelName: string }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative flex justify-center items-center w-full lg:w-1/3 h-96 bg-gray-100 rounded-md overflow-hidden">
//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//       >
//         ←
//       </button>

//       {/* Image */}
//       <img
//         src={images[currentImageIndex]}
//         alt={`${modelName} image ${currentImageIndex + 1}`}
//         className="object-contain w-full h-full"
//       />

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//       >
//         →
//       </button>
//     </div>
//   );
// };

// export default PantsDetailsPage;


"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

interface PantsData {
  _id: string;
  modelName: string;
  brand: string;
  price: string;
  details: string;
  images: string[]; // Array of image URLs
  measurements: {
    waist: string;
    inseam: string;
    rise: string;
    thigh: string;
    knee: string;
    legOpening: string;
  };
}

const PantsDetailsPage = () => {
  const { id } = useParams(); // Retrieve the dynamic ID from the route
  const router = useRouter();
  const [pants, setPants] = useState<PantsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPantsData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pants/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch pants data");
        }

        const data = await res.json();
        setPants({
          _id: data._id,
          modelName: data.modelName,
          brand: data.brand,
          price: data.price,
          details: data.details || "No additional details available.",
          images: [data.cover, data.hover],
          measurements: {
            waist: data.waist || "N/A",
            inseam: data.inseam || "N/A",
            rise: data.rise || "N/A",
            thigh: data.thigh || "N/A",
            knee: data.knee || "N/A",
            legOpening: data.legOpening || "N/A",
          },
        });
      } catch (error) {
        console.error(error);
        setError("Pants not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchPantsData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!pants) return null; // Guard against null pants data

  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-3/4 mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full bg-gray-50 shadow-md rounded-lg p-8">
        {/* Left Section: Photo Carousel */}
        <PhotoCarousel images={pants.images} modelName={pants.modelName} />

        {/* Right Section: Pants Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{pants.modelName}</h1>
          <p className="text-gray-700 text-lg mb-2">
            <strong>Brand:</strong> {pants.brand}
          </p>
          <p className="text-gray-900 text-lg mb-2">
            <strong>Price:</strong> {pants.price}
          </p>
          <p className="text-gray-600 text-lg mb-4">{pants.details}</p>
          <h2 className="text-2xl font-semibold mb-2">Measurements</h2>
          <ul className="text-gray-700 text-lg space-y-2">
            <li><strong>Waist:</strong> {pants.measurements.waist}</li>
            <li><strong>Inseam:</strong> {pants.measurements.inseam}</li>
            <li><strong>Rise:</strong> {pants.measurements.rise}</li>
            <li><strong>Thigh:</strong> {pants.measurements.thigh}</li>
            <li><strong>Knee:</strong> {pants.measurements.knee}</li>
            <li><strong>Leg Opening:</strong> {pants.measurements.legOpening}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PhotoCarousel = ({ images, modelName }: { images: string[]; modelName: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex justify-center items-center w-full lg:w-1/2 aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ←
      </button>

      {/* Image */}
      <img
        src={images[currentImageIndex]}
        alt={`${modelName} image ${currentImageIndex + 1}`}
        className="object-contain w-full h-full"
      />

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        →
      </button>
    </div>
  );
};



export default PantsDetailsPage;
