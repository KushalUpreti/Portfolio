import classes from './Skills.module.css';
import TabLayout from '../../container/TabLayout/TabLayout';

export default function Skills() {
    return <section className={classes.skills_section} id="skills">
        <h2>
            My technologies
        </h2>
        <TabLayout />
    </section>
}