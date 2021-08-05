import classes from './SideNavElem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faUserAlt, faList, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const SideNavElem = (props) => {

    return (
        <>
            <ul className={classes.side_nav_elems}>
                <li onClick={props.remove}>
                    <Link href="#index" passHref><FontAwesomeIcon icon={faHome} /></Link>
                    <a href="#index" onClick={props.shut} >Home</a>
                </li>
                <li onClick={props.remove}>
                    <a href="#about"><FontAwesomeIcon icon={faUserAlt} /></a>
                    <a href="#about" onClick={props.shut} >About</a>
                </li>
                <li onClick={props.remove}>
                    <a href="#skills"><FontAwesomeIcon icon={faWrench} /></a>
                    <a href="#skills" onClick={props.shut} >Skills</a>
                </li>
                <li onClick={props.remove}>
                    <a href="#projects"><FontAwesomeIcon icon={faList} /></a>
                    <a href="#projects" onClick={props.shut} >Projects</a>
                </li>
                <li onClick={props.remove}>
                    <a href="#contact"><FontAwesomeIcon icon={faPhone} /></a>
                    <a href="#contact" onClick={props.shut} >Contact</a>
                </li>
            </ul>
        </>
    )
}

export default SideNavElem;