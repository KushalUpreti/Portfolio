import classes from './Contact.module.css';
import Input from '../../container/Input/Input';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../utils/validators';
import Button from '../../component/Button/Button';
import { useFadeIn } from '../../hooks/intersection-hook';
import { useRef } from 'react';
import { useSideNavContext } from '../../context/sidenav-context';
import { useNotificationContext } from '../../context/notify-context';

export default function Contact() {
    const contactRef = useRef();
    const scrollPos = useSideNavContext();
    const notifContext = useNotificationContext();

    const [isVisible] = useFadeIn(contactRef, () => {
        scrollPos.setScrollPos("Contact");
    });

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            subject: {
                value: '',
                isValid: false
            },
            email: {
                value: '',
                isValid: false
            },
            message: {
                value: null,
                isValid: false
            }
        },
        false
    );

    const submitFormHandler = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formState.inputs;
        if (name.value.trim() === '' || email.value.trim() === '' || subject.value.trim() === '' || message.value.trim() === '') {
            notifContext.showNotification("Nice try sussy boy", 3000, "Error");
            return;
        }
        let response = await fetch("https://formsubmit.co/ajax/kushalupreti101@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            })
        });
        if (response.status === 200) {
            notifContext.showNotification("Message sent successfully", 3000, "Success");
        }
    }

    return <section className={`${classes.contact_section}  ${isVisible ? classes.entry_class : ""}`} ref={contactRef}>
        <div className={classes.absolute_div} id="contact" />
        <h2>
            Contact me
        </h2>
        <div className={classes.contact_para}>
            <p>I&apos;m actively looking for a frontend internship position currently.
                If you want to work on a project with me or just want to say Hi, drop me a message below.
            </p>
        </div>

        <div className={classes.contact_flex}>
            <div className={classes.form_div}>
                <form className={classes.contact_form} onSubmit={submitFormHandler}>
                    <Input
                        id="name"
                        element="input"
                        type="text"
                        placeholder="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name."
                        onInput={inputHandler}
                        classes={classes}
                    />

                    <Input
                        id="subject"
                        element="input"
                        type="text"
                        placeholder="Subject"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid subject."
                        onInput={inputHandler}
                        classes={classes}
                    />

                    <Input
                        id="email"
                        element="input"
                        type="text"
                        placeholder="Email"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL]}
                        errorText="Please enter a valid email."
                        onInput={inputHandler}
                        classes={classes}
                    />

                    <Input
                        id="message"
                        element="textarea"
                        type="text"
                        placeholder="Message (30 characters minimun)"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(30)]}
                        errorText="Please enter a valid message of min length 30 characters."
                        onInput={inputHandler}
                        classes={classes}
                    />
                    <Button type="submit" disabled={!formState.isValid} text="Submit" />
                </form>
            </div>
            <div className={classes.map_div}>
                <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kathmandu+(Kushal%20Upreti)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"></iframe>
            </div>
        </div>

    </section>
}