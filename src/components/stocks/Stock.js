import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Modal, Button } from 'react-bootstrap';
import Header from '../header/header';
import Footer from '../footer/footer';



class SearchableTable extends Component {
  constructor(props) {
  super(props);
  this.state = {
  searchInput: '',
  data: [],
  showEditModal: false,
  editedData: null,
  };
  }


  
  componentDidMount() {
  this.fetchData();
  }
  
  fetchData = () => {
  fetch('http://localhost:8089/project/UnifiedSecurityMaster/getallsecurities')
  .then(response => response.json())
  .then(data => this.setState({ data }))
  .catch(error => console.log(error));
  }
  
  handleInputChange = (event) => {
  this.setState({ searchInput: event.target.value });
  }
  
  handleEdit = (data) => {
  this.setState({ showEditModal: true, editedData: data });
  }
  
  handleSave = () => {
      const{editedData} = this.state;
      const{securitiesSymbol} =editedData;
  // send edited data to backend API and update the corresponding data in the MySQL database
  // then close the modal form and fetch the updated data
  fetch(`http://localhost:8089/project/UnifiedSecurityMaster/updateSecurities/${securitiesSymbol}`, {
  method: 'PUT',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state.editedData),
  })
  .then(response => response.json())
  .then(() => {
  this.setState({ showEditModal: false, editedData: null });
  this.fetchData();
  })
  .catch(error => console.log(error));
  }
  
  handleDelete = (data) => {
      const { securitiesSymbol } = data;
      
      // send delete request to backend API and update the corresponding data in the MySQL database
      // then fetch the updated data
      fetch(`http://localhost:8089/project/UnifiedSecurityMaster/deletesecurities/${securitiesSymbol}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      },
      })
      .then(response => response.json())
      .then(() => {
      this.fetchData();
      })
      .catch(error => console.log(error));
      }
  
  handleModalInputChange = (event) => {
  const { name, value } = event.target;
  this.setState(prevState => ({
  editedData: {
  ...prevState.editedData,
  [name]: value,
  },
  }));
  }
  
  render() {
    const { searchInput, data, showEditModal, editedData } = this.state;
    const filteredData = data.filter((data) => {
    return Object.keys(data).some((key) => {
    const value = data[key];
    return value !== null && value !== undefined && value.toString().toLowerCase().includes(searchInput.toString().toLowerCase());
    });
    });
return (
<div>
  <Header/>
<Form>
<input
style={{
'margin-left': '100px', 'margin-right': '50px', 'width': '650px', 'alignContent': 'center', 'position': 'relative', 'margin-top': '25px', 'height': '50px', 'border-radius': '50px', 'text-align': 'center', 'background-color': '#c3e6cb', 'text-color': 'black',
}}
type="text"
placeholder="  Search By: eg:- Id, sector..."
value={ searchInput}
onChange={this.handleInputChange}
/>
</Form>
<Table striped bordered hover style={{ 'margin-top': '20px', 'width': '100%', 'tableLayout':'fixed'}}>
<thead>
<tr className="table table-sm table-dark">
<th>Symbol</th>
<th>Description</th>
<th>Sector</th>
<th>&nbsp;Industry &nbsp;</th>
<th>Exchange</th>
<th>Currency</th>
<th>Country</th>
<th>Series</th>
<th>SecuritiesId</th>
<th>Price</th>
<th>Update</th>

</tr>
</thead>
<tbody>{filteredData.map(data => (
<tr key={data.securitiesSymbol}>
<td style={{wordWrap: 'break-word'}}>{data.securitiesSymbol}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesDescription}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesSector}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesIndustry}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesExchange}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesCurrency}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesCountry}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesSeries}</td>
<td style={{wordWrap: 'break-word'}}>{data.securitiesId}</td>
<td style={{wordWrap: 'break-word'}}>{data.last}</td>
<td>
<Button variant="primary" onClick={() => this.handleEdit(data)}>Edit</Button> </td>
{/* <td>
<Button variant="danger" onClick={() => this.handleDelete(data)}>Delete</Button>
</td> */}
</tr>
))}
</tbody>
</Table>
<Modal show={showEditModal} onHide={() => this.setState({ showEditModal: false, editedData: null })}>
<Modal.Header closeButton>
<Modal.Title  className="text-dark font-weight-bold">Edit Security</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group controlId="formSecuritySymbol">
<Form.Label>Security Symbol</Form.Label>
<Form.Control type="text" name="securitiesSymbol" value={editedData?.securitiesSymbol} onChange={this.handleModalInputChange} placeholder="Enter Security Symbol" readOnly={true} />
</Form.Group>

<Form.Group controlId="formSecurityDescription">
<Form.Label>Security Description</Form.Label>
<Form.Control type="text" name="securitiesDescription" value={editedData?.securitiesDescription} onChange={this.handleModalInputChange} placeholder="Enter Security Description" />
</Form.Group>

<Form.Group controlId="formSecuritySector">
<Form.Label>Security Sector</Form.Label>
<Form.Control type="text" name="securitiesSector" value={editedData?.securitiesSector} onChange={this.handleModalInputChange} placeholder="Enter Security Sector" />
</Form.Group>

<Form.Group controlId="formSecurityIndustry">
<Form.Label>Security Industry</Form.Label>
<Form.Control type="text" name="securitiesIndustry" value={editedData?.securitiesIndustry} onChange={this.handleModalInputChange} placeholder="Enter Security Industry" />
</Form.Group>

<Form.Group controlId="formSecurityExchange">
<Form.Label>Security Exchange</Form.Label>
<Form.Control type="text" name="securitiesExchange" value={editedData?.securitiesExchange} onChange={this.handleModalInputChange} placeholder="Enter Security Exchange" />
</Form.Group>

<Form.Group controlId="formSecurityCurrency">
<Form.Label>Security Currency</Form.Label>
<Form.Control type="text" name="securitiesCurrency" value={editedData?.securitiesCurrency} onChange={this.handleModalInputChange} placeholder="Enter Security Currency" />
</Form.Group>

<Form.Group controlId="formSecurityCountry">
<Form.Label>Security Country</Form.Label>
<Form.Control type="text" name="securitiesCountry" value={editedData?.securitiesCountry} onChange={this.handleModalInputChange} placeholder="Enter Security Country" />
</Form.Group>

<Form.Group controlId="formSecuritySeries">
<Form.Label>Security Series</Form.Label>
<Form.Control type="text" name="securitiesSeries" value={editedData?.securitiesSeries} onChange={this.handleModalInputChange} placeholder="Enter Security Series" />
</Form.Group>

<Form.Group controlId="formSecurityId">
<Form.Label>Security ID</Form.Label>
<Form.Control type="text" name="securitiesId" value={editedData?.securitiesId} onChange={this.handleModalInputChange} placeholder="Enter Security ID" readOnly={true} />
</Form.Group>

<Form.Group controlId="formPrice">
<Form.Label>Price</Form.Label>
<Form.Control type="text" step="0.01" name="price" value={editedData?.last} onChange={this.handleModalInputChange} placeholder="Enter Price"  readOnly={true}/>
</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={() => this.setState({ showEditModal: false, editedData: null })}>
Cancel
</Button>

<Button variant="primary" onClick={this.handleSave}>
Save Changes
</Button>
</Modal.Footer>
</Modal>

<Footer/>

</div>
);
}
}

export default SearchableTable;