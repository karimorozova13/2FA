const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      isUnique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    savePassword: {
      type: Boolean,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
const registerSchema = Joi.object({
  phone: Joi.extend(require("joi-phone-number")).string().phoneNumber(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().min(6).required(),
  savePassword: Joi.boolean(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  savePassword: Joi.boolean(),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
