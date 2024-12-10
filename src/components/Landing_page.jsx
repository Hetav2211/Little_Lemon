import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Carousel,
  Modal
} from 'react-bootstrap';
import { 
  Calendar, 
  Cart, 
  List,
  Clock,
  GeoAlt,
  Telephone
} from 'react-bootstrap-icons';
import '../Styles/Landing_page.css';

import image1 from "/assets/land1.svg";
import image2 from "/assets/land2.svg";
import image3 from "/assets/land3.svg";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const quickActions = [
    {
      icon: <Calendar size={30} />,
      title: "Make a Reservation",
      description: "Book your table now",
      link: "/BookTable"
    },
    {
      icon: <List size={30} />,
      title: "View Menu",
      description: "Explore our dishes",
      link: "/menu"
    },
    {
      icon: <Cart size={30} />,
      title: "Order Online",
      description: "Takeout & Delivery",
      link: "/Menu"
    }
  ];

  const specialOffers = [
    {
      title: "Weekend Special",
      description: "Buy 1 Main Course, Get 2nd 50% Off",
      validDays: "Fri-Sun"
    },
    {
      title: "Lunch Combo",
      description: "3-Course Meal at Unbeatable Prices",
      validDays: "Mon-Thu, 11am-3pm"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3500); // Change image every 3 seconds
  
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Carousel */}
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        className="hero-carousel"
        controls={false}
      >
        {[image1, image2, image3].map((image, idx) => (
          <Carousel.Item key={idx}>
            <div 
              className="carousel-background" 
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  link="/BookTable"
                  className="me-3"
                >
                  Book a Table
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  onClick={() => setShowContactModal(true)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Quick Actions Section */}
      <Container className="quick-actions py-5">
        <Row>
          {quickActions.map((action, idx) => (
            <Col key={idx} md={4} className="text-center">
              <div className="quick-action-card">
                <div className="action-icon">{action.icon}</div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <Button 
                  variant="outline-primary" 
                  href={action.link}
                >
                  Learn More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Special Offers Section */}
      <Container className="special-offers py-5">
        <h2 className="text-center mb-4">Special Offers</h2>
        <Row>
          {specialOffers.map((offer, idx) => (
            <Col key={idx} md={6}>
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.description}</Card.Text>
                  <div className="offer-details">
                    <span className="offer-days">{offer.validDays}</span>
                    <Button variant="primary">Claim Offer</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Contact Modal */}
      <Modal 
        show={showContactModal} 
        onHide={() => setShowContactModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Little Lemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-info">
            <div className="contact-item">
              <GeoAlt className="me-2" />
              Samanvay status , Vadodara
            </div>
            <div className="contact-item">
              <Telephone className="me-2" />
              () 123-4567
            </div>
            <div className="contact-item">
              <Clock className="me-2" />
              Open Daily: 11:30 AM - 10:00 PM
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowContactModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LandingPage;