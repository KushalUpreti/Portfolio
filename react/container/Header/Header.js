import classes from './Header.module.css';

import SideDrawer from '../../component/SideDrawer/Sidedrawer';
import { useState } from 'react';

export default function Header(props) {
    const [drawer, setDrawer] = useState(false)

    const showDrawerHandler = () => {
        setDrawer(true)
    }
    const hideDrawerHandler = () => {
        setDrawer(false)
    }

    return <header className={classes.header}>
        <div className={classes.header_container}>
            <section className={classes.header_flex_container}>

                <div className={classes.logo_container}>
                    <div className={classes.padded_logo_container}>
                        <a href="#none">
                            {/* Add logo here */}
                        </a>
                    </div>
                </div>


                <div className={classes.right_container}>

                </div>
            </section>

            <SideDrawer show={drawer} close={hideDrawerHandler} />
        </div>
    </header>
}

