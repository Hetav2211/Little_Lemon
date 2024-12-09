import React from 'react';
import { 
  Modal, 
  Button, 
  ListGroup, 
  Row, 
  Col
} from 'react-bootstrap';
import { 
  FaShoppingCart, 
  FaShoppingBag, 
  FaTimes,
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import { useCart } from '/src/components/CartContext';
import '/src/Styles/Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    showCart, 
    closeCart, 
    addToCart, 
    removeFromCart, 
    totalCartItems, 
    totalCartPrice,
    clearCart 
  } = useCart();

  // Render cart item
  const renderCartItem = (item) => (
    <ListGroup.Item key={item.id} className="cart-item">
      <Row className="align-items-center">
        {/* Product Image */}
        <Col xs={3} md={2}>
          <div className="cart-item-image-container">
            <img 
              src={item.image} 
              alt={item.name} 
              className="cart-item-image"
            />
          </div>
        </Col>

        {/* Product Details */}
        <Col xs={5} md={4}>
          <h6 className="cart-item-name">{item.name}</h6>
          <p className="cart-item-price text-muted">
            ${item.price.toFixed(2)}
          </p>
        </Col>

        {/* Quantity Controls */}
        <Col xs={4} md={4}>
          <div className="quantity-controls">
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => removeFromCart(item)}
              className="quantity-btn"
            >
              <FaMinus />
            </Button>
            <span className="quantity-display">{item.quantity}</span>
            <Button 
              variant="outline-success" 
              size="sm"
              onClick={() => addToCart(item)}
              className="quantity-btn"
            >
              <FaPlus />
            </Button>
          </div>
        </Col>

        {/* Total Price */}
        <Col xs={2} md={2}>
          <strong className="item-total-price">
            ${(item.price * item.quantity).toFixed(2)}
          </strong>
        </Col>
      </Row>
    </ListGroup.Item>
  );

  // Render empty cart state
  const renderEmptyCart = () => (
    <div className="empty-cart-container">
      <FaShoppingBag className="empty-cart-icon" />
      <p className="empty-cart-message">Your cart is empty</p>
    </div>
  );

  return (
    <Modal 
      show={showCart} 
      onHide={closeCart} 
      size="lg" 
      centered
      className="cart-modal"
    >
      <Modal.Body className="p-0">
        <div className="cart-modal-content">
          {/* Cart Header */}
          <div className="cart-header">
            <div className="cart-header-left">
              <FaShoppingCart className="cart-header-icon" />
              <h4 className="cart-header-title">
                Your Cart
                <span className="cart-items-count">
                  {totalCartItems}
                </span>
              </h4>
            </div>
            <button 
              className="cart-close-btn" 
              onClick={closeCart}
            >
              <FaTimes />
            </button>
          </div>

          {/* Cart Body */}
          <div className="cart-body">
            {Object.values(cartItems).length === 0 
              ? renderEmptyCart() 
              : (
                <ListGroup variant="flush">
                  {Object.values(cartItems).map(renderCartItem)}
                </ListGroup>
              )
            }
          </div>

          {/* Cart Footer */}
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-summary-item">
                <span>Total Items:</span>
                <strong>{totalCartItems}</strong>
              </div>
              <div className="cart-summary-item">
                <span>Total:</span>
                <strong>${totalCartPrice.toFixed(2)}</strong>
              </div>
            </div>

            <div className="cart-actions">
              <Button 
                variant="secondary" 
                onClick={closeCart}
                className="cart-action-btn"
              >
                Continue Shopping
              </Button>
              <Button 
                variant="danger" 
                onClick={clearCart}
                className="cart-action-btn"
              >
                Clear Cart
              </Button>
              <Button 
                variant="primary"
                disabled={totalCartItems === 0}
                className="cart-action-btn"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;