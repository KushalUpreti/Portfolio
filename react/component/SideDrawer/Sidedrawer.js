import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import Container from '../Containers/Container';
import SideNavElem from './SideNavElems/SideNavElem'
import classes from './Sidedrawer.module.css';
import Portal from '../../../hoc/Portal';

const Sidedrawer = (props) => {

    let style;
    if (props.show) {
        style = {
            transform: "translateX(0)"
        }
    } else {
        style = {
            transform: "translateX(100%)"
        }
    }

    const content =
        <>
            {props.show ? <Backdrop remove={props.close} /> : null}
            <div className={classes.sidedrawer} style={style}>
                <div className={classes.cross_button_container}>
                    <i className="fas fa-times" onClick={props.close}></i>
                </div>

                <Container >
                    <SideNavElem shut={props.close} />
                </Container>
            </div>
        </>

    return <Portal id="sidedrawer">{content}</Portal>
}

export default Sidedrawer;