import { body } from "express-validator";

export const donorValidationRules = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),


  body("bloodType")
    .notEmpty().withMessage("Blood type is required")
    .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).withMessage("Invalid blood type"),

  body("lastDonationDate")
    .optional()
    .isISO8601().withMessage("Invalid date format"),
];
