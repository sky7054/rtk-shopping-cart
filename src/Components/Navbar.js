import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/home"><span>All Product</span></Link>
        <Link to="/cart"><button type="button" class="btn btn-dark">Cart(0)</button></Link>
      </MDBContainer>
    </MDBNavbar>
  );
}