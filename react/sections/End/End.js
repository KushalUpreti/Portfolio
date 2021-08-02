import classes from './End.module.css';
import { useRef } from 'react';

export default function End() {
    const paraRef = useRef();

    const copyHandler = () => {
        paraRef.current.innerText = "Copied to clipboard";
        const text = "kushalupreti101@gmail.com";
        navigator.clipboard.writeText(text);
    }

    return <section>
        <div className={classes.email_container}>
            <p onClick={copyHandler} onMouseLeave={() => { paraRef.current.innerText = "Click to copy"; }}>
                kushalupreti101@gmail.com
            </p>
            <div className={classes.ctc}>
                <p ref={paraRef}>Click to copy</p>
            </div>

            <a href="https://github.com/KushalUpreti/Portfolio" target="_blank" rel="noreferrer">
                <p>Designed & Developed by Kushal Upreti</p>
            </a>
        </div>
    </section>

}