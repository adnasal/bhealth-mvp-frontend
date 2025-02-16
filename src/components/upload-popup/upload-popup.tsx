import React, { useEffect, useState } from 'react';
import styles from './upload-popup.module.scss';
import avatar from './images/photo.png';
import uploadImg from './images/uploadImg.svg';
import { v4 as uuidv4 } from "uuid";
import OutsideClickHandler from 'react-outside-click-handler';

interface Props {
    uploadId: string;
    setUploadId: React.Dispatch<React.SetStateAction<string>>;
}

const Upload: React.FC<Props> = ({ setUploadId }) => {

    const [file, setFile] = React.useState<{
        id: string;
        path: string;
        file: File;
    } | null>(null);
    const [text, setText] = React.useState('');


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(file, text);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileContent = event.target.files;
        if (fileContent) {
            const preparedFile = {
                id: uuidv4(),
                path: URL.createObjectURL(fileContent[0]),
                file: fileContent[0],
            };
            setFile(preparedFile);
        }
    }

    const handleClear = () => {
        setFile(null);
        setText('');
    }

    return <div className={styles.uploadPopup}>
        <div className={styles.backdrop}>
            <OutsideClickHandler onOutsideClick={() => { setUploadId('') }}>
                <div className={styles.content}>
                    <div className={styles.titleBox}>
                        <div className={styles.uploadTitle}>
                            Upload Test Result
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.infoBox}>
                        <div className={styles.patientInfo}>
                            <div className={styles.photoImg}>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className={styles.patientInfoCol}>
                                <div className={styles.title}>Theresa Webb</div>
                                <div className={styles.pcrTest}>PCR Test</div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.uploadForm}>
                        <label className={styles.file}>
                            <input
                                type="file"
                                multiple
                                className={styles.inputField}
                                onChange={handleFileChange}
                            />
                            <div className={styles.labelFile}>
                                <div className={styles.fileTitle}>
                                    {file?.file.name || 'Upload document'}
                                </div>
                                <div className={styles.fileImg}><img src={uploadImg} alt="uploadImg" /></div>
                            </div>
                        </label>
                        <textarea className={styles.textareaForm} placeholder="Leave a message..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        <div className={styles.buttonRow}>
                            <button type='submit' className={styles.buttonLeft}>Upload test result</button>
                            <button className={styles.buttonRigt} onClick={handleClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </OutsideClickHandler>
        </div>
    </div>
}

export default Upload;