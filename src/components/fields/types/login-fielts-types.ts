export type FieldName = "phone_or_email" | "password";

export interface StateField {
    name: FieldName,
    value: string,
    isValid: boolean,
    errorText?: string,
    touched: boolean,
}

export interface Fields {
    phone_or_email: StateField,
    password: StateField
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