import React from "react";
import s from "./Fruits.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./../../img/8.1.webp";
import img2 from "./../../img/8.2.webp";
import img3 from "./../../img/8.3.webp";
import img4 from "./../../img/8.4.webp";
import img5 from "./../../img/8.5.jpg";
import img6 from "./../../img/8.6.webp";
import img7 from "./../../img/8.7.jpg";
import img8 from "./../../img/8.8.webp";
import img9 from "./../../img/9.1.webp";
import img10 from "./../../img/9.2.webp";
import img11 from "./../../img/9.3.webp";
import img12 from "./../../img/9.4.webp";


import img13 from "./../../img/10.1.webp";
import img14 from "./../../img/10.2.webp";
import img15 from "./../../img/10.3.webp";
import img16 from "./../../img/10.4.webp";



import { Card } from "react-bootstrap";

function Fruits() {
  return (
    <div>
      <Container>
        <Row>
          <h1 className={s.fruits}>Fruits</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img1} className="img-fluid" />
              <Card.Body>
                <Card.Title>Strawberry</Card.Title>
         
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img2} className="img-fluid" />
              <Card.Body>
                <Card.Title>Black Seedless Grapes</Card.Title>
        
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img3} className="img-fluid" />
              <Card.Body>
                <Card.Title>Pear</Card.Title>
             
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img4} className="img-fluid" />
              <Card.Body>
                <Card.Title>Lemon</Card.Title>
          
          
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img5} className="img-fluid" />
              <Card.Body>
                <Card.Title>Kiwi</Card.Title>
           
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img6} className="img-fluid" />
              <Card.Body>
                <Card.Title>Cherry</Card.Title>
         
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img7} className="img-fluid" />
              <Card.Body>
                <Card.Title>Grapefruit</Card.Title>
            
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img8} className="img-fluid" />
              <Card.Body>
                <Card.Title>Dragon Fruit</Card.Title>
            
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className={s.fruits}>Vegetables</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img9} className="img-fluid" />
              <Card.Body>
                <Card.Title>Strawberry</Card.Title>
         
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img10} className="img-fluid" />
              <Card.Body>
                <Card.Title>Black Seedless Grapes</Card.Title>
        
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img11} className="img-fluid" />
              <Card.Body>
                <Card.Title>Pear</Card.Title>
             
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img12} className="img-fluid" />
              <Card.Body>
                <Card.Title>Lemon</Card.Title>
          
          
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className={s.fruits}>Dried Fruit</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img13} className="img-fluid" />
              <Card.Body>
                <Card.Title>        Almonds - Raw
</Card.Title>
         
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img14} className="img-fluid" />
              <Card.Body>
                <Card.Title>        Pistachios - Premium - Raw
</Card.Title>
        
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img15} className="img-fluid" />
              <Card.Body>
                <Card.Title>        Dates - Black (Medjool) - Organic
</Card.Title>
             
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card>
              <Card.Img src={img16} className="img-fluid" />
              <Card.Body>
                <Card.Title>        Walnuts - Raw Premium
</Card.Title>
          
          
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Fruits;
