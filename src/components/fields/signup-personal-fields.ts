import { StateField, MappedField, Validator } from "./types/signup-personal-fields-types";
import { signupPersonalValidation } from '../../validation/validations';

export const first_name: StateField = { name: "first_name", value: "", isValid: true, touched: false };
export const last_name: StateField = { name: "last_name", value: "", isValid: true, touched: false };
export const password: StateField = { name: "password", value: "", isValid: true, touched: false };
export const phone_or_email: StateField = { name: "phone_or_email", value: "", isValid: true, touched: false };
export const phone_number: StateField = { name: "phone_number", value: "", isValid: true, touched: false };
export const email: StateField = { name: "email", value: "", isValid: true, touched: false };
export const country: StateField = { name: "country", value: "", isValid: true, touched: false };
export const city: StateField = { name: "city", value: "", isValid: true, touched: false };
export const address: StateField = { name: "address", value: "", isValid: true, touched: false, };

export const signupPersonalFields: MappedField[] = [
    { type: "input", name: "first_name", title: "First Name", placeholder: "Type your first name", subtitle: '' },
    { type: "input", name: "last_name", title: "Last Name", placeholder: "Type your last name", subtitle: '' },
    { type: "input", name: "password", title: "Password", placeholder: "Type your password", subtitle: '' },
    { type: "input", name: "email", title: "Email", placeholder: "Please enter your email address", subtitle: '' },
    { type: "input", name: "phone_number", title: "Phone number", placeholder: "Type your phone number", subtitle: '' },
    { type: "input", name: "country", title: "Country", placeholder: "Please enter your country", subtitle: '' },
    { type: "input", name: "city", title: "City", placeholder: "Please enter your city", subtitle: '' },
    { type: "input", name: "address", title: "Address", placeholder: "Please enter your address", subtitle: '' },
];

export const fieldsValidation: Validator = {
    first_name: signupPersonalValidation.first_name,
    last_name: signupPersonalValidation.last_name,
    password: signupPersonalValidation.password,
    phone_or_email: signupPersonalValidation.phone_or_email,
    phone_number: signupPersonalValidation.phone_or_email,
    email: signupPersonalValidation.phone_or_email,
    country: signupPersonalValidation.country,
    city: signupPersonalValidation.city,
    address: signupPersonalValidation.address,
};
