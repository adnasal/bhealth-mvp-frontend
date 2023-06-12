export type FieldName = "name" |
    "city" |
    "address" |
    "working_days_and_hours" |
    "telephone_number" |
    "website" |
    "email" |
    "password";

export interface StateField {
    name: FieldName,
    value: string,
    isValid: boolean,
    errorText?: string,
    touched: boolean,
}

export interface Fields {
    name: StateField,
    city: StateField,
    address: StateField,
    working_days_and_hours: StateField,
    telephone_number: StateField,
    website: StateField,
    email: StateField,
    password: StateField,
};

export interface MappedField {
    type: string,
    name: FieldName,
    title: string,
    placeholder: string,
    subtitle: string,
}

export interface Validator {
    [key: string]: ((value: string) => string | null)[]
}