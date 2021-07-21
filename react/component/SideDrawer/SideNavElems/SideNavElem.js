import classes from './SideNavElem.module.css';

const SideNavElem = (props) => {


    return (
        <>
            <ul className={classes.side_nav_elems}>
                <li>
                    <a href="#none" onClick={props.shut} >Home</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >About</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Skills</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Projects</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Contact</a>
                </li>
            </ul>
        </>
    )
}

export default SideNavElem;