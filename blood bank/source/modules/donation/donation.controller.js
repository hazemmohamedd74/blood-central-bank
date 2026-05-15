import donationModel from "../../../DB/models/donation.model.js";
import donorModel from "../../../DB/models/donor.model.js";
import bloodStockModel from "../../../DB/models/bloodStock.model.js";
import { asyncHandler } from "../../services/asyncHandlers.js";
import mongoose from "mongoose";
import moment from "moment";

export const registerDonation = asyncHandler(async (req, res) => {
    const { donorId, donationDate, bloodType, quantity, virusTestResult } = req.body;

    // ✅ Check if donorId is provided
    if (!donorId) {
        return res.status(400).json({ message: "donorId is required" });
    }

    // ✅ Check if donorId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(donorId)) {
        return res.status(400).json({ message: "Invalid donor ID format" });
    }

    // ✅ Check if donor exists in the database
    const donor = await donorModel.findById(donorId);
    if (!donor) {
        return res.status(404).json({ message: "Donor not found" });
    }

    // ✅ Ensure all required fields are provided
    if (!donationDate || !bloodType || !quantity || !virusTestResult) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // ✅ Create a new donation entry
    const newDonation = new donationModel({
        donorId,
        donationDate,
        bloodType,
        quantity,
        virusTestResult
    });

    await newDonation.save();
    res.status(201).json({ message: "Donation recorded successfully", donation: newDonation });
});
