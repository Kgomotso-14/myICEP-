
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { acceptRequest, declineRequest } from '../Redux/actions';
// import { InputGroup, FormControl, Container, Row, Col, Button, Card } from 'react-bootstrap';

// function FoodListing({ acceptRequest, declineRequest }) {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredFoodItems, setFilteredFoodItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setFilteredFoodItems(response.data);

//         // Retrieve requested items from localStorage on initial load
//         const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//         setRequestedItems(storedRequestedItems);

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const checkAndRemoveOldItems = () => {
//       const currentTime = new Date();
//       foodItems.forEach(item => {
//         const timeCooked = new Date(item.dateCooked);
//         const hoursSinceCooked = (currentTime - timeCooked) / (1000 * 60 * 60);

//         if (hoursSinceCooked >= 6) {
//           setTimeout(() => {
//             setFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
//             setFilteredFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
//           }, 9910000);
//         } else {
//           setTimeout(() => {
//             setFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
//             setFilteredFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
//           }, 9915000);
//         }
//       });
//     };

//     checkAndRemoveOldItems();
//   }, [foodItems]);

//   const handleRequest = async (itemId) => {
//     const selectedItem = foodItems.find((item) => item.id === itemId);
//     if (selectedItem) {
//       const token = localStorage.getItem('token');
//       const requestTime = new Date().toISOString();

//       try {
//         // Example of sending an email to the donor
//         await axios.post(`http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`);
        
//         // Example of sending a request to the backend to mark the item as requested
//         await axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         // Update requested items state and local storage
//         const updatedItem = { ...selectedItem, requestTime, status: 'Pending' };
//         const updatedRequestedItems = [...requestedItems, updatedItem];
//         setRequestedItems(updatedRequestedItems);
//         localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

//         // Dispatch Redux action if needed (acceptRequest)
//         alert(`Request for ${selectedItem.itemName} sent!`);

//       } catch (error) {
//         console.error('Error handling request:', error);
//       }
//     }
//   };

//   const handleSearchQueryChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = foodItems.filter(item =>
//       item.address.toLowerCase().includes(query)
//     );
//     setFilteredFoodItems(filtered);
//   };

//   const clearLocalStorage = () => {
//     localStorage.removeItem('requestedItems');
//     setRequestedItems([]);
//     alert('Local storage cleared!');
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <br></br>
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="d-flex justify-content-center mb-4">
//         <InputGroup className="w-25 rounded-pill">
//           <FormControl
//             type="text"
//             className="rounded-pill"
//             placeholder="Search by address"
//             aria-label="Search"
//             aria-describedby="basic-addon1"
//             value={searchQuery}
//             onChange={handleSearchQueryChange}
//           />
//           <InputGroup.Text className="bg-info border-0 rounded-circle p-2 ms-1">
//             <FontAwesomeIcon icon={faSearch} />
//           </InputGroup.Text>
//         </InputGroup>
//       </div>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {filteredFoodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title text-center ">{item.itemName}</h5>
//                   <div className="table-responsive">
//                     <table className="table table-bordered">
//                       <thead>
//                         <tr>
//                           <th scope="col">Quantity</th>
//                           <td>{item.quantity}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Description</th>
//                           <td>{item.description}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Time Cooked</th>
//                           <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Address</th>
//                           <td>{item.address}</td>
//                         </tr>
//                       </thead>
//                     </table>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRequest(item.id)}
//                   className="btn btn-primary mt-2 align-self-end"
//                   disabled={requestedItems.some((requestedItem) => requestedItem.id === item.id)}
//                 >
//                   {requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         {/* <button onClick={clearLocalStorage} className="btn btn-danger mb-3">Clear Local Storage</button> */}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   requests: state.requests,
// });

// export default connect(mapStateToProps, { acceptRequest, declineRequest })(FoodListing);


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { acceptRequest, declineRequest } from '../Redux/actions';
import { InputGroup, FormControl, Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';

function FoodListing({ acceptRequest, declineRequest }) {
  const [foodItems, setFoodItems] = useState([]);
  const [requestedItems, setRequestedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5282/api/FoodItem');
        setFoodItems(response.data);
        setFilteredFoodItems(response.data);

        const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
        setRequestedItems(storedRequestedItems);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkAndRemoveOldItems = () => {
      const currentTime = new Date();
      foodItems.forEach(item => {
        const timeCooked = new Date(item.dateCooked);
        const hoursSinceCooked = (currentTime - timeCooked) / (1000 * 60 * 60);

        if (hoursSinceCooked >= 6) {
          setTimeout(() => {
            setFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
            setFilteredFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
          }, 9910000);
        } else {
          setTimeout(() => {
            setFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
            setFilteredFoodItems(prevItems => prevItems.filter(i => i.id !== item.id));
          }, 9915000);
        }
      });
    };

    checkAndRemoveOldItems();
  }, [foodItems]);

  const handleRequest = async () => {
    if (selectedItem) {
      const token = localStorage.getItem('token');
      const requestTime = new Date().toISOString();

      try {
        await axios.post(`http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`);
        await axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const updatedItem = { ...selectedItem, requestTime, status: 'Pending' };
        const updatedRequestedItems = [...requestedItems, updatedItem];
        setRequestedItems(updatedRequestedItems);
        localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

        alert(`Request for ${selectedItem.itemName} sent!`);
        setShowModal(false); // Close modal

      } catch (error) {
        console.error('Error handling request:', error);
      }
    }
  };

  const handleRequestClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleSearchQueryChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = foodItems.filter(item =>
      item.address.toLowerCase().includes(query)
    );
    setFilteredFoodItems(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <br></br>
      <br></br>
      <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
      <div className="d-flex justify-content-center mb-4">
        <InputGroup className="w-25 rounded-pill">
          <FormControl
            type="text"
            className="rounded-pill"
            placeholder="Search by address"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <InputGroup.Text className="bg-info border-0 rounded-circle p-2 ms-1">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
        {filteredFoodItems.map((item) => (
          <div key={item.id} className="col">
            <div className={`card h-100 shadow rounded p-3 ${requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-center ">{item.itemName}</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Quantity</th>
                          <td>{item.quantity}</td>
                        </tr>
                        <tr>
                          <th scope="col">Description</th>
                          <td>{item.description}</td>
                        </tr>
                        <tr>
                          <th scope="col">Time Cooked</th>
                          <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
                        </tr>
                        <tr>
                          <th scope="col">Address</th>
                          <td>{item.address}</td>
                        </tr>
                      </thead>
                    </table>
                    
                  </div>
                </div>
                
                <button
                  onClick={() => handleRequestClick(item)}
                  className="btn btn-primary mt-2 align-self-end"
                  disabled={requestedItems.some((requestedItem) => requestedItem.id === item.id)}
                >
                  {requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
                </button>
              </div>
            </div>
            
          </div>
          
        ))}<br></br>
      <div><br></br>
      <br></br></div>
      <div><br></br>
      <br></br></div>
      </div>
      
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to request {selectedItem?.itemName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleRequest}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    
  );
}

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { acceptRequest, declineRequest })(FoodListing);
