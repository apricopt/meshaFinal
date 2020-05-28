import React ,{useContext , useEffect , useState} from "react";
import {CardModel } from "../tinycomponents/card";
import {MaleContext }from "../../modelcontext";



//importing reactsrap 
import {Col , Row } from 'reactstrap';

const axios = require('axios');
let dataToRender= [""];
let cardsToRender=["dsad"];


function Men() {
    return (
      <h1>this is men page</h1>
    )
 
}

export default Men;
