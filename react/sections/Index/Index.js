import classes from './Index.module.css';
import ScrollIndicator from '../../component/ScrollIndicator/ScrollIndicator';
import { useScroll } from '../../hooks/scroll-hook';
import { useFadeIn } from '../../hooks/intersection-hook';
import { useRef } from 'react';
import { useSideNavContext } from '../../context/sidenav-context';

export default function Index() {
    const indexRef = useRef();
    const { onTop } = useScroll();
    const scrollPos = useSideNavContext();

    const [isVisible] = useFadeIn(indexRef, () => {
        scrollPos.setScrollPos("Index");
    });

    return <section className={classes.index} id="index">
        <div className={classes.intro} ref={indexRef}>
            <h1>Kushal Upreti</h1>
            <p>I deliver robust web and mobile apps</p>
        </div>
        <ScrollIndicator onTop={onTop} /> :
    </section>
}