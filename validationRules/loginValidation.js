const { body, validationResult } = require('express-validator');

// Validation rules
const loginValidationRules = [
  body('email').isEmail().withMessage('Email is invalid').normalizeEmail(),

  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Middleware to handle validation errors
const validateLoginUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  loginValidationRules,
  validateLoginUser,
};
