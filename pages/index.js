import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeadMeta from "../components/headmeta";
import Landing from "../components/landing";
import Functionality from "../components/functionality";

export default function Home() {
  const [entered, setEntered] = useState(false);

  const enterHandler = () => {
    setEntered(true);
  };

  return (
    <div styles={{backgroundColor: "white"}}>
      <HeadMeta metacontent="Swatches">Swatches</HeadMeta>

      <Landing show={!entered} onClick={enterHandler}></Landing>
      <Functionality />
    </div>
  );
}
