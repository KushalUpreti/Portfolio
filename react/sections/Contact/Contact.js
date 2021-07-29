import classes from './Contact.module.css';
import Input from '../../container/Input/Input';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../utils/validators'

export default function Contact() {
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

    const submitFormHandler = (e) => {
        e.preventDefault();
    }

    return <section className={classes.contact_section}>
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
                        placeholder="Message"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(30)]}
                        errorText="Please enter a valid message of min length 30 characters."
                        onInput={inputHandler}
                        classes={classes}
                    />
                    <button type="submit" disabled={!formState.isValid}>Submit</button>
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