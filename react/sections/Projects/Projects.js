import classes from './Projects.module.css';
import Project from '../../component/Project/Project';
import { useFadeIn } from '../../hooks/intersection-hook';
import { useRef } from 'react';

export default function Projects() {
    const projectRef = useRef();
    const [isVisible] = useFadeIn(projectRef);

    return <section className={`${classes.project_section}  ${isVisible ? classes.entry_class : ""}`} ref={projectRef} id="projects">
        <h2>
            My Projects
        </h2>
        <ul>
            <Project
                image_src="/assets/ReactChat.jpeg"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/ReactChat.jpeg"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/ReactChat.jpeg"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/ReactChat.jpeg"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

        </ul>
    </section>
}