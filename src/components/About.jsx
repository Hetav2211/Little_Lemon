import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  ListGroup,
  Alert
} from 'react-bootstrap';
import { 
  GeoAlt, 
  Telephone, 
  Envelope, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'react-bootstrap-icons';
import '../Styles/About.css';

function About() {
  return (
    <div className="about-section">
      {/* Hero Section */}
      <Container className="hero-section text-center">
        <Row className="justify-content-center">
          <Col md={8} className="hero-content">
            <h1 className="display-4 text-white mb-4">
              Little Lemon Restaurant
            </h1>
            <p className="lead text-white mb-4">
              Authentic Mediterranean Cuisine 
              Crafted with Passion and Tradition
            </p>
            <Link 
              to="/menu" 
              className="btn btn-warning btn-lg"
            >
              Explore Our Menu
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Restaurant Story */}
      <Container className="story-section">
        <Row>
          <Col>
            <h2 className="mb-4 text-primary">Our Culinary Journey</h2>
            <p>
              Little Lemon was founded in 2005 by John Wick, 
              a passionate chef dedicated to bringing authentic 
              Mediterranean flavors to our community.
            </p>
            <p>
              Inspired by family recipes and a love for fresh, 
              local ingredients, we create dishes that tell 
              a story of tradition and innovation.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Contact and Social Section */}
      <Container>
        <Row className="g-4">
          {/* Contact Information */}
          <Col md={6}>
            <Card className="contact-card h-100">
              <Card.Header className="bg-primary text-white">
                Contact Information
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <GeoAlt className="contact-icon" />
                  Samanvay Status 2, Vadodara
                </ListGroup.Item>
                <ListGroup.Item>
                  <Telephone className="contact-icon" />
                  (0265) 212-4567
                </ListGroup.Item>
                <ListGroup.Item>
                  <Envelope className="contact-icon" />
                  info@littlelemon.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <Clock className="contact-icon" />
                  Mon-Sun: 11:30 AM - 10:00 PM
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Social Media */}
{/* Social Media */}
      <Col md={6}>
        <Card className="social-card h-100">
          <Card.Header className="social-card-header text-white bg-primary">
            Connect with Us
          </Card.Header>
          <Card.Body className="social-card-body d-flex flex-column align-items-center">
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link facebook"
              >
                <Facebook className="social-icon" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link instagram"
              >
                <Instagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link twitter"
              >
                <Twitter className="social-icon" />
                <span>Twitter</span>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
        </Row>
       </Container>

      {/* Our Values */}
      <Container className="values-section">
        <Row>
          <Col>
            <h2 className="text-center mb-5">Our Core Values</h2>
            <Row>
              <Col md={4}>
                <div className="value-item">
                  <h4 className="text-primary">Fresh Ingredients</h4>
                  <p>
                    We source local, organic ingredients 
                    to ensure the highest quality dishes.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="value-item">
                  <h4 className="text-primary">Family Tradition</h4>
                  <p>
                    Our recipes are passed down through generations, 
                    preserving authentic flavors.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                 <div className="value-item">
                  <h4 className="text-primary">Community</h4>
                  <p>
                    We believe in supporting local farmers 
                    and creating a welcoming dining experience.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <Container className="cta-section">
        <Row>
          <Col>
            <Alert variant="primary">
              <h3>Join Us for an Unforgettable Dining Experience</h3>
              <Link to="/BookTable">
                <Button 
                  variant="success" 
                  size="lg" 
                  className="cta-button"
                >
                  Make a Reservation
                </Button>
              </Link>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;