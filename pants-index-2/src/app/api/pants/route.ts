import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("pants-index-2");

        // Query the pants collection
        const pants = await db
            .collection("pants")
            .find({})
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        // Map fields to camelCase for frontend
        const formattedPants = pants.map((pant) => ({
            _id: pant._id,
            id: pant.ID || "",
            brand: pant.Brand || "Unknown",
            modelName: pant["Model Name"] || "Unnamed",
            type: pant.Type || "",
            listedSize: pant["Listed Size"] || "",
            waist: pant.Waist || "",
            inseam: pant.Inseam || "",
            rise: pant.Rise || "",
            thigh: pant.Thigh || "",
            knee: pant.Knee || "",
            legOpening: pant["Leg Opening"] || "",
            price: pant.Price || "$0",
            cover: pant.Cover || "/placeholder.png", // Fallback if Cover is missing
            hover: pant.Hover || "/placeholder.png", // Fallback if Hover is missing
        }));

        return NextResponse.json(formattedPants);
    } catch (error) {
        console.error("Error fetching pants:", error);
        return NextResponse.json(
            { error: "Failed to fetch pants" },
            { status: 500 }
        );
    }
}