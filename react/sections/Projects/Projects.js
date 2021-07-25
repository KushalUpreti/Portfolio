import classes from './Projects.module.css';
import Project from '../../component/Project/Project';

export default function Projects() {
    return <section className={classes.project_section} id="projects">
        <h2>
            My Projects
        </h2>
        <ul>
            <Project />
            <Project />
            <Project />
            <Project />
        </ul>
    </section>
}