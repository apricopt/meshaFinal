import React, { useState, createContext } from "react";

export const ProductContext = createContext();
export const TitleContext = createContext();


export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};


export const TitleProvider = (props) => {
  const [title, setTitle] = useState("");
  return (
    <TitleContext.Provider value={[title, setTitle]}>
      {props.children}
    </TitleContext.Provider>
  );
};






// export const FemaleProvider = (props) => {
//   const [female, setFemale] = useState([""]);
//   return (
//     <FemaleContext.Provider value={[female, setFemale]}>
//       {props.children}
//     </FemaleContext.Provider>
//   );
// };

// export const ModelCarrierProvider = (props) => {
//   const [modelCarrier , setModelCarrier] = useState(["carry karnay wali sarkar"]);
//   return (
//     <ModelCarrierContext.Provider value={[modelCarrier, setModelCarrier]}>
//       {props.children}
//     </ModelCarrierContext.Provider>
//   );

// }
