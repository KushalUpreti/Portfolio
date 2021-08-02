import classes from './Skills.module.css';
import TabLayout from '../../container/TabLayout/TabLayout';
import { useFadeIn } from '../../hooks/intersection-hook';

import { useRef } from 'react';

export default function Skills() {
    const skillsRef = useRef();
    const [isVisible] = useFadeIn(skillsRef);

    return <section className={classes.skills_section} id="skills" >
        <div className={`${classes.skills_container}  ${isVisible ? classes.entry_class : ""}`} ref={skillsRef}>
            <h2 >
                My technologies
            </h2>
            <TabLayout />
        </div>

    </section>
}