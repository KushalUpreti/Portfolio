import { useNotificationContext } from '../../context/notify-context';
import classes from './Notify.module.css';

export default function Notify() {
    const context = useNotificationContext();

    return context.notification ? <div className={classes.notify}>
        <div className={classes.svg_container}>

            <svg width="15" height="51" viewBox="0 0 15 51" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={context.notificationType === "Error" ? classes.error : classes.green}>
                <g id="Apple Watch 44mm - 1">
                    <path id="Rectangle 1" d="M0 0H12.2727L15 2.27679L12.2727 5.23661L15 9.10714L12.2727 11.6116V15.4821L15 17.5312L12.2727 20.7187L15 24.817L12.2727 28.2321V32.1027L15 34.6071L12.2727 38.4777L15 41.4375L12.2727 44.8527L15 47.5848L12.2727 51H0V0Z" />
                </g>
            </svg>

        </div>

        <div className={classes.notification_container}>
            <p>
                {context.notification}
            </p>
        </div>
    </div>
        : null
}