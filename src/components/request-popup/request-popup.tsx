import React from 'react';
import styles from './request-popup.module.scss';
import avatar from './images/photo.png';
import uploadImg from './images/uploadImg.svg';
import { v4 as uuidv4 } from "uuid";
import OutsideClickHandler from 'react-outside-click-handler';
import { useUpdateAppointmentMutation } from '../../services/appointmentService';

interface Props {
    uploadId: string;
    setUploadId: React.Dispatch<React.SetStateAction<string>>;
    data: any
}

const RequestPopup: React.FC<Props> = ({ data, setUploadId }) => {

    const [updateAppointment, { isSuccess: isSuccessUpdateAppointment, isError: isErrorUpdateAppointment }] = useUpdateAppointmentMutation()

    // const [file, setFile] = React.useState<{
    //     id: string;
    //     path: string;
    //     file: File;
    // } | null>(null);
    const [date, setDate] = React.useState('')
    const [text, setText] = React.useState('');


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const payload = {
            lab_appointment: data?.lab_id,
            service_appointment: data?.service_id,
            patient: data?.patient,
            date: date?.toString()
        }
        updateAppointment(payload)
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const fileContent = event.target.files;
        // if (fileContent) {
        //     const preparedFile = {
        //         id: uuidv4(),
        //         path: URL.createObjectURL(fileContent[0]),
        //         file: fileContent[0],
        //     };
        //     setFile(preparedFile);
        // }
    }

    const handleClear = () => {
        setDate('');
        setText('');
    }

    return <div className={styles.uploadPopup}>
        <div className={styles.backdrop}>
            <OutsideClickHandler onOutsideClick={() => { setUploadId('') }}>
                <div className={styles.content}>
                    <div className={styles.titleBox}>
                        <div className={styles.uploadTitle}>
                            Send Appointment
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.infoBox}>
                        <div className={styles.patientInfo}>
                            <div className={styles.photoImg}>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className={styles.patientInfoCol}>
                                <div className={styles.title}>{data?.firstName} {data?.lastName}</div>
                                <div className={styles.pcrTest}>{data?.name}</div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.uploadForm}>
                        <div className={styles.appointmentdate}>
                            <label>Appointment Date</label>
                            {/* <input
                                type="datetime-local"
                                multiple
                                className={styles.inputField}
                                onChange={handleFileChange}
                                value={file}
                            /> */}
                            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <label>Note (optional)</label>
                            <textarea className={styles.textareaForm} placeholder="Leave a message..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className={styles.buttonRow}>
                            <button type='submit' className={styles.buttonLeft}>Send</button>
                            <button className={styles.buttonRigt} onClick={handleClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </OutsideClickHandler>
        </div>
    </div>
}

export default RequestPopup;