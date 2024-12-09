import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Nav, 
  Form,
  Badge
} from 'react-bootstrap';
import { useCart } from '/src/components/CartContext';
import '/src/Styles/Menu.css';
import menuData from '/src/menu.json';
import Cart from '/src/components/Cart';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use cart context
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    totalCartItems, 
    totalCartPrice, 
    openCart 
  } = useCart();

  // Get unique categories
  const categories = ['All', ...new Set(menuData.categories.map(cat => cat.name))];

  // Filter items based on category and search term
  const filteredItems = selectedCategory
    ? menuData.categories
        .find(cat => cat.name === selectedCategory)
        .items.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : menuData.categories.flatMap(cat => cat.items)
        .filter(item => 
          item.name.toLowerCase().includes(searchTerm .toLowerCase())
        );

  return (
    <Container className="menu-container py-5">
      {/* Cart Summary */}
      <Row className="mb-4">
        <Col className="text-end">
          <Button 
            variant="outline-primary" 
            className="position-relative"
            onClick={openCart} // Open cart modal
          >
            Cart
            <Badge bg="primary" className="ms-2">
              {totalCartItems}
            </Badge>
            <span className="ms-2">
              ${totalCartPrice.toFixed(2)}
            </span>
          </Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h1 className="display-4 text-center menu-title">
            Little Lemon Menu
          </h1>
        </Col>
      </Row>

      {/* Category and Search Filters */}
      <Row className="mb-4">
        <Col md={8}>
          <Nav 
            variant="pills" 
            className="menu-categories"
            activeKey={selectedCategory}
          >
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Nav.Link 
                  eventKey={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col md={4}>
          <Form.Control 
            type="text" 
            placeholder="Search menu items..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </Col>
      </Row>

      {/* Menu Items Grid */}
      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="menu-item-card">
              <div className="card-img-container">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-item-image"
                />
                <div className="price-badge">${item.price.toFixed(2)}</div>
              </div>
              <Card.Body>
                <Card.Title className="item-name">{item.name}</Card.Title>
                <Card.Text className="item-description">
                  {item.description}
                </Card.Text>
                
                {/* Cart Control */}
                {cartItems[item.id] ? (
                  <div className="d-flex justify-content-between align-items-center">
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{cartItems[item.id].quantity}</span>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="primary" 
                    onClick={() => addToCart(item)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* No Results State */}
      {filteredItems.length === 0 && (
        <Row>
          <Col className="text-center">
            <p className="no-results">
              No items found matching your search or category.
            </p>
          </Col>
        </Row>
      )}

      <Cart />
    </Container>
  );
}

export default Menu;