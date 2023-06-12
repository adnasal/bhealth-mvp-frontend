import { StateField, MappedField, Validator } from "./types/edit-personal-fields-types";
import { editPersonalValidation } from '../../validation/validations';

export const first_name: StateField = { name: "first_name", value: "", isValid: true, touched: false };
export const last_name: StateField = { name: "last_name", value: "", isValid: true, touched: false };
export const password: StateField = { name: "password", value: "", isValid: true, touched: false };
export const phone_or_email: StateField = { name: "phone_or_email", value: "", isValid: true, touched: false };
export const country: StateField = { name: "country", value: "", isValid: true, touched: false };
export const city: StateField = { name: "city", value: "", isValid: true, touched: false };
export const address: StateField = { name: "address", value: "", isValid: true, touched: false, };

export const editPersonalFields: MappedField[] = [
    { type: "input", name: "first_name", title: "First Name", placeholder: "Type your first name", subtitle: '' },
    { type: "input", name: "last_name", title: "Last Name", placeholder: "Type your last name", subtitle: '' },
    { type: "input", name: "password", title: "Password", placeholder: "Type your password", subtitle: '' },
    { type: "input", name: "phone_or_email", title: "E-mail or phone number", placeholder: "Type your e-mail or phone number", subtitle: '' },
    { type: "input", name: "country", title: "Country", placeholder: "Please enter your country", subtitle: '' },
    { type: "input", name: "city", title: "City", placeholder: "Please enter your city", subtitle: '' },
    { type: "input", name: "address", title: "Street Address", placeholder: "Please enter your address", subtitle: '' },
];

export const fieldsValidation: Validator = {
    first_name: editPersonalValidation.first_name,
    last_name: editPersonalValidation.last_name,
    password: editPersonalValidation.password,
    phone_or_email: editPersonalValidation.phone_or_email,
    country: editPersonalValidation.country,
    city: editPersonalValidation.city,
    address: editPersonalValidation.address,
};
