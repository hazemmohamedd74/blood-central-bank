import { body } from "express-validator";

export const donationValidationRules = [
  body("donorId").notEmpty().withMessage("donorId is required").isMongoId().withMessage("Invalid donor ID"),
  body("donationDate").notEmpty().withMessage("donationDate is required").isISO8601().withMessage("Invalid date format"),
  body("bloodType").notEmpty().withMessage("bloodType is required"),
  body("quantity").notEmpty().withMessage("quantity is required").isNumeric().withMessage("Quantity must be a number"),
  body("virusTestResult").notEmpty().withMessage("virusTestResult is required")
];
