// import React, { Component } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Form, Modal, Button } from 'react-bootstrap';
// import Header from '../header/header';
// import Footer from '../footer/footer';



// class UpdatePortfolio extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//   searchInput: '',
//   data: [],
//   showEditModal: false,
//   editedData: null,
//   };
//   }


  
//   componentDidMount() {
//   this.fetchData();
//   }
  
//   fetchData = () => {
//   fetch('http://localhost:8089/project/portfolioManagement/findallportfolio')
//   .then(response => response.json())
//   .then(data => this.setState({ data }))
//   .catch(error => console.log(error));
//   }
  
//   handleInputChange = (event) => {
//   this.setState({ searchInput: event.target.value });
//   }
  
//   handleEdit = (data) => {
//   this.setState({ showEditModal: true, editedData: data });
//   }
  
//   handleSave = () => {
//       const{editedData} = this.state;
//       const{portfolioId} =editedData;
//   // send edited data to backend API and update the corresponding data in the MySQL database
//   // then close the modal form and fetch the updated data
//   fetch(`http://localhost:8089/project/portfolioManagement/update`, {
//   method: 'PUT',
//   headers: {
//   'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(this.state.editedData),
//   })
//   .then(response => response.json())
//   .then(() => {
//   this.setState({ showEditModal: false, editedData: null });
//   this.fetchData();
//   })
//   .catch(error => console.log(error));
//   }
  
//   // handleDelete = (data) => {
//   //     const {portfolioId } = data;
      
//   //     // send delete request to backend API and update the corresponding data in the MySQL database
//   //     // then fetch the updated data
//   //     fetch(`http://localhost:8089/project/UnifiedSecurityMaster/deletesecurities/${securitiesSymbol}`, {
//   //     method: 'DELETE',
//   //     headers: {
//   //     'Content-Type': 'application/json',
//   //     },
//   //     })
//   //     .then(response => response.json())
//   //     .then(() => {
//   //     this.fetchData();
//   //     })
//   //     .catch(error => console.log(error));
//   //     }
  
//   handleModalInputChange = (event) => {
//   const { name, value } = event.target;
//   this.setState(prevState => ({
//   editedData: {
//   ...prevState.editedData,
//   [name]: value,
//   },
//   }));
//   }
  
//   render() {
//     const { searchInput, data, showEditModal, editedData } = this.state;
//     const filteredData = data.filter((data) => {
//     return Object.keys(data).some((key) => {
//     const value = data[key];
//     return value !== null && value !== undefined && value.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
//     });
//     });
// return (
// <div>
//   <Header/>
// <Form>
// <input
// style={{
// 'margin-left': '100px', 'margin-right': '50px', 'width': '650px', 'alignContent': 'center', 'position': 'relative', 'margin-top': '25px', 'height': '50px', 'border-radius': '50px', 'text-align': 'center', 'background-color': '#c3e6cb', 'text-color': 'black',
// }}
// type="text"
// placeholder="  Search By: eg:- Id, sector..."
// value={ searchInput}
// onChange={this.handleInputChange}
// />
// </Form>
// <Table striped bordered hover style={{ 'margin-top': '20px', 'width': '100%', 'tableLayout':'fixed'}}>
// <thead>
// <tr className="table table-sm table-dark">
// <th>Name</th>
// <th>Manager</th>
// <th>Amount</th>
// {/* <th>&nbsp;Industry &nbsp;</th> */}
// <th>Exchange</th>
// <th>Currency</th>
// <th>Theme</th>
// {/* <th>Series</th>
// <th>SecuritiesId</th>
// <th>Price</th> */}
// <th>Update</th>

