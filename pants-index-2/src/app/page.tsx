import PantsCard from "@/app/components/PantsCard";

interface Pants {
  _id: string;
  id: string;
  brand: string;
  modelName: string;
  type: string;
  listedSize: string;
  waist: string;
  inseam: string;
  rise: string;
  thigh: string;
  knee: string;
  legOpening: string;
  price: string;
  cover: string;
  hover: string;
}

const HomePage = async () => {
  // Fetch data from the API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pants`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pants data");
  }

  const pantsData: Pants[] = await res.json();

  return (
    <main id="content" className="m-10 p-8 pt-24">
      <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {pantsData.map((pants) => (
          <PantsCard
            key={pants._id}
            _id={pants._id}
            modelName={pants.modelName} // Maps "Model Name" from MongoDB
            brand={pants.brand} // Maps "Brand" from MongoDB
            price={pants.price} // Maps "Price" from MongoDB
            cover={pants.cover} // Maps "Cover" from MongoDB
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
