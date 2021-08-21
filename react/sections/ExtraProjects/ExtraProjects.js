import { useRef } from 'react';
import ExtraProject from '../../component/ExtraProject/ExtraProject';
import { useSideNavContext } from '../../context/sidenav-context';
import { useFadeIn } from '../../hooks/intersection-hook';
import classes from './ExtraProjects.module.css';

export default function ExtraProjects() {
    const extraRef = useRef();
    const scrollPos = useSideNavContext();

    const [isVisible] = useFadeIn(extraRef, () => {
        scrollPos.setScrollPos("Projects");
    });

    return <section className={`${classes.section}  ${isVisible ? classes.entry_class : ""}`} ref={extraRef}>
        <div className={classes.honorable_heading}>
            <h2>
                Some Honorable mentions
            </h2>
        </div>
        <div className={classes.extra_container}>
            <ExtraProject
                title="Course - Management"
                project_link="https://github.com/SafalFrom2050/course-management-system"
                project_desc={"A full-fledge university portal with student, tutor and admin section bulit in React."}
                tech_stack="React &nbsp; NodeJS &nbsp; Express &nbsp; MySQL  "
                hosted_link="N/A"
            />


            <ExtraProject
                title="Android Voice Recorder"
                project_link="https://github.com/KushalUpreti/VoiceRecorder"
                project_desc={"A voice recorder for Android with a lot of features and settings to tinker with."}
                tech_stack="Java &nbsp; Android-Studio &nbsp; Media-API  "
                hosted_link="N/A"
            />

            <ExtraProject
                title="RestAPI-Covid"
                project_link="https://github.com/KushalUpreti/RestApi-COVID-"
                project_desc={"A simple app that uses Rest API to display the live covid-19 status around the globe."}
                tech_stack="Java &nbsp; Android-Studio &nbsp; Rest  "
                hosted_link="N/A"
            />

            <ExtraProject
                title="Jetpack-TODO-App"
                project_link="https://github.com/KushalUpreti/Kotlin-Jetpack-TODO-app"
                project_desc={"A Kotlin TODO app that utilizes Jetpack libraries & Android Architecture Components."}
                tech_stack="Kotlin &nbsp; Android-Studio &nbsp; Jetpack"
                hosted_link="N/A"
            />


            <ExtraProject
                title="Notes"
                project_link="https://github.com/KushalUpreti/Room-Persistance"
                project_desc={"A note-keeping app that utilizes ROOM SQLite library to add, edit and delete notes."}
                tech_stack="Java &nbsp; Android-Studio &nbsp; Room-Persistence  "
                hosted_link="N/A"
            />

            <ExtraProject
                title="Calculator"
                project_link="https://github.com/KushalUpreti/Calculator"
                project_desc={"My first android app that allows us to perform basic arithmetic calculations"}
                tech_stack="Java &nbsp; Android-Studio"
                hosted_link="N/A"
            />
        </div>

    </section>
}