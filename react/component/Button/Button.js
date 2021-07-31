import classes from './Button.module.css';

export default function Button(porps) {
    return <button
        type={porps.type}
        className={classes.button}
        onClick={porps.click}
        disabled={porps.disabled}>
        {porps.text}
    </button>
}