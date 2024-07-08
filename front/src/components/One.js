
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



const One = ({ one }) => {
  return (
<MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBCardImage
              src={one.picturl}
              position="top"
              alt={one.name}
            />
            <MDBCardBody >
              <div className="text-center">
                <MDBCardTitle>{one.name}</MDBCardTitle>
              </div>
              <div>
              <p className='text-muted mb-4'>•Etat : {one.status} <br /> •Couleur : {one.color} <br /> •Matière : {one.material}</p>
              <p>•Dimensions : {one.width} x {one.height} x {one.depth} cm</p>
              </div>
              <div>
                <div className="justify-content-between">
                  <p>•Prix : {one.price} €</p>
                  <p><button className="btn btn-primary">En savoir plus</button></p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
};

export default One;