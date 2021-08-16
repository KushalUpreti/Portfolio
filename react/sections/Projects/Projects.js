import classes from './Projects.module.css';
import Project from '../../component/Project/Project';
import { useFadeIn } from '../../hooks/intersection-hook';
import { useRef } from 'react';
import { useSideNavContext } from '../../context/sidenav-context';


export default function Projects() {
    const projectRef = useRef();
    const scrollPos = useSideNavContext();
    const [isVisible] = useFadeIn(projectRef, () => {
        scrollPos.setScrollPos("Projects");
    });

    return <section className={`${classes.project_section}  ${isVisible ? classes.entry_class : ""}`} ref={projectRef} id="projects">
        <h2>
            My Projects
        </h2>
        <ul>
            <Project
                image_src="/assets/desktop/ReactChat.jpeg"
                title="React-Chat"
                project_link="https://github.com/KushalUpreti/React-Chat"
                project_desc={"A real-time chat application for connecting with your friends. Add friends, send messages, create groups, see online friends," +
                    " delete messages and much more all in real-time. (Work in progress)"}
                tech_stack="React &nbsp; Socket.IO &nbsp; Express &nbsp; MongoDB  "
                hosted_link="https://kushalupreti.github.io/ReactChat"
            />

            <Project
                image_src="/assets/desktop/Wgp.png"
                title="Web Games Portal"
                project_link="https://github.com/KushalUpreti/WebGamesPortal"
                project_desc={"Play 1400+ HTML5 games instantly with just a click. Browse through variety of genre with hundreds of games to choose from." +
                    " Login to favorite games, see history and change your avatar."}
                tech_stack="React &nbsp; Firebase"
                hosted_link="https://kushalupreti.github.io/WebGamesPortal/"
            />

            <Project
                image_src="/assets/desktop/Keystroke.png"
                title="Keystroke"
                project_link="https://github.com/KushalUpreti/Keystroke"
                project_desc={"A website used for practicing touch typing. Includes virtual keyboard and multiple stat trackers. Built-in customizable settings" +
                    " like custom text, difficulty, text length and much more."}
                tech_stack="HTML &nbsp; CSS &nbsp; JavaScript"
                hosted_link="https://kushalupreti.github.io/Keystroke/"
            />
        </ul>
    </section>
}