import Backdrop from '../Backdrop/Backdrop';
import Container from '../Containers/Container';
import SideNavElem from './SideNavElems/SideNavElem'
import classes from './Sidedrawer.module.css';
import Portal from '../../../hoc/Portal';
import MobileSocials from '../MobileSocials/MobileSocials';


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
            {props.show ? <Backdrop remove={props.handler} /> : null}
            <div className={classes.sidedrawer} style={style}>

                <Container >
                    <SideNavElem shut={props.close} remove={props.handler} />
                </Container>
                <MobileSocials />
            </div>
        </>

    return <Portal id="sidedrawer">{content}</Portal>
}

export default Sidedrawer;