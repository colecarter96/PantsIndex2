"use client";

import { useParams } from "next/navigation";

interface PantsData {
  name: string;
  brand: string;
  price: string;
  details: string;
  images: string[]; // Explicitly define images as an array of strings
}

const PantsDetailsPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure id is treated as a string

  // Define pantsData with explicit types
  const pantsData: Record<string, PantsData> = {
    dickies874: {
      name: "874",
      brand: "Dickies",
      price: "$30",
      details: "Classic work pants with a relaxed fit.",
      images: ["/images/dickies874.png", "/images/dickies874Hover.png"],
    },
    thirdCut: {
      name: "Third Cut",
      brand: "Our Legacy",
      price: "€330",
      details: "Relaxed-fit jeans with a unique vintage wash.",
      images: ["https://shop-us.doverstreetmarket.com/products/our-legacy-third-cut-denimpri-m4205tdd-ss24", "/images/ourLegacyThirdCutHover.jpg"],
    },
    // Add more pants entries here...
  };

  // Find the pants entry using the id
  const pants = pantsData[id as string]; // Ensure id is cast as a string

  // Handle case where id is invalid
  if (!pants) return <div>Pants not found</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{pants.name}</h1>
      <p>{pants.brand}</p>
      <p>
        <strong>{pants.price}</strong>
      </p>
      <p>{pants.details}</p>
      <div>
        {/* Map over images and explicitly type src and index */}
        {pants.images.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`${pants.name} image ${index + 1}`}
            className="my-4"
          />
        ))}
      </div>
    </div>
  );
};

export default PantsDetailsPage;