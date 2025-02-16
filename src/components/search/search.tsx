
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames';

interface Props {
    title: string;
    isLabsPage?: boolean;
}

const Search: React.FC<Props> = ({ title, isLabsPage }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    return <div className={classNames(styles.search, { [styles.labsPageTop]: isLabsPage })}>
        <h1 className={classNames(styles.title, { [styles.labsPageMargin]: isLabsPage })}>
            {title}
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                className={styles.inputField}
                placeholder='Search for services and labs'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target .value)}
            />
            <button type='submit' className={styles.submitButton}>Search</button>
        </form>
    </div>
}

export default Search;