import classes from './SideNavElem.module.css';

const SideNavElem = (props) => {


    return (
        <>
            <ul className={classes.side_nav_elem}>
                <li>
                    <a href="#none" onClick={props.shut} >Home</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >About</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Portfolio</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Blog</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Contact</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Get a Quote</a>
                </li>
            </ul>
        </>
    )
}

export default SideNavElem;