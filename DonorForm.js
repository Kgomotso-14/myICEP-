import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap'

const DonorForm = ({ onAddItem }) => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [dateCooked, setDateCooked] = useState('');
  const [timeCooked, setTimeCooked] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(quantity) < 0) {
      alert('Quantity cannot be negative');
      return;
    }

    const newItem = {
      foodItem,
      quantity,
      description,
      dateCooked,
      timeCooked,
      image
    };

    onAddItem(newItem);

    // Reset form fields
    setFoodItem('');
    setQuantity('');
    setDescription('');
    setDateCooked('');
    setTimeCooked('');
    setImage(null); // Clear the image
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity.toString());
    } else {
      alert('Quantity must be a non-negative number');
    }
  };

  return (
    <div style={{ 
      backgroundImage: 'linear-gradient(to bottom, #717171 0%, #e9ecef 100%)',
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '0'
    }}>
      <Container style={{ maxWidth: '800px' }}>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <div style={{ 
              backgroundColor: '#717171', 
              padding: '5rem',  // Increased padding for larger content
              borderRadius: '10px', 
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', 
              color: 'white'
            }}>
              <Form onSubmit={handleSubmit}>
                <h1 className="text-center">Donation Process</h1>
                <Form.Group controlId="foodItem">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block', }}>Food Item:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter food item"
                    value={foodItem}
                    onChange={(e) => setFoodItem(e.target.value)}
                    required
                    xs={12} size="lg"/>
                </Form.Group>
                <Form.Group controlId="quantity">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block' }}>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block' }}>Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="dateCooked">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block' }}>Date Cooked:</Form.Label>
                  <Form.Control
                    type="date"
                    value={dateCooked}
                    onChange={(e) => setDateCooked(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="timeCooked">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block' }}>Time Cooked:</Form.Label>
                  <Form.Control
                    type="time"
                    value={timeCooked}
                    onChange={(e) => setTimeCooked(e.target.value)}
                    step="60"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label style={{ width: '150px', fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block' }}>Upload Picture:</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>
                <br />
                <Button className="btn btn-success, w-100 p-2" type="submit">
                  Add
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonorForm;
