import React, { useEffect, useState } from 'react';
import styles from './regular-field.module.scss';
import classNames from 'classnames';
import viewIcon from './images/view.png';

interface Props {
    name: string,
    title: string;
    inputValue: string;
    isValid: boolean;
    errorText: string | undefined;
    placeholder: string;
    subtitle: string;
    handleFieldsChange: (e: React.ChangeEvent<{
        name: string | undefined;
        value: string;
    }>, name: any) => void;
    handleFocus: (name: any) => void;
    handleBlur: (name: any) => void;
}

const RegularField: React.FC<Props> = (props) => {
    const {
        name,
        title,
        inputValue,
        isValid,
        errorText,
        placeholder,
        subtitle,
        handleFieldsChange,
        handleFocus,
        handleBlur
    } = props;

    const [isViewed, setIsViewed] = useState(false);

    const toggleView = () => setIsViewed(!isViewed);

    return <div className={styles.regularField}>
        <h2 className={styles.title}>{title}</h2>
        <div className={classNames(styles.inputContainer, { [styles.errored]: !isValid })}>
            <input
                placeholder={placeholder}
                type={(name === 'password' && !isViewed) ? 'password' : 'text'}
                name={name}
                onChange={(e) => handleFieldsChange(e, name)}
                value={inputValue}
                onFocus={() => handleFocus(name)}
                onBlur={() => handleBlur(name)}
            />
            {
                name === 'password' && <div className={styles.showImg} onClick={toggleView}>
                    <img src={viewIcon} alt="show password" />
                </div>
            }
            {
                !isValid && <div className={styles.errorText}>{errorText}</div>
            }
            {
                (subtitle && isValid) && <div className={styles.subtitle}>{subtitle}</div>
            }
        </div>
    </div>
}

export default RegularField;