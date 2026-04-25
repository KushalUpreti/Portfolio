import classes from "./About.module.css";
import Button from "../../component/Button/Button";
import { useFadeIn } from "../../hooks/intersection-hook";
import { useRef } from "react";
import { useSideNavContext } from "../../context/sidenav-context";
import Image from "next/image";

export default function About() {
  const aboutRef = useRef();
  const scrollPos = useSideNavContext();

  const [isVisible] = useFadeIn(aboutRef, () => {
    scrollPos.setScrollPos("About");
  });

  return (
    <section className={classes.section}>
      <div id="about" className={classes.about}></div>
      <div
        className={`${classes.flex_about}  ${isVisible ? classes.entry_class : ""}`}
      >
        <div className={classes.about_div}>
          <h2 className={classes.uni_h2}>About Me</h2>
          <p>
            Hi! &nbsp;I&apos;m Kushal Upreti. I&apos;m a software engineer with
            an interest in making innovative ideas accessible through web and
            mobile platforms. I have extensive experience in web development and
            native android application development.
          </p>
          <p ref={aboutRef}>
            I specialize in MERN stack with experience in SSR using NextJS and a
            hint of PHP. I have also worked with native apps for both Java and
            Kotlin codebase. I can optimally utilize a common backend for both
            web and app frontend for a product.
          </p>
          <Button
            click={() => {
              window.open("/assets/Resume.pdf", "_blank");
            }}
            text="Resume"
            type="button"
          />
        </div>

        <div className={classes.avatar_div}>
          <Image
            src="/assets/Headshot.png"
            alt="Headshot"
            width={250} // set desired width
            height={250} // set desired height
          />
        </div>
      </div>
    </section>
  );
}
