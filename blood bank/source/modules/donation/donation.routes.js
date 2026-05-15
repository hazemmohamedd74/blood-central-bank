import express from "express";
import { registerDonation } from "./donation.controller.js";
import { donationValidationRules } from "../../modules/donation/donation.validation.js";
import { validateRequest } from "../../services/validationRequest.js";

const router = express.Router();

router.post("/create",donationValidationRules,validateRequest, registerDonation);

export default router;

