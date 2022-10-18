import { Fragment } from "react";
import { useState } from "react";
import classes from "./colors.module.css";

const Colors = () => {
  const [divTree, setDivTree] = useState({
    num: 1,
    bgcolor: "rgb(0,0,0)",
    fontcolor: "rgb(1,1,1)",
    children: [
      {
        num: 2,
        bgcolor: [255,255,255],
        fontcolor: [0,0,0],
        children: [{
            num: 3,
            bgcolor: [155,0,0],
            fontcolor: [0,0,0],
            children: [],
          }],
      },
    ],
  });

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
              className={classes.children}
              style={{
                backgroundColor: `rgb(${child["bgcolor"]})`,
                color: `rgb(${child["fontcolor"]})`,
              }}
            >
              Sample Text {returnDiv(child["children"])}
            </div>
          ))}{" "}
      </Fragment>
    );
  };

  //   for (let i = 0; i < divTree.length; i++) {
  //     //check div num
  //   }

  return (
    <div className={classes.first}>
      Sample Text {returnDiv(divTree["children"])}
    </div>
  );
};

export default Colors;

/*
import React from 'react'

const Tree = {{ data = []}} => {
    return (
        <div>
            <ul>
             {
                data.map(tree => (
                    <TreeNode node ={tree} />
                ))
             }
            </ul>
        </div>
    )
}

const TreeNode = ({node}) => {
    const [childVisible, setChildVisibility] = useState(false)

    const hasChild = node.chilren ? true : false

    return (
        <li>
            <div>
                {
                    hasChild && (
                        <div>
                            <fontawesomeicon>
                        </div>
                    )

                    <div>
                        
                    </div>
                }
            </div>
            {

            }
        </li>
    )
}


*/
