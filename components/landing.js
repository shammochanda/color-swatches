import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./landing.module.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const Landing = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "",
        exit: "",
        exitActive: `${classes.LandingClosed}`,
      }}
    >
      <div className={classes.Landing}>
        <header>SWATCHES</header>

        <main className={classes.fadein}>
          <div>Watch Your Colors in Action</div>
          <div>
            <button onClick={props.onClick}>Get Started</button>
          </div>
        </main>
      </div>
    </CSSTransition>
  );
};

export default Landing;
