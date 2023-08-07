import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/productSlice';

export default function App() {
  const{carts,totalQuantity} = useSelector((state)=> state.allCarts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  },[carts])
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/home"><span>All Product</span></Link>
        <Link to="/cart"><button type="button" class="btn btn-dark">cart ({totalQuantity})</button></Link>
      </MDBContainer>
    </MDBNavbar>
  );
}