import classes from './Index.module.css';
import HamIcon from '../../component/HamIcon/HamIcon';
export default function Index() {
    return <section className={classes.index} id="index">
        <div className={classes.intro}>
            <h1>Kushal Upreti</h1>
            <p>I build scalable web and mobile products.</p>
        </div>
    </section>
}