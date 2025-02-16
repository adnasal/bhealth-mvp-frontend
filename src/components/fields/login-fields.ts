import { StateField, MappedField, Validator } from "./types/login-fielts-types";
import { loginValidation } from '../../validation/validations';

export const phone_or_email: StateField = {
    name: "phone_or_email",
    value: "",
    isValid: true,
    touched: false,
};

export const password: StateField = {
    name: "password",
    value: "",
    isValid: true,
    touched: false,
};

export const loginFields: MappedField[] = [
    { type: "input", name: "phone_or_email", title: "E-mail or phone number", placeholder: "Type your e-mail or phone number", subtitle: '' },
    { type: "input", name: "password", title: "Password", placeholder: "Type your password", subtitle: 'Must be 8 characters at least' },
];

export const fieldsValidation: Validator = {
    phone_or_email: loginValidation.phone_or_email,
    password: loginValidation.password,
};
