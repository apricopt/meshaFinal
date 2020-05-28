import React, { useState, useContext , useEffect } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";
import {CartCardz} from './card';

import { Row, Col } from "reactstrap";
import { DetailbarContext } from "../../detailbarcontext";
import {ModelCarrierContext} from "../../modelcontext";

const axios = require('axios');

function SidebarBag() {
 
  const [sidebar, setSidebar] = useContext(SidebarContext);
 

  // function SetSidebarOpen(open) {
  //     setSidebar(open)
  // }
  

  return (
    <Sidebar
      sidebar={
        <div>
          <button
            onClick={() => setSidebar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span>Back to Shopping
          </button>⁰

          <hr />
          <button className="btn btn-block btn-warning" >Proceed to checkout</button>
          <InsideSidebar />
        </div>
      }
      pullRight={true}
      open={sidebar}
      styles={{
        sidebar: {
          background: "rgba(55, 3, 60, 0.79)",
          position: "fixed",
         
          padding: "10px 10px",
          width: "30%",
          color: "white",
        },
      }}
    >
      {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
          Open sidebar
        </button>  */}
    </Sidebar>
  );
}

function InsideSidebar() {


let data = "";
  
  const [cart , setCart] = useContext(CartContext);
  const [ready , setReady]= useState(false);


  // console.log("yeh hall ha sidebar ka " , cart)

if(cart.status){

console.log(cart.status , cart.products)
     data = cart.products.map( item =>
      (
       <div className="p-2">
      <CartCardz productName={item.productName} productImg={item.productImg}  productPrice={item.productPrice}/>     </div>
    ) 
    , () => {
      setReady(true)
      console.log("g ma tru kar choreya")
    } )
   
    
    console.log("g mai yeh render karnay laga hun" , data)
   
    }
   
 return(
 <div>

   { data  }

   </div>
 
 )

}










// export function Detailbar() {
//   const [detailbar, setDetailbar] = useContext(DetailbarContext);

//   // function SetSidebarOpen(open) {
//   //     setSidebar(open)
//   // }
// console.log()
//   return (
//     <Sidebar
//       sidebar={
//         <div>
//           <button
//             onClick={() => setDetailbar(false)}
//             className="m-3 btn btn-bag btn-primary "
//           >
//             <span className="fas fa-chevron-left"></span>
//           </button>

//           <hr />
//           <InsideDetailbar />
//         </div>
//       }
     
//       open={detailbar}
//       docked={true}
//       styles={{
//         sidebar: {
//           background: "rgba(31, 31, 31, 0.87)",
//           position: "fixed",
//           padding: "",
//           width: "20%",
//           color: "white",
//         },
//       }}
//     >
//       {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
//           Open sidebar
//         </button>  */}
//     </Sidebar>
//   );
// }

// function InsideDetailbar() {
//  return (
//    <h1>mai detail sidebar hun</h1>
//  )
  
// }



export default SidebarBag;
