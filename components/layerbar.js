import { useState } from "react";
import Layer from "./layer";
import classes from "./layerbar.module.css";

const LayerBar = (props) => {
  const layers = ["1", "2", "3", "4"];

  const [openLayer1, setOpenLayer1] = useState(false);
  const [openLayer2, setOpenLayer2] = useState(false);
  const [openLayer3, setOpenLayer3] = useState(false);
  const [openLayer4, setOpenLayer4] = useState(false);

  const layer1ClickHandler = () => {
    setOpenLayer1((prevState) => !prevState);
    setOpenLayer2(false);
    setOpenLayer3(false);
    setOpenLayer4(false);
  };

  const layer2ClickHandler = () => {
    setOpenLayer2((prevState) => !prevState);
    setOpenLayer1(false);
    setOpenLayer3(false);
    setOpenLayer4(false);
  };

  const layer3ClickHandler = () => {
    setOpenLayer3((prevState) => !prevState);
    setOpenLayer1(false);
    setOpenLayer2(false);
    setOpenLayer4(false);
  };

  const layer4ClickHandler = () => {
    setOpenLayer4((prevState) => !prevState);
    setOpenLayer2(false);
    setOpenLayer3(false);
    setOpenLayer1(false);
  };

  const handlerArray = [
    layer1ClickHandler,
    layer2ClickHandler,
    layer3ClickHandler,
    layer4ClickHandler,
  ];

  const openArray = [openLayer1, openLayer2, openLayer3, openLayer4];

  return (
    <div className={classes.sidebar}>
      <ul>
        {layers.map((layer, index) => (
          <Layer
            key={index}
            num={layer}
            listOn={openArray[index]}
            handler={handlerArray[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default LayerBar;
