import React, { useState } from "react";
import { Card, Modal, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/custom.css";
import { IoPricetagOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          className="card-img-top mx-auto card-height"
        />
        <Card.Body>
          <Card.Title className="text-truncate">{product.title}</Card.Title>
          <Card.Subtitle className="text-capitalize text-secondary">
            {product.category}
          </Card.Subtitle>
          <Card.Text>
            <IoPricetagOutline /> ${product.price}
          </Card.Text>
          <Button variant="success" onClick={handleShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={product.image} fluid className="mb-5" />
          <p>{product.description}</p>
          <p className="text-capitalize">Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate} / 5</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
