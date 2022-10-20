import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorActions } from "../store/colors";
import classes from "./colors.module.css";

const Colors = () => {
  const colorValues = useSelector((state) => state.colors.layerColors);
  const colorTree = useSelector((state) => state.colors.layerNesting);

  const colorArr = [
    {
      num: 1,
      properties: { bgcolor: "rgb(0, 0, 0)", fontcolor: "rgb(1,1,1)" },
    },
  ];

  const returnDiv = (children) => {
    return (
      <Fragment>
        {children.length !== 0 &&
          children.map((child) => (
            <div
              key={child.num}
              className={classes.children}
              style={{
                backgroundColor: `rgba(${
                  colorValues[child.num - 1]["background"]["r"]
                },${colorValues[child.num - 1]["background"]["g"]},${
                  colorValues[child.num - 1]["background"]["b"]
                },${colorValues[child.num - 1]["background"]["a"]})`,
                color: `rgba(${colorValues[child.num - 1]["font"]["r"]},${
                  colorValues[child.num - 1]["font"]["g"]
                },${colorValues[child.num - 1]["font"]["b"]},${
                  colorValues[child.num - 1]["font"]["a"]
                })`,
              }}
            >
              Sample Text{" "}
              <div className={classes.smallblock}>
                {returnDiv(child["children"])}
              </div>
            </div>
          ))}{" "}
      </Fragment>
    );
  };

  return (
    <div
      className={classes.first}
      style={{
        backgroundColor: `rgba(${colorValues[0]["background"]["r"]},${colorValues[0]["background"]["g"]},${colorValues[0]["background"]["b"]},${colorValues[0]["background"]["a"]})`,
        color: `rgba(${colorValues[0]["font"]["r"]},${colorValues[0]["font"]["g"]},${colorValues[0]["font"]["b"]},${colorValues[0]["font"]["a"]})`,
      }}
    >
      Sample Text{" "}
      <div className={classes.smallblock}>
        {returnDiv(colorTree["children"])}
      </div>
    </div>
  );
};

export default Colors;
