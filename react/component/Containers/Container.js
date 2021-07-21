import React from 'react';
import classes from "./Container.module.css";

const Container = (props) => {
    return (
        <div style={{
            marginTop: `${props.marginTop}`,
            marginBottom: props.marginBottom || "0"
        }}
            className={classes.nav_link_container}>
            {props.children}
        </div>
    );
}

export default Container;