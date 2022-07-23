import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import featuresData from './featuresData.js'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(featuresData);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Mero's mall</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>
      
      // 7/23 router 관련 숙제부터 하자
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Cart shoes={shoes} />
          </>
        } />
        <Route path="/detail" element={<div>Detail Page</div>} />
      </Routes>
      
    </div>
  );
}

const Cart = (props) => {

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
