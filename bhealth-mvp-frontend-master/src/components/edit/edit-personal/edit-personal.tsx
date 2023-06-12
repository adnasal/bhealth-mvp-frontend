import React, { useState } from 'react';
import styles from './edit-personal.module.scss';
import RegularField from '../../regular-field/regular-field';
import { Fields, FieldName, MappedField } from '../../fields/types/edit-personal-fields-types';
import {
    first_name,
    last_name,
    password,
    phone_or_email,
    country,
    city,
    address,
    editPersonalFields,
    fieldsValidation
} from '../../fields/edit-personal-fields';
import calendar from './images/calendar.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

interface Props {
}

const LoginPersonal: React.FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [fields, setFields] = useState<Fields>({
        first_name,
        last_name,
        password,
        phone_or_email,
        country,
        city,
        address,
    });

    const navigate = useNavigate();

    const [birth, setBirth] = useState({ value: '', isValid: true, errorText: '', touched: false });

    const handleBirthChange = (e: any) => { setBirth((prev) => ({ ...prev, value: e.target.value })) }

    const handleBirthFocus = () => setBirth((prevState) => ({ ...prevState, isValid: true }));

    const handleBirthBlur = () => {
        if (!birth.value) {
            setBirth((prev) => ({ ...prev, isValid: false, errorText: 'Select birth date' }))
        }
    }

    const handleFieldsChange = (e: React.ChangeEvent<{ name: string | undefined; value: string; }>, name: FieldName) => {
        const inputValue = (name === 'address')
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

        editPersonalFields.forEach((field: MappedField) => {
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

        if (!birth.value) {
            isValid = false;
            setBirth((prev) => ({ ...prev, isValid: false, errorText: 'Select birth date' }))
        }

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            oldPassword !== fields.password.value ? navigate('/email-confirm') : navigate('/profile');
            console.log('valid personal');
        }
    };

    return <form onSubmit={handleSubmit} className={styles.editPersonal}>
        <div className={styles.fieldsContainer}>
            {
                editPersonalFields.map(field => {
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
            <div className={styles.dateContainer}>
                <h2 className={styles.dateTitle}>Date of birth</h2>
                <label htmlFor='birth' className={classNames(styles.dateContent, { [styles.errored]: !birth.isValid })}>
                    <p className={styles.dateValue}>{birth.value}</p>
                    <div className={styles.imgContainer}>
                        <img src={calendar} alt="calendar" />
                    </div>
                    <input
                        id="birth"
                        type="date"
                        value={birth.value}
                        onChange={handleBirthChange}
                        onFocus={handleBirthFocus}
                        onBlur={handleBirthBlur}
                        min="1900-01-01" max="2022-01-01" />
                </label>
                {
                    !birth.isValid && <div className={styles.errorText}>{birth.errorText}</div>
                }
            </div>
        </div>
        <button type='submit' className={styles.button}>Save changes</button>
    </form>
}

export default LoginPersonal;