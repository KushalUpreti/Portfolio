import classes from './Skills.module.css';
import TabLayout from '../../container/TabLayout/TabLayout';
import { useFadeIn } from '../../hooks/intersection-hook';
import { useSideNavContext } from '../../context/sidenav-context';

import { useRef } from 'react';

export default function Skills() {
    const skillsRef = useRef();
    const scrollPos = useSideNavContext();

    const [isVisible] = useFadeIn(skillsRef, () => {
        scrollPos.setScrollPos("Skills");
    });

    return <section className={classes.skills_section}  >
        <div id="skills" className={classes.absolute_div}></div>
        <div className={`${classes.skills_container}  ${isVisible ? classes.entry_class : ""}`} ref={skillsRef}>
            <h2 >
                My technologies
            </h2>
            <TabLayout />
        </div>

    </section>
}