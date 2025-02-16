import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import styles from './result-popup.module.scss';
import { PDFViewer } from '@react-pdf/renderer';
import { AppointPopup } from '../appoint-popup';
import PdfContent from './pdf-content';
import downloadIcon from './images/download.svg';
import closeIcon from './images/close.svg';
import { stylesPdf } from './pdf-content-styles';

interface Props {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultPopup: React.FC<Props> = ({ setPopup }) => {
    const handleBackdropClick = () => {
        setPopup(false);
    }

    return <div className={styles.resultPopup}>
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.contentContainer}>
                {/* <section className={styles.header}> */}
                {/* <PDFDownloadLink document={<PdfContent />} fileName={'result'}>
                        {
                            ({ loading }) => loading ?
                                <div className={styles.downloadText}>Loading...</div>
                                :
                                <div className={styles.actionsBox}>
                                    <div className={styles.downloadImg}>
                                        <img src={downloadIcon} alt="download" />
                                    </div>
                                    <div className={styles.downloadText}>Download</div>
                                </div>
                        }
                    </PDFDownloadLink> */}
                {/* <div className={styles.close}>
                        <img src={closeIcon} alt="close" />
                    </div>
                </section> */}
                <div className={styles.content}>
                    <PDFViewer style={stylesPdf.viewer}>
                        <PdfContent />
                    </PDFViewer>
                </div>
            </div>
        </div>
    </div>
}

export default ResultPopup;