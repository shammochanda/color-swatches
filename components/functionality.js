import classes from "./functionality.module.css";
import FullBox from "./fullbox";

const Functionality = (props) => {
  return (
    <div className={classes.functionality}>
      <header>SWATCHES</header>

      <main className={classes.fadein}>
        <div>Pick A Color, Any Color</div>
        <FullBox />
      </main>
    </div>
  );
};

export default Functionality;
