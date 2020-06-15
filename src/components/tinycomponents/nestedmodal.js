import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProductSlide from "./productslider";
import { CartContext } from "../../cartcontext";
import {SidebarContext} from "../../sidebarcontext";

// sizeCollector function starts

// sizecollector ends

const DetailModal = props => {
  const [sidebar, setSidebar] = useContext(SidebarContext);
  const [cart, setCart] = useContext(CartContext);
  const [size, setSize] = useState("none");

  // function for collecting the size starts
  function sizeCollector(e) {
    console.log("size collection k liye ready ", e.target.parentNode);
    setSize(e.target.innerHTML, () =>
      console.log("g ab state yeh set ho chuki hai ", size)
    );
    // e.target.nextSibling.backgroundColor ="white";
    // e.target.nextSibling.nextSibling.backgroundColor ="white";
    // e.target.nextSibling.nextSibling.nextSibling.backgroundColor ="white";
  }

  function addToCart(e) {
    const server = "http://67.205.131.13:5002";
    console.log(
      "yethis is the proceeding pages ready to send to the cart ",
      props.saraMaal
    );
    console.log("also i got the size", size);
    let gender = "";
    if (props.saraMaal.mcategory) {
      gender = "Men Product";
    } else if (props.saraMaal.wcategory) {
      gender = " Women Product";
    }

    let productContainer = {
      id: props.saraMaal.id,
      Name: props.saraMaal.productName,
      mainCategory: gender,
      subCategory: props.saraMaal.mcategory || props.saraMaal.wcategory,
      size: size,
      image: server + props.saraMaal.productImages[0].formats.small.url,
      price: props.saraMaal.productPrice
    };

    setCart(
      {
        status: true,
        products: cart.products.concat(productContainer)
      }
      
    );
    setModal(!modal);
    setSidebar(true);
  }

  // size collection function ends

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = e => {
    setModal(!modal);
  };

  // setting up which sizes will be shown
  let sizesBox = "";

  if (props.saraMaal.mcategory == 2 || props.saraMaal.mcategory == 1) {
    sizesBox = (
      <div>
        <button className=" btn btn-radio border" onClick={sizeCollector}>
          6
        </button>
        <button className=" btn btn-radio border" onClick={sizeCollector}>
          6.5
        </button>
        <button className="btn btn-radio border" onClick={sizeCollector}>
          7
        </button>
        <button className="btn btn-radio border" onClick={sizeCollector}>
          7.5
        </button>
        <button className="btn btn-radio border" onClick={sizeCollector}>
          8
        </button>
      </div>
    );
  } else if (props.saraMaal.wcategory == 2 || props.saraMaal.wcategory == 4) {
    sizesBox = (
      <div>
        <button className=" btn btn-radio border" onClick={sizeCollector}>
          xs
        </button>
        <button className=" btn btn-radio border" onClick={sizeCollector}>
          sm
        </button>
        <button className="btn btn-radio border" onClick={sizeCollector}>
          md
        </button>
        <button className="btn btn-radio border" onClick={sizeCollector}>
          lg
        </button>
      </div>
    );
  } else {
    sizesBox = <span>Default Size</span>;
  }

  // setting of sizes ends

  // setting stock availability
  let stock = "";
  if (props.saraMaal.productAvailability == "inStock") {
    stock = <span className="text-success">In stock</span>;
  } else if (props.saraMaal.productAvailability == "outOfStock") {
    stock = <span className="text-danger">Out of stock</span>;
  }

  // stock availabity ends

  // setting of cart button starts

  let btn = " ";
  if (props.buttonLabel == "Add to cart") {
    btn = (
      <Button
        className="btn-sm"
        onClick={addToCart}
        style={{ backgroundColor: "rgb(61, 15, 95)" }}
      >
        Add To Cart
      </Button>
    );
  } else {
    btn = (
      <Button
        className="btn-sm"
        onClick={addToCart}
        style={{ backgroundColor: "rgb(61, 15, 95)" }}
      >
        Add To Cart
      </Button>
    );
  }

  // setting of cart button ends

  // card walay ka color
  let style = {};
  if (props.buttonLabel == "Add to cart") {
    style = {
      background: "rgb(61, 15, 95)"
    };
  } else {
    style = {
      background: "blue"
    };
  }

  // card walay ends

  return (
    <div style={{}}>
      <Button
        onClick={toggle}
        style={style}
        className="btn btn-sm btn-modal"
      >
        {buttonLabel}
      </Button>
      <Modal
        lg
        isOpen={modal}
        toggle={toggle}
        className="modal-lg"
        style={{ background: "green" }}
      >
        <ModalHeader  className="modalHeader" toggle={toggle}>{props.saraMaal.productName}</ModalHeader>
        <ModalBody className="modalBody">
          <div className="container-fluid mainModal">
            <div className="row">
              <div className="col-md-6">
                <ProductSlide images={props.saraMaal.productImages} />
              </div>
              <div className="col-md-6 border p-3">
                <p className="modalDescription">
                  {props.saraMaal.productDescription}
                </p>
                <p>{props.saraMaal.productSize}</p>
                <p className="modalPrice">Price: ${props.saraMaal.productPrice}</p>
                <div id="selectant border">
                  <p>Availability: {stock}</p>

                  {size == "none" ? (
                    <div>
                      <p>Select the size:</p>
                      {sizesBox}
                    </div>
                  ) : (
                    <div>
                      <p style={{ color: "purple" }} className=" p-3">
                        You've Selected: {size}{" "}
                        <button
                          className="btn btn-link"
                          onClick={() => setSize("none")}
                        >
                          change
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          {btn}
          <Button color="secondary" className="btn-sm" onClick={toggle}>
            Go Back
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DetailModal;
