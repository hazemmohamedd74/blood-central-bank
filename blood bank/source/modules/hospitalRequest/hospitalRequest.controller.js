import hospitalRequestModel from "../../../DB/models/hospitalRequest.model.js";
import bloodStockModel from "../../../DB/models/bloodStock.model.js";
import { asyncHandler } from "../../services/asyncHandlers.js";

// Helper Function to Sort Requests by Urgency
const urgencyPriority = {
    "Immediate": 1,
    "Urgent": 2,
    "Normal": 3
};

// ✅ **Handle Hospital Blood Requests**

export const requestBlood = asyncHandler(async (req, res) => {
    const { bloodType, city, patientStatus, quantity } = req.body;

    // Validate input
    if (!bloodType || !city || !patientStatus || !quantity) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    console.log(`Searching for blood stock with: { bloodType: '${bloodType}', city: '${city}' }`);

    // Find the closest matching blood stock
    const bloodStock = await bloodStockModel.findOne({
        bloodType,
        city,
        quantity: { $gte: quantity } // Ensure enough quantity is available
    });

    if (!bloodStock) {
        console.log("No matching stock found!");
        return res.status(404).json({ message: "No matching blood stock available!" });
    }

    // Deduct the requested blood quantity
    bloodStock.quantity -= quantity;
    
    // If the quantity is 0, remove the stock entry
    if (bloodStock.quantity <= 0) {
        await bloodStockModel.deleteOne({ _id: bloodStock._id });
    } else {
        await bloodStock.save();
    }

    return res.status(200).json({
        message: "Blood request fulfilled successfully!",
        remainingStock: bloodStock.quantity
    });
});

