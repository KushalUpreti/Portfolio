import classes from './Projects.module.css';
import Project from '../../component/Project/Project';

export default function Projects() {
    return <section className={classes.project_section} id="projects">
        <h2>
            About Me
        </h2>
        <ul>
            <Project />
            <Project />
        </ul>
    </section>
}