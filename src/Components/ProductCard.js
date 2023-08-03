import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function App() {

const items = useSelector((state) => state.allCarts.items) ; 
  return (
    <div className="m-2">
    <MDBContainer>
      <MDBRow className="mb-3">
       {items.map((item)=>(
         <MDBCol size="3" key={item.id}>
         <MDBCard>
           <MDBCardImage
             src= {item.image}
             position="top"
             alt="..."
           />
           <MDBCardBody>
             <MDBCardTitle>{item.title}</MDBCardTitle>
             <MDBCardText>{item.catagory} </MDBCardText>
             <MDBCardText>{`price $: ${item.price}`}</MDBCardText>
             <MDBBtn href="#">Add to Cart</MDBBtn>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       ))
       }
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
