import { NextFunction, Request, Response } from "express";
import { body, validationResult, param } from "express-validator";

const userValidationRules = () => {
  return [
    param("id").isString().trim().isLength({min:5}),
  ];
};

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: { [x: string]: any }[] = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export { validate, userValidationRules };