// </tr>
// </thead>
// <tbody>{filteredData.map(data => (
// <tr key={data.portfolioId}>
// <td style={{wordWrap: 'break-word'}}>{data.portfolioName}</td>
// <td style={{wordWrap: 'break-word'}}>{data.fundManagerName}</td>
// <td style={{wordWrap: 'break-word'}}>{data.amount}</td>
// <td style={{wordWrap: 'break-word'}}>{data.theme}</td>
// <td style={{wordWrap: 'break-word'}}>{data.Exchange}</td>
// <td style={{wordWrap: 'break-word'}}>{data.Currency}</td>
// {/* <td style={{wordWrap: 'break-word'}}>{data.securitiesCountry}</td>
// <td style={{wordWrap: 'break-word'}}>{data.securitiesSeries}</td>
// <td style={{wordWrap: 'break-word'}}>{data.securitiesId}</td>
// <td style={{wordWrap: 'break-word'}}>{data.last}</td> */}
// <td>
// <Button variant="primary" onClick={() => this.handleEdit(data)}>Edit</Button> </td>
// {/* <td>
// <Button variant="danger" onClick={() => this.handleDelete(data)}>Delete</Button>
// </td> */}
// </tr>
// ))}
// </tbody>
// </Table>
// <Modal show={showEditModal} onHide={() => this.setState({ showEditModal: false, editedData: null })}>
// <Modal.Header closeButton>
// <Modal.Title  className="text-dark font-weight-bold">Edit Portfolio</Modal.Title>
// </Modal.Header>
// <Modal.Body>
// <Form>
// <Form.Group controlId="formPortfolioName">
// <Form.Label>Name</Form.Label>
// <Form.Control type="text" name="portfolioName" value={editedData?.portfolioName} onChange={this.handleModalInputChange} placeholder="Enter Name" />
// </Form.Group>

// <Form.Group controlId="formfundManagerName">
// <Form.Label>Manager</Form.Label>
// <Form.Control type="text" name="fundManagerName" value={editedData?.fundManagerName} onChange={this.handleModalInputChange} placeholder="Fund Manager Name" />
// </Form.Group>

// <Form.Group controlId="formAmount">
// <Form.Label>Amount</Form.Label>
// <Form.Control type="text" name="amount" value={editedData?.amount} onChange={this.handleModalInputChange} placeholder="Enter Amount" />
// </Form.Group>

// <Form.Group controlId="formTheme">
// <Form.Label>Theme</Form.Label>
// <Form.Control type="text" name="theme" value={editedData?.theme} onChange={this.handleModalInputChange} placeholder="Enter Theme" />
// </Form.Group>

// <Form.Group controlId="formExchange">
// <Form.Label> Exchange</Form.Label>
// <Form.Control type="text" name="Exchange" value={editedData?.Exchange} onChange={this.handleModalInputChange} placeholder="Enter Security Exchange" />
// </Form.Group>

// <Form.Group controlId="formCurrency">
// <Form.Label>Currency</Form.Label>
// <Form.Control type="text" name="Currency" value={editedData?.Currency} onChange={this.handleModalInputChange} placeholder="Enter Security Currency" />
// </Form.Group>
// {/* 
// <Form.Group controlId="formSecurityCountry">
// <Form.Label>Security Country</Form.Label>
// <Form.Control type="text" name="securitiesCountry" value={editedData?.securitiesCountry} onChange={this.handleModalInputChange} placeholder="Enter Security Country" />
// </Form.Group>

// <Form.Group controlId="formSecuritySeries">
// <Form.Label>Security Series</Form.Label>
// <Form.Control type="text" name="securitiesSeries" value={editedData?.securitiesSeries} onChange={this.handleModalInputChange} placeholder="Enter Security Series" />
// </Form.Group>

// <Form.Group controlId="formSecurityId">
// <Form.Label>Security ID</Form.Label>
// <Form.Control type="text" name="securitiesId" value={editedData?.securitiesId} onChange={this.handleModalInputChange} placeholder="Enter Security ID" readOnly={true} />
// </Form.Group> */}
// {/* 
// <Form.Group controlId="formPrice">
// <Form.Label>Price</Form.Label>
// <Form.Control type="text" step="0.01" name="price" value={editedData?.last} onChange={this.handleModalInputChange} placeholder="Enter Price"  readOnly={true}/>
// </Form.Group> */}

// </Form>
// </Modal.Body>
// <Modal.Footer>
// <Button variant="secondary" onClick={() => this.setState({ showEditModal: false, editedData: null })}>
// Cancel
// </Button>

// <Button variant="primary" onClick={this.handleSave}>
// Save Changes
// </Button>
// </Modal.Footer>
// </Modal>

// <Footer/>

// </div>
// );
// }
// }

// export default UpdatePortfolio;