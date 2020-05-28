import React , {useContext , useState} from 'react';

//importing the context of sidebars
import {DetailbarContext} from '../../detailbarcontext';
import {ModelCarrierContext} from '../../modelcontext';
import {CartContext} from '../../cartcontext';



import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

 export const Cardz = (props) => {

  const [cart , setCart] = useContext(CartContext);
const [add , setAdded] = useState(["Add to Cart" , false]);

   function added(e) {
     setAdded(["Added" , true])
     let cardaya = e.target.parentNode.parentNode;
   

     let productaya = {
      productId: "null",
      productImg: cardaya.children[0].src,
      productName: cardaya.children[1].children[0].innerText,
      productPrice: cardaya.children[1].children[1].innerText,


  }
  
  setCart( {     
   status : true, 
     products : cart.products.concat(productaya)
});

  console.log("yeh hal hai card ka " , cart);



;   }

let style = {
 
  background: add[1] ? "green" : "blue",

}
  return (
    <div class="cardz">
      <Card >
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>Price:</CardSubtitle>
          <CardText>okay so here is the text for the description</CardText>
          
          <Button style={style} onClick={added}>{add[0]}</Button>
  
        </CardBody>
      </Card>
    </div>
  );
  
};



export const CartCardz = (props) => {
  return (
    <div class="cartcardz">
      <Card >
        <CardImg top width="100%" src={props.productImg} alt="Card image cap" />
        <CardBody>
        <CardTitle>{props.productName}</CardTitle>
  <CardSubtitle>Price:{props.productPrice}</CardSubtitle>
          <CardText>okay so here is the text for the description</CardText>
          
          <Button color="danger">Remove from Cart</Button>
  

        </CardBody>
      </Card>
    </div>
  );
  
};


