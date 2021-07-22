import classes from './Index.module.css';
import HamIcon from '../../component/HamIcon/HamIcon';
export default function Index() {
    return <section className={classes.index} id="index">
        <div className={classes.intro}>
            <h1>Kushal Upreti</h1>
            <p>Full-Stack web & mobile developer.</p>
        </div>
    </section>
}