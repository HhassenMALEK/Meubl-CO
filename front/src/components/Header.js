//import des icone panier et compte
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//import bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import router pour lier les pages .
import { Link } from 'react-router-dom';

// Style bootstrap de Header
function Header() {
  return (
    <Navbar style={{ backgroundColor: '#6D9075', color: 'white'}}>
      <Container>
      <Link to = "/"><Navbar.Brand><img src="img/logo.svg" alt="logo meubl&Co"/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to = "/canapes"><img class="img-nav-link" src="../img/sofa.png" alt="Sofa from Flaticon"/>Canapés</Link></Nav.Link>
            <Nav.Link ><Link to = "/tables"><img class="img-nav-link" src="../img/table.png" alt="Table from Flaticon"/>Tables</Link></Nav.Link>
            <Nav.Link ><Link to = "/chaises"><img class="img-nav-link" src="../img/chair.png" alt="Chair from Flaticon"/>Chaises</Link></Nav.Link>
            <Nav.Link ><Link to = "/rangements"><img class="img-nav-link" src="../img/wardrobe.png" alt="Wardrobe from Flaticon"/>Rangements</Link></Nav.Link>
            <Nav.Link ><Link to = "/luminaires"><img class="img-nav-link" src="../img/lamp.png" alt="Lamp from Flaticon"/>Luminaires</Link></Nav.Link>
            <Nav.Link ><Link to = "/decoration"><img class="img-nav-link" src="../img/plant.png" alt="Plant from Flaticon"/>Décoration</Link></Nav.Link>
            <Nav.Link ><Link to = "/divers"><img class="img-nav-link" src="../img/3d.png" alt="3D from Flaticon"/>Divers</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link>
            <Link to = "/Vendre">
              <button className="btn btn-primary">Vendre</button>
            </Link>
            </Nav.Link>
            <Nav.Link><Link to = "/panier">
              <FontAwesomeIcon icon={faShoppingCart} /> </Link>
            </Nav.Link>
            <Nav.Link><Link to = "/connexion">
              <FontAwesomeIcon icon={faUser} /> </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
