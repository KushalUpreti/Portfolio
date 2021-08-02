import classes from './Index.module.css';
import ScrollIndicator from '../../component/ScrollIndicator/ScrollIndicator';
import { useScroll } from '../../hooks/scroll-hook';

export default function Index() {
    const { onTop } = useScroll();

    return <section className={classes.index} id="index">
        <div className={classes.intro}>
            <h1>Kushal Upreti</h1>
            <p>I deliver robust web and mobile apps</p>
        </div>
        <ScrollIndicator onTop={onTop} /> :
    </section>
}