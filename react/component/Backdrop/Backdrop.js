import ReactDOM from 'react-dom';
import Portal from '../../../hoc/Portal';
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    return <Portal id="backdrop">
        <div className={classes.backdrop} onClick={props.remove}></div>
    </Portal>

}

export default Backdrop;