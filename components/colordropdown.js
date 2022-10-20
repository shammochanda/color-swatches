import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorActions } from "../store/colors";
import classes from "./colordropdown.module.css";

const ColorDropdown = (props) => {
  const dispatch = useDispatch();

  const colorValues = useSelector(
    (state) => state.colors.layerColors[props.layer][props.type]
  );

  const [redInput, setRedInput] = useState(colorValues["r"]);
  const [greenInput, setGreenInput] = useState(colorValues["g"]);
  const [blueInput, setBlueInput] = useState(colorValues["b"]);
  const [opacityInput, setOpacityInput] = useState(colorValues["a"]);

  const redInputChangeHandler = (event) => {
    setRedInput(event.target.value);
    dispatch(
      colorActions.changeColor({
        num: props.layer,
        bgOrFont: props.type,
        color: "r",
        value: event.target.value,
      })
    );
  };

  const greenInputChangeHandler = (event) => {
    setGreenInput(event.target.value);
    dispatch(
      colorActions.changeColor({
        num: props.layer,
        bgOrFont: props.type,
        color: "g",
        value: event.target.value,
      })
    );
  };

  const blueInputChangeHandler = (event) => {
    setBlueInput(event.target.value);
    dispatch(
      colorActions.changeColor({
        num: props.layer,
        bgOrFont: props.type,
        color: "b",
        value: event.target.value,
      })
    );
  };

  const opacityInputChangeHandler = (event) => {
    setOpacityInput(event.target.value);
    dispatch(
      colorActions.changeColor({
        num: props.layer,
        bgOrFont: props.type,
        color: "a",
        value: event.target.value,
      })
    );
  };

  return (
    <ul className={classes.Dropdown}>
      <li>
        <label htmlFor={"r"} style={{ marginRight: "6px" }}>
          r:{" "}
        </label>
        <input
          id={"r"}
          type={"range"}
          min="0"
          max="255"
          step={"1"}
          onChange={redInputChangeHandler}
          value={redInput}
        />
        <input
          type={"number"}
          className={classes.numInput}
          value={redInput}
          onChange={redInputChangeHandler}
        />
      </li>
      <li>
        <label htmlFor={"g"}>g: </label>
        <input
          id={"g"}
          type={"range"}
          min="0"
          max="255"
          step={"1"}
          value={greenInput}
          onChange={greenInputChangeHandler}
        />
        <input
          type={"number"}
          className={classes.numInput}
          value={greenInput}
          onChange={greenInputChangeHandler}
        />
      </li>
      <li>
        <label htmlFor={"b"}>b: </label>
        <input
          id={"b"}
          type={"range"}
          min="0"
          max="255"
          step={"1"}
          value={blueInput}
          onChange={blueInputChangeHandler}
        />
        <input
          type={"number"}
          className={classes.numInput}
          value={blueInput}
          onChange={blueInputChangeHandler}
        />
      </li>
      <li>
        <label htmlFor={"a"} style={{ marginRight: "2px" }}>
          a:{" "}
        </label>
        <input
          id={"a"}
          type={"range"}
          min="0"
          max="1"
          step={"0.01"}
          value={opacityInput}
          onChange={opacityInputChangeHandler}
        />
        <input
          type={"number"}
          className={classes.numInput}
          value={opacityInput}
          onChange={opacityInputChangeHandler}
        />
      </li>
    </ul>
  );
};

export default ColorDropdown;
