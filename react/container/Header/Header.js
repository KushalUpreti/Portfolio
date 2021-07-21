import classes from './Header.module.css';
import logo from '../../../public/logo.png';
import SideDrawer from '../../component/SideDrawer/Sidedrawer';
import Image from 'next/image';
import HamIcon from '../../component/HamIcon/HamIcon';
import { useState } from 'react';

export default function Header(props) {
    const [drawer, setDrawer] = useState(false)

    const drawerHandler = () => {
        setDrawer(prev => !prev);
    }

    return <header className={classes.header}>
        <div className={classes.header_container}>
            <nav className={classes.header_flex_container}>

                <div className={classes.logo_container}>
                    <div className={classes.padded_logo_container}>
                        <a href="#none">
                            <Image src={logo} alt="Logo" width="40" height="30" />
                        </a>
                    </div>
                </div>


                <div className={classes.right_container}>
                    <HamIcon handler={drawerHandler} active={drawer} />
                </div>
            </nav>

            <SideDrawer show={drawer} handler={drawerHandler} />
        </div>
    </header>
}

