import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const { id } = params; // Extract the ID from the route params

    try {
        const client = await clientPromise;
        const db = client.db("pants-index-2");

        // Query for a single pants item by ID
        const pant = await db.collection("pants").findOne({ _id: new ObjectId(id) });

        if (!pant) {
            return NextResponse.json({ error: "Pants not found" }, { status: 404 });
        }

        // Map fields to camelCase for frontend
        const formattedPant = {
            _id: pant._id.toString(),
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
        };

        return NextResponse.json(formattedPant);
    } catch (error) {
        console.error("Error fetching pant:", error);
        return NextResponse.json({ error: "Failed to fetch pants" }, { status: 500 });
    }
}
