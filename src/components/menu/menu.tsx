
import React, { useState } from 'react';
import styles from './menu-card.module.scss'
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
}



const Menu: React.FC<Props> = (props) => {

    return <>
    <div className={styles.menuBox}></div>
    
    </>
}
export default Menu;