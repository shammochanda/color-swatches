import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorActions } from "../store/colors";
import ColorDropdown from "./colordropdown";
import classes from "./layer.module.css";

const Layer = (props) => {
  const dispatch = useDispatch();

  const [bgColors, setBgColors] = useState(false);

  const [fontColors, setFontColors] = useState(false);

  const [layerctrl, setLayerCtrl] = useState(false);

  const visible = useSelector(
    (state) => state.colors.layerColors[parseInt(props.num) - 1]["visible"]
  );

  const allColors = useSelector((state) => state.colors.layerColors);

  const disabled = useSelector(
    (state) => state.colors.layerColors[parseInt(props.num) - 1]["hasChild"]
  );

  const onClickHandler = (event) => {
    event.preventDefault();
    props.handler();
    setFontColors(false);
    setLayerCtrl(false);
    setBgColors(false);
  };

  const onBgClickHandler = (event) => {
    event.preventDefault();
    setFontColors(false);
    setLayerCtrl(false);
    setBgColors((prevState) => !prevState);
  };

  const onFontClickHandler = (event) => {
    event.preventDefault();
    setBgColors(false);
    setLayerCtrl(false);
    setFontColors((prevState) => !prevState);
  };

  const onLayerClickHandler = (event) => {
    event.preventDefault();
    setFontColors(false);
    setBgColors(false);
    setLayerCtrl((prevState) => !prevState);
  };

  const onCheckedChangeHandler = (event) => {
    dispatch(
      colorActions.changeVisibility({
        num: parseInt(props.num) - 1,
        checked: event.target.checked,
      })
    );
  };

  const onSelectChangeHandler = (event) => {
    dispatch(
      colorActions.changeParent({
        num: parseInt(props.num) - 1,
        parent: parseInt(event.target.value),
      })
    );
  };

  return (
    <div className={classes.toplayer}>
      <li className={classes.layer} onClick={onClickHandler}>
        Layer {props.num}
      </li>
      {props.listOn && (
        <ul className={classes.details}>
          <li onClick={onBgClickHandler}>Background</li>
          {bgColors && (
            <ColorDropdown type="background" layer={parseInt(props.num) - 1} />
          )}
          <li onClick={onFontClickHandler}>Font</li>
          {fontColors && (
            <ColorDropdown type="font" layer={parseInt(props.num) - 1} />
          )}

          {props.num !== "1" && (
            <Fragment>
              <li onClick={onLayerClickHandler}>Layer Control</li>
              {layerctrl && (
                <ul className={classes.layerplacement}>
                  <li>
                    <label
                      htmlFor={"visibility"}
                      style={{ marginRight: "8px" }}
                    >
                      Visible:
                    </label>
                    <input
                      type={"checkbox"}
                      id={"visibility"}
                      checked={visible}
                      onChange={onCheckedChangeHandler}
                      disabled={disabled}
                    />
                  </li>
                  <li className={classes.layercontrol}>
                    <label htmlFor={"placement"} style={{ marginRight: "8px" }}>
                      Layer Placement:
                    </label>
                    <select
                      id={"placement"}
                      value={`${allColors[props.num - 1]["parentLayer"]}`}
                      onChange={onSelectChangeHandler}
                      disabled={disabled}
                    >
                      {allColors
                        .filter((layer) => layer.num !== parseInt(props.num))
                        .filter((layer1) => layer1.visible)
                        .map((layer2) => (
                          <option
                            key={layer2.num}
                            value={`${layer2.num}`}
                          >{`${layer2.num}`}</option>
                        ))}
                    </select>
                  </li>
                </ul>
              )}
            </Fragment>
          )}
        </ul>
      )}
    </div>
  );
};

export default Layer;
