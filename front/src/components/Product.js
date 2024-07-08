
import React from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";



const Product = ({ product }) => {
  return (
<MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBCardImage
              src={product.picturl}
              position="top"
              alt={product.name}
            />
            <MDBCardBody >
              <div className="text-center">
                <MDBCardTitle>{product.name}</MDBCardTitle>
              </div>
              <div>
              <p className='text-muted mb-4'>•Etat : {product.status} <br /> •Couleur : {product.color} <br /> •Matière : {product.material}</p>
              </div>
              <div>
                <p class="des">"{product.description}"</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span style={{flexGrow:'1'}}>•Dimensions : {product.width} x {product.height} x {product.depth} cm</span>
                  <span class="price">{product.price} €</span>
                <span><button className="btn btn-primary">Acheter</button></span>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
};

export default Product;
