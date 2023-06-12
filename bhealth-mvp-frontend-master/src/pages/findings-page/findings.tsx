import React, { useEffect, useState } from 'react';
import styles from './findings-page.module.scss';
import { Table } from '../../components/table';
import { columnsFindings, rowsFindings } from '../../moc-data/dataProfile';
import { TABLE } from '../../components/types';
import { ResultPopup } from '../../components/result-popup';

interface Props {
}

const FindingsPage: React.FC<Props> = (props) => {
    const [popup, setPopup] = useState(false); //TODO 1)id of the clicked row. 2) fetch data inside popup with id

    useEffect(() => {
        // request for all appointments
    }, [])

    return <div className={styles.findingsPage}>
        <Table
            type={TABLE.PROFILE_FINDINGS}
            columnTitles={columnsFindings}
            rows={rowsFindings}
            setPopup={setPopup}
        />
        {popup && <ResultPopup setPopup={setPopup} />}
    </div>
}

export default FindingsPage; 