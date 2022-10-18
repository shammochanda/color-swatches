import Colors from "./colors";
import classes from "./fullbox.module.css"

const FullBox = () => {
    return (
        <div className={classes.fullbox}>
            <div className={classes.layers}>Layers</div>
            <div className={classes.colors}><Colors /></div>
            <div className={classes.getColors}>Get these Colors</div>
        </div>
    );
};

export default FullBox;