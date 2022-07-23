import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import featuresData from './featuresData.js'

function App() {

  let [shoes] = useState(featuresData);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Mero's mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Features shoes={shoes} />

    </div>
  );
}

const Features = (props) => {

  const imgURL = "https://codingapple1.github.io/shop/shoes";

  return (
    <div className="container">
      <div className="row">
        {
          props.shoes.map((data, i) => {
            return (
              <div className="col-md-4">
                <img src={imgURL + (i + 1) + '.jpg'} width="80%" alt='' />
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].price}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
