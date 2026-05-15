import cors from "cors";
import express from "express";
import { dbConnection } from "../DB/DB.connection.js";
import donorRoutes from "../source/modules/donor/donor.routes.js";
import DonationRoutes from "../source/modules/donation/donation.routes.js";
import HospitalRequestRoutes from "../source/modules/hospitalRequest/hospitalRequest.routes.js";

const port = process.env.PORT || 8000;

export const initApp = (app) => {
    app.use(cors({
        origin: "*",  // Allow all origins (for now)
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"]
    }));
    

    app.use(express.json());
    app.use("/donors", donorRoutes);
    app.use("/donations", DonationRoutes);
    app.use("/hospital-requests", HospitalRequestRoutes);
    app.use((err, req, res, next) => {
        console.error(" Error:", err);
        res.status(err.status || 500).json({
            message: err.message || "Internal Server Error",
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
        });
    });
    

    dbConnection();
    app.listen(port, () => console.log(`Server running on port ${port}`));
};
