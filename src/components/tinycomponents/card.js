import React, { useContext, useState } from "react";
import DetailModal from "../tinycomponents/nestedmodal";

//importing the context of sidebars
import { DetailbarContext } from "../../detailbarcontext";
import { ModelCarrierContext } from "../../modelcontext";
import { CartContext } from "../../cartcontext";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export const Cardz = props => {
  const [cart, setCart] = useContext(CartContext);
  const [add, setAdded] = useState(["Add to Cart", false]);

  //    function added(e) {
  //      setAdded(["Added" , true])
  //      let cardaya = e.target.parentNode.parentNode;

  //      let productaya = {
  //       productId: "null",
  //       productImg: cardaya.children[0].src,
  //       // productName: cardaya.children[1].children[0].innerText,
  //       // productPrice: cardaya.children[1].children[1].innerText,

  //   }

  //   setCart( {
  //    status : true,
  //      products : cart.products.concat(productaya)
  // });

  // ;   }

  function tuCallKarwa() {
  console.log("acha mai call karwata hun ")

  }

  let style = {
    background: add[1] ? "green" : "#3d0f5f"
  };
  return (
    <div class="cardz"  >
      <div class="cardandr py-2">
        <div className="p-2 img-fluid" style={{}}>
          <img
            top
            style={{ width: "100%", height: 200, objectFit: "contain" }}
            src={props.image}
            alt="Card image cap"
            className="productImage"
          />
        </div>
        <div>
          <h6
            className="text-center font-weight-bold small"
            style={{ height: 30 }}
          >
            {props.title}
          </h6>
          <p className="small priceTag text-center">Price:${props.price}</p>

          {/* <CardText className="small">{props.description}</CardText>
        <p className="small" sr-only>Size:{props.size}</p>
       <p className="small" sr-only>Color:{props.color}</p> */}

          <div className="d-flex justify-content-around">
            {/* <Button style={style} className="btn-sm mx-1" onClick={added}>{add[0]}</Button> */}
            <DetailModal saraMaal={props.saraMaal} buttonLabel="Add to cart" />
            <DetailModal saraMaal={props.saraMaal} buttonLabel="View Detail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartCardz = props => {
  return (
    <div class="cartcardz">
      <Card>
        <div className="row">
          <div className="col-md-4">
            <CardImg
              top
              width="100%"
              src={props.productImg}
              alt="Card image cap"
            />
          </div>

          <div className="col-md-8">
            <CardBody>
              <CardTitle>{props.productName}</CardTitle>

      
              <hr />
              <CardSubtitle>Price: ${props.productPrice}</CardSubtitle>

              {/* <Button color="danger" className="btn-sm">Remove from Cart</Button> */}
            </CardBody> 
          </div>
        </div>
      </Card>
    </div>
  );
};
