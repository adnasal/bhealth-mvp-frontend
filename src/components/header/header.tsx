import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import logo from './images/logo.svg';
import whiteLogo from './images/whiteLogo.svg';
import { NavLink, useLocation, Link } from "react-router-dom";
import { SignedBlock } from '../signed-block';
import { SidePanel } from './side-panel';
import classNames from 'classnames';
import isScrolledIntoView from '../../utils/isElementIntoView';
import { Navigaion } from './navigation';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    const headerRef = useRef<HTMLDivElement>(null);

    const [isSigned, setIsSigned] = useState(true);
    const [isTransparent, setTransparent] = useState(false);
    const [sidePanel, setSidePanel] = useState(false);

    const location = useLocation();
    const isLabsPage = location.pathname === '/labs';
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const homeSection = document.getElementById('section-home');
        const labsSection = document.getElementById('section-labs');

        function watchTarget() {
            const isVisible = isScrolledIntoView(isLabsPage ? labsSection : isHomePage ? homeSection : null, {
                full: false,
                shift: window.innerHeight - Number(window.getComputedStyle(headerRef.current!).height.split('px')[0])
            });

            setTransparent(isVisible ? false : true);
        }

        if (isLabsPage || isHomePage) {
            setTransparent(true);
            window.addEventListener('scroll', watchTarget);
        } else {
            setTransparent(false);
            window.removeEventListener('scroll', watchTarget);
        }

        return () => window.removeEventListener('scroll', watchTarget);
    }, [location.pathname]);

    const handleSideMenu = () => {
        setSidePanel(true);
    }

    return <header ref={headerRef} className={classNames(styles.header, { [styles.transparent]: isTransparent })}>
        <div className={styles.content}>
            <Link to='/' className={styles.logoContainer}>
                <img src={isTransparent ? whiteLogo : logo} alt="logo" />
            </Link>
            <div className={styles.burgerContainer} onClick={handleSideMenu}>
                <span className={styles.stick} />
            </div>
            <div className={styles.navigationContainer}>
                <Navigaion isSigned={isSigned} />
            </div>
        </div>
        {
            sidePanel && <SidePanel
                setSidePanel={setSidePanel}
                isSigned={isSigned}
            />
        }
    </header>
}

export default Header;