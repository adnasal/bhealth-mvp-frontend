
import React, { useEffect, useState } from 'react';
import styles from './filters.module.scss';
import Filter from '../filter/filter';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

interface Props {
    openFilters: boolean;
    setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;

}

const Filters: React.FC<Props> = ({ openFilters, setOpenFilters }) => {
    const [historyFilter, setHistoryFilter] = useState('false');
    const [filters, setFilters] = useState<{ [key: string]: { isOpen: boolean } }>({
        city: { isOpen: false },
        lab: { isOpen: false },
        service: { isOpen: true },
        range: { isOpen: false }
    });

    const showContent = (id: string) => {
        setFilters({ ...filters, [id]: { isOpen: !filters[id].isOpen } });
    }

    return <div className={classNames(styles.filters, styles.mobile, { [styles.open]: openFilters })}>
        <div className={styles.backdrop}>
            <OutsideClickHandler onOutsideClick={() => { setOpenFilters(false) }}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Filters</h1>
                    <div className={styles.filtersContainer}>
                        <Filter
                            id={'city'}
                            filters={filters}
                            title='Choose desired city'
                            showContent={showContent}
                        />
                        <Filter
                            id={'lab'}
                            filters={filters}
                            title='Choose desired lab'
                            showContent={showContent}
                        />
                        <Filter
                            id={'service'}
                            filters={filters}
                            title='Choose desired service'
                            showContent={showContent}
                        />
                        <Filter
                            id={'range'}
                            filters={filters}
                            title='Choose price range'
                            showContent={showContent}
                        />
                    </div>
                    <h2 className={styles.subtitle}>View search history</h2>
                    <div className={styles.additionalFilters}>
                        <label className={styles.radioContainer}>Yes
                            <input
                                type="radio"
                                name="history"
                                value="true"
                                checked={historyFilter === "true"}
                                onChange={(e) => setHistoryFilter(e.currentTarget.value)}
                            />
                            <span className={styles.radioCheckmark}></span>
                        </label>
                        <label className={styles.radioContainer}>No
                            <input
                                type="radio"
                                name="history"
                                value="false"
                                checked={historyFilter === "false"}
                                onChange={(e) => setHistoryFilter(e.currentTarget.value)}
                            />
                            <span className={styles.radioCheckmark}></span>
                        </label>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    </div >
}

export default Filters;