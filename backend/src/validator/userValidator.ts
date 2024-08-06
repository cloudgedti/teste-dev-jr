import { body } from "express-validator";

const userValidator = [
   body("fullName").isString().notEmpty().withMessage("fullName is required"),
   body("email").isString().notEmpty().withMessage("Email is required"),
];

export { userValidator };
