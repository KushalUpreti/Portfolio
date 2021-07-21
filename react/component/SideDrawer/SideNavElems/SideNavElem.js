import classes from './SideNavElem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faUserAlt, faList, faPhone } from '@fortawesome/free-solid-svg-icons';

const SideNavElem = (props) => {


    return (
        <>
            <ul className={classes.side_nav_elems}>
                <li>
                    <a href="#a"><FontAwesomeIcon icon={faHome} /></a>
                    <a href="#none" onClick={props.shut} >Home</a>
                </li>
                <li>
                    <a href="#a"><FontAwesomeIcon icon={faUserAlt} /></a>
                    <a href="#none" onClick={props.shut} >About</a>
                </li>
                <li>
                    <a href="#a"><FontAwesomeIcon icon={faWrench} /></a>
                    <a href="#none" onClick={props.shut} >Skills</a>
                </li>
                <li>
                    <a href="#a"><FontAwesomeIcon icon={faList} /></a>
                    <a href="#none" onClick={props.shut} >Projects</a>
                </li>
                <li>
                    <a href="#a"><FontAwesomeIcon icon={faPhone} /></a>
                    <a href="#none" onClick={props.shut} >Contact</a>
                </li>
            </ul>
        </>
    )
}

export default SideNavElem;