import React, { useEffect, useState } from 'react';
import styles from './signup-labs.module.scss';
import RegularField from '../../regular-field/regular-field';
import { Fields, FieldName, MappedField } from '../../fields/types/signup-labs-fields-types';
import {
    name,
    city,
    address,
    working_days_and_hours,
    telephone_number,
    website,
    email,
    password,
    signupLabsFields,
    fieldsValidation
} from '../../fields/signup-labs-fields';
import { useSignupInstituteMutation } from '../../../services/signupService';
import { useNavigate } from 'react-router-dom';

interface Props {
}

const SignupLabs: React.FC<Props> = (props) => {

    //States
    const navigate = useNavigate()
    const [fields, setFields] = useState<Fields>({
        name,
        city,
        address,
        working_days_and_hours,
        telephone_number,
        website,
        email,
        password
    });

    //API - Mutations
    const [signupInstitute, { isSuccess, isError, error }] = useSignupInstituteMutation()

    //Functionalities
    const handleFieldsChange = (e: React.ChangeEvent<{ name: string | undefined; value: string; }>, name: FieldName) => {
        const inputValue = (name === 'address' || name === 'working_days_and_hours')
            ? e.target.value
            : e.target.value.trim();

        setFields((prevState) => ({
            ...prevState, [name]: { ...prevState[name], value: inputValue, isValid: true }
        }));
    };

    const handleFocus = (name: FieldName) => {
        setFields((prevState) => ({ ...prevState, [name]: { ...prevState[name], isValid: true } }));
    };

    const handleBlur = (name: FieldName) => {
        let errorText = "";

        fieldsValidation[name].forEach((validator) => {
            if (errorText) {
                return;
            }

            const fieldErrorText = validator(fields[name].value);

            if (fieldErrorText) {
                errorText = fieldErrorText;
            }

            setFields((prevState) => ({
                ...prevState,
                [name]: {
                    ...prevState[name], isValid: !errorText, errorText, touched: errorText
                }
            }));
        });
    };

    const validate = () => {
        let isValid = true;

        signupLabsFields.forEach((field: MappedField) => {
            let errorText = "";
            fieldsValidation[field.name].forEach((validator) => {
                if (errorText) {
                    return;
                }

                const fieldErrorText = validator(fields[field.name].value);

                if (fieldErrorText) {
                    isValid = false;
                    errorText = fieldErrorText;
                }

                setFields((prevState) => ({
                    ...prevState,
                    [field.name]: { ...prevState[field.name], isValid: !errorText, errorText },
                }));
            });
        });

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid) {
            let keys: any[] = Object.keys(fields)
            let payload: any = {}
            keys?.forEach((key: keyof Fields) => {
                payload[key] = fields[key].value
            })
            console.log('payload', payload)
            signupInstitute(payload)
        }
    };

    //Effects
    useEffect(() => {
        if (isError) {
            console.log('error', error)
        }
        else if (isSuccess) {
            navigate('/login')
        }
    }, [isSuccess, isError, error])

    return <form onSubmit={handleSubmit} className={styles.signupLabs}>
        <div className={styles.fieldsContainer}>
            {
                signupLabsFields.map(field => {
                    return <RegularField
                        key={field.name}
                        name={field.name}
                        title={field.title}
                        inputValue={fields[field.name].value}
                        placeholder={field.placeholder}
                        subtitle={field.subtitle}
                        isValid={fields[field.name].isValid}
                        errorText={fields[field.name].errorText}
                        handleFieldsChange={handleFieldsChange}
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                    />
                })
            }
        </div>
        <button type='submit' className={styles.button}>Sign in</button>
    </form>
}

export default SignupLabs;