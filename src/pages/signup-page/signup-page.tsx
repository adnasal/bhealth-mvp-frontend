import React from 'react';
import styles from './signup-page.module.scss';
import { useLocation } from 'react-router-dom';
import { AuthGreeting, AuthNetworks, AuthTabs, SignupLabs, SignupPersonal } from '../../components/auth';

interface Props {
}

const SignUpPage: React.FC<Props> = (props) => {
    const location = useLocation();

    const signupPersonalFields = location.pathname === '/signup' && location.hash === '#personal';
    const signupLabsFields = location.pathname === '/signup' && location.hash === '#institution'


    return <div className={styles.signUpPage}>
        <AuthGreeting title='Create your account' subtitle='It’s free and easy' />
        <AuthTabs leftTab='Personal' rightTab='Institution' />
        {signupPersonalFields && <SignupPersonal />}
        {signupLabsFields && <SignupLabs />}
        <AuthNetworks />
    </div>
}

export default SignUpPage; 