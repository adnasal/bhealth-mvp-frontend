import React from 'react';
import styles from './login-page.module.scss';
import { AuthGreeting, AuthNetworks } from '../../components/auth';
import { LoginPersonal } from '../../components/auth';

interface Props {
}

const LoginPage: React.FC<Props> = (props) => {

  return <div className={styles.loginPage}>
    <AuthGreeting title='Welcome back!' subtitle='Login from below' />
    <LoginPersonal />
    <AuthNetworks />
  </div>
}

export default LoginPage;