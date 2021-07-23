import { useState } from 'react';
import classes from './TabLayout.module.css';

export default function TabLayout() {
    const [sliderActive, setSliderActive] = useState(false);

    return <div className={classes.tab_layout}>
        <div className={classes.selector_div}>
            <div className={classes.image_text_div}>

                <div onClick={() => { setSliderActive(false) }}>
                    <svg className={`${!sliderActive ? classes.svg_active : ""}`} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z" />
                    </svg>
                    <p>Web</p>
                </div>

                <div onClick={() => { setSliderActive(true) }}>
                    <svg className={`${sliderActive ? classes.svg_active : ""}`} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="48px" viewBox="0 0 20 20" width="48px" fill="#FFFFFF"><g><g><g><rect fill="none" height="20" width="20" /></g></g></g><g><path d="M14.36,8.14l1.57-2.72c0.14-0.24,0.06-0.54-0.18-0.68c-0.24-0.14-0.54-0.06-0.68,0.18l-1.6,2.78C12.4,7.25,11.23,7,10,7 S7.6,7.25,6.54,7.7l-1.6-2.78C4.8,4.68,4.49,4.6,4.25,4.74C4.01,4.87,3.93,5.18,4.07,5.42l1.57,2.72C3.15,9.52,1.39,12.04,1.06,15 h17.88C18.61,12.04,16.85,9.52,14.36,8.14z M6,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S6.55,13,6,13z M14,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S14.55,13,14,13z" /></g>
                    </svg>
                    <p>Android</p>
                </div>

            </div>

            <div className={classes.slider_div}>
                <div className={`${classes.slider} ${sliderActive ? classes.slider_active : ""}`} />
            </div>

        </div>

        <div className={classes.skills_content}>
            {!sliderActive ?
                <>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet tortor
                        nec turpis semper tincidunt. Pellentesque id porttitor ante, eget auctor quam Quisque tempus, velit.</p>
                    <h3>Concepts</h3>
                    <p>HTML, &nbsp; CSS, &nbsp; JS,	&nbsp; SQL,	&nbsp; Sass, &nbsp; Git, &nbsp; NPM, &nbsp; REST, &nbsp; ES6</p>
                    <h3>Tools</h3>
                    <p>React,	&nbsp;  NodeJs,	&nbsp; MongoDB,	&nbsp; ExpressJs, &nbsp; SQL, &nbsp; NextJs</p>
                </>
                :
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque facilisis elit mauris,
                        id ullamcorper orci mollis ut. Lorem ipsum dolor sit, consectetur adipiscing elit finibus urna sed eros
                        elementum placerat.</p>
                    <h3>Concepts</h3>
                    <p>Kotlin,	&nbsp; MVVM, &nbsp; Dependency Injection, &nbsp; JUnit Testing,	&nbsp; Deployment</p>
                    <h3>Tools</h3>
                    <p>Jetpack,	&nbsp; Hilt, &nbsp; Retrofit, &nbsp; Picasso,	&nbsp; Firebase, &nbsp; MLKit</p>
                </>
            }
        </div>
    </div>
}