import classes from './About.module.css';
import Avatar from '../../component/Avatar/Avatar';
import Button from '../../component/Button/Button';
import { useFadeIn } from '../../hooks/intersection-hook';

import { useRef } from 'react';

export default function About() {
    const aboutRef = useRef();
    const [isVisible] = useFadeIn(aboutRef);


    return <section className={classes.section} >
        <div id="about" className={classes.about}></div>
        <div className={`${classes.flex_about}  ${isVisible ? classes.entry_class : ""}`}>
            <div className={classes.about_div}>
                <h2 className={classes.uni_h2}>
                    About Me
                </h2>
                <p>
                    Elit ad ex labore veniam eiusmod ex quis commodo do cupidatat cillum tempor. Mollit laborum pariatur ullamco ad
                    officia elit id minim nisi reprehenderit consectetur. Officia consequat dolore ad proident dolor consequat est
                    minim non adipisicing exercitation non non voluptate.
                </p>
                <p ref={aboutRef}>
                    Cillum qui et incididunt aute aute quis et id consequat. Qui irure in velit Lorem esse aliqua incididunt ex consequat
                    laborum incididunt. Dolore id magna enim Lorem Lorem. Irure laborum in veniam ullamco in enim voluptate duis duis ad.
                    Aliquip exercitation cillum velit commodo dolor proident.
                </p>
                <Button
                    click={() => { window.open('/assets/Resume.pdf', '_blank') }}
                    text="Resume"
                    type="button"
                />

            </div>

            <div className={classes.avatar_div}>
                <Avatar />
            </div>
        </div>
    </section>
}