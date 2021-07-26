import classes from './Projects.module.css';
import Project from '../../component/Project/Project';

export default function Projects() {
    return <section className={classes.project_section} id="projects">
        <h2>
            My Projects
        </h2>
        <ul>
            <Project
                image_src="/assets/react-chat.png"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/react-chat.png"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/react-chat.png"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud" +
                    "estsint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod."}
                tech_stack="Next.js &nbsp; React &nbsp; SocketIO &nbsp; Express"
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/react-chat.png"
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