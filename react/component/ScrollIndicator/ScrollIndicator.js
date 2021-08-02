import classes from './ScrollIndicator.module.css';

export default function ScrollIndicator(props) {
    return <div className={`${classes.parent}  ${props.onTop ? classes.show : classes.hide}`}>
        <div className={classes.container} >
            <div className={classes.top_arrow}>
                <div className={classes.left}></div>
                <div className={classes.right}></div>
            </div>
            <div className={classes.bottom_arrow}>
                <div className={classes.left}></div>
                <div className={classes.right}></div>
            </div>
        </div>
    </div>


}