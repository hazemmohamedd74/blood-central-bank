import Donor from "../../../DB/models/donor.model.js";
import { sendRejectionEmail } from "../../services/emailService.js";

export const registerDonor = async (req, res) => {
    try {
        const { nationalID, email, name, city, bloodType, virusTestResult, lastDonationDate } = req.body;
        let rejectionReasons = [];

        // Check if a donor with the same national ID already exists
        const existingDonor = await Donor.findOne({ nationalID });
        if (existingDonor) {
            return res.status(400).json({ message: "Donor with this National ID already exists." });
        }
        const existingEmail = await Donor.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists. Please use a different email." });
        }

        // Convert lastDonationDate to Date object
        const lastDonation = new Date(lastDonationDate);
        const today = new Date();
        const monthDiff = (today - lastDonation) / (1000 * 60 * 60 * 24 * 30);

        // Check for virus test and last donation date
        if (virusTestResult === "positive") {
            return res.status(400).json({ message: "Donation rejected: Virus test is positive." });
        } 
        if (monthDiff < 3) {
            return res.status(400).json({ message: "Donation rejected: Last donation was less than 3 months ago." });
        }
        if (rejectionReasons.length > 0) {
            // ❌ Donation is rejected
            const reasonText = rejectionReasons.join(" ");
            await sendRejectionEmail(email, name, reasonText); // ✅ Send rejection email
            return res.status(400).json({ message: "Donation rejected", reasons: rejectionReasons });
        }
        // Create and save new donor
        const newDonor = new Donor({ nationalID, email, name, city, bloodType, virusTestResult, lastDonationDate });
        await newDonor.save();

        res.status(201).json({ message: `Donor ${name} registered successfully! Blood Type: ${bloodType} added to stock.` });
    
    } catch (error) {
        console.error("Error registering donor:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

