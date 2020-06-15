import React, { useState, useContext , useEffect } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";
import {CartCardz} from './card';
import { NavLink  } from "react-router-dom";

import { Row, Col } from "reactstrap";
import { DetailbarContext } from "../../detailbarcontext";


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
          <NavLink
              
                exact
                to={"/checkout"}
                activeClassName="active"
                className="btn btn-block btn-warning"
              >
                Proceed to checkout
              </NavLink>



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
  

 

  // console.log("yeh hall ha sidebar ka " , cart)

if(cart.status){

console.log(cart.status , cart.products)
     data = cart.products.map( item =>
      (
       <div className="p-2">
      <CartCardz productName={item.Name} productImg={item.image}  productPrice={item.price}/>     </div>
    ) 
    )
    
  
   
   
   
    
    console.log("g yeh hai data ka keyword abhi filhal " , data)
   
    }
   
 return(
 <div>

   { data.length!==0 ?  data : <h3 className="mt-5 text-center">Cart seems to be empty!</h3>   }

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
