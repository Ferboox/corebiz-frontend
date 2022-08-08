import React, {useState} from "react";

import { MenuNav } from "./components/menuNav/MenuNav";
import { Slider } from "./components/slider/Slider";

export function App(){
    return(
    <>
        <MenuNav></MenuNav>
        <Slider></Slider>
    </>
)}