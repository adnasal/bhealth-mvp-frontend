import React, { useState } from 'react';
import { EditGreeting, EditPersonal, EditLabs } from '../../components/edit';
import styles from './edit-profile-page.module.scss';



interface Props {
}

const EditProfilePage: React.FC<Props> = (props) => {

    //TODO__must be replaced with api__
    const [signeToggle, setSignToggle] = useState(false);
    //TODO__must be replaced with api__

    return <div className={styles.editProfilePage}>

        {/* TODO__must be deleted when api is ready__ */}
        <button
            style={{
                padding: '10px', color: 'white', background: 'black'
            }}
            onClick={() => setSignToggle(!signeToggle)}>
            toggle edit fields
        </button>
        {/* TODO__must be deleted when api is ready__ */}

        <EditGreeting profileName={signeToggle ? 'UserName' : 'LabName'} />
        {
            signeToggle ? <EditPersonal /> : <EditLabs />
        }
    </div>
}

export default EditProfilePage;