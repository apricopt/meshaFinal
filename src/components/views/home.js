import React, { useContext } from "react";
import  { SliderSimpler , Slider } from "../tinycomponents/slider";
import { Cardz } from "../tinycomponents/card";
import Shopbar from '../tinycomponents/shopbar';
import ShopZone from '../tinycomponents/shopzone';
import { Col, Row } from "reactstrap";

import {Sticky , StickyContainer} from 'react-sticky';

import {CartContext} from "../../cartcontext";

function MainHome() {

  const [cart , setCart] = useContext(CartContext);



      
      return (
     
            <div id="homeView">
        <Slider />
                    <StickyContainer>
                 
        <Row>
        {/* okay sidebar making */}
        <Col md="2">
        <Sticky>{({ style }) =><div style={style}><Shopbar/></div> }</Sticky>
        </Col>
        <Col md="10">
             <ShopZone/> 
        </Col>
        </Row>s
        </StickyContainer>

        </div>
  
      )


     
  }


export default MainHome;