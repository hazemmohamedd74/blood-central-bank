import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    donorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Donor' },
    bloodType: { type: String, required: true },
    quantity: { type: Number, required: true },
    virusTestResult: { type: String, required: true }
  },
   { timestamps: true });

export default mongoose.model("Donation", donationSchema);
