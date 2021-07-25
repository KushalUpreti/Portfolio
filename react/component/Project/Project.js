/* eslint-disable @next/next/no-img-element */
import classes from './Project.module.css';
import Image from 'next/image';

export default function Project(props) {
    return <li className={classes.project_li}>
        <>
            <div className={classes.project_image}>
                <img src="http://drive.google.com/uc?export=view&id=1oLE_ADv8D3qfbslGD7D_Job6KDBxWEpL" alt="project image" width="100%" />
            </div>

            <div className={classes.project_text} >
                <h4>Featured Project</h4>
                <a href={props.project_link}><h2>React-Chat {props.title}</h2></a>

                <div className={classes.project_desc}>
                    <p>Qui aliquip voluptate nisi id non ad reprehenderit aliqua. Reprehenderit duis in labore labore nisi nostrud est
                        sint reprehenderit elit dolore proident. Tempor qui id do eu irure nulla nostrud eiusmod.
                        {props.desc}
                    </p>
                </div>

                <p>Next.js React SocketIO Express {props.tech_stack}</p>

                <div className={classes.project_sources}>
                    <a href="https://google.com">Github Link</a>
                </div>

            </div>
        </>
    </li>
}