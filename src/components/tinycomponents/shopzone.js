import React ,  {useState , useContext , useEffect} from "react";
import { Row, Col } from "reactstrap";
import { Cardz } from "./card";
import { ProductContext , TitleContext } from "../../modelcontext";
import ProductSlide from './productslider';



const axios = require('axios');



function ShopZone() {
    const [product , setProduct] = useContext(ProductContext);
    const [title , setTitle] = useContext(TitleContext);
    const [ready , setReady ] = useState(false);
    let cardsToRender = [""];
    const server = "http://67.205.131.13:5002";
    

    // writting a function to shuffle featured products 
    


    if(product.length!==0) {


   
     
   
    
    cardsToRender = product.map( item => (
      
        <Col md="3">
        <Cardz image={ server + item.productImages[0].formats.small.url} 
        saraMaal={item}
         key={item.id}
        title={item.productName} 
        price={item.productPrice} 
        description={item.productDescription} 
        color={item.productColor}
        size={item.productSize}

        />
        </Col>
      ))

      

      
      

    }

  return (
    <React.Fragment>
      <div className="shopzone">
       
      <h1 className="text-center p-4 mt-3" id="maintitle">MyshaFashion Represents</h1>

  <h2 className="text-center" id="subtitle">{title}</h2>
        <Row>
         

           {cardsToRender}
          
        </Row>
      </div>
    </React.Fragment>
  );
}
export default ShopZone;
