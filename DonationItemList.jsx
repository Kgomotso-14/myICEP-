import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Image, Container } from 'react-bootstrap';

const DonorItemList = ({ items, onDelete, onEdit, onSubmit }) => {
  const handleEdit = (index) => {
    // Call the onEdit function passed from the parent component
    onEdit(index);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '80%', marginTop: '30px', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#fff' }}>
        <Table striped bordered hover style={{ margin: '20px 0' }}>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Date Cooked</th>
              <th>Time Cooked</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.foodItem}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.dateCooked}</td>
                <td>{item.timeCooked}</td>
                <td>
                  <Image src={item.image} alt={item.foodItem} thumbnail style={{ maxWidth: '100px', maxHeight: '100px' }} />
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => onDelete(index)} className="mr-2">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={onSubmit} style={{ marginBottom: '20px' }}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

DonorItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      foodItem: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      dateCooked: PropTypes.string.isRequired,
      timeCooked: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default DonorItemList;
