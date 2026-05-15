import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
    nationalID: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{14}$/, // Ensures exactly 14 digits
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+@.+\..+/, // Basic email format validation
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        enum: ["cairo", "alexandria", "giza", "mansoura", "matrouh", "portsaid", "sohag", "sharm elshiekh", "assuit", "damnhour"],
    },
    bloodType: {
        type: String,
        required: true,
        enum: ["O", "A", "B", "AB"],
    },
    virusTestResult: {
        type: String,
        required: true,
        enum: ["negative", "positive"],
    },
    lastDonationDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

const Donor = mongoose.model("Donor", DonorSchema);
export default Donor;
