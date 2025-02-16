export type FieldName = "first_name" |
    "last_name" |
    "password" |
    "phone_or_email" |
    "country" |
    "city" |
    "address";

export interface StateField {
    name: FieldName,
    value: string,
    isValid: boolean,
    errorText?: string,
    touched: boolean,
}

export interface Fields {
    first_name: StateField,
    last_name: StateField,
    password: StateField,
    phone_or_email: StateField,
    country: StateField,
    city: StateField,
    address: StateField,
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