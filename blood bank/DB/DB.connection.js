import mongoose from "mongoose";

export const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://hazem:hazem1907@cluster0.n1b3sux.mongodb.net/blood_bank?retryWrites=true&w=majority")
        .then(() => {
            console.log("✅ DB Connected Successfully!");
        })
        .catch((err) => {
            console.log("❌ DB Connection Failed:", err);
        });
};
