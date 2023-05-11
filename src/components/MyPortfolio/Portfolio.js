import React, { useState, useEffect, useCallback } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../MyPortfolio/Portfolio.css';
import UpdatePortfolio from '../Update/Update';

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedPortfolioData, setSelectedPortfolioData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8089/project/portfolioManagement/findallportfolio')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleAddRow = () => {
    navigate(`/UpdatePortfolio/`);
  };


  const handledelete = (portfolioId) => {
    // send edited data to backend API and update the corresponding data in the MySQL database
    // then close the modal form and fetch the updated data
    fetch(`http://localhost:8089/project/portfolioManagement/updateStatus/${portfolioId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        
      },
      
    }
    )
    navigate(0);
  }

  const handleViewClick = useCallback((portfolioName) => {
    setSelectedPortfolio(portfolioName);
    fetch(`http://localhost:8089/project/portfolioManagement/getassetbypname/${portfolioName}`)
      .then(response => response.json())
      .then(data => setSelectedPortfolioData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
  <br/>
      <div className='h3'>
        <p>Portfolios</p>
        <div className='bo'>
          <table className= 'striped bordered hover  table-sm' style  ={{ 'margin-top': '20px','width': '100%', 'tableLayout':'fixed' }}>
            <thead className='table  table-sm'>
              <tr className="table table-sm table-dark text-dark">
                <th>Portfolio Name </th>
                <th>Manager</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Exchange</th>
                <th>Theme</th>
                
                <th>Status</th>
                <th>View</th>
                <th>Actions</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="table table-sm table-dark text-light">
              {data.map(obj => (
                <tr key={obj.portfolioName}>
                  <td>{obj.portfolioName}</td>
                  <td>{obj.fundManagerName}</td>
                  <td>{obj.amount}</td>
                  <td>{obj.currency}</td>
                  <td>{obj.exchange}</td>
                  <td>{obj.theme}</td>
                  <td>{obj.status}</td>
                  <td>
                    <Button variant="info" onClick={() => handleViewClick(obj.portfolioName)}>View</Button>
                  </td>
                  <td>
                   <Link to={'/UpdatePortfolio/'+obj.portfolioId}> <Button variant="success">Update</Button></Link>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() =>handledelete(obj.portfolioId)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={selectedPortfolio !== null} onHide={() => setSelectedPortfolio(null)}>
            <Modal.Header closeButton>
              <Modal.Title className="text-dark font-weight-bold">Portfolio: {selectedPortfolio}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover style={{ 'margin-top': '20px' }}>
                <thead>
                  <tr className="text-dark font-weight-bold">
                    <th>security Name</th>
                    <th>Exchange</th>
                    <th>Benchmark</th>  
                    <th>Last Traded Price</th>
                   
                  </tr>
                </thead>
                <tbody className="text-dark font-weight-bold">
                  {selectedPortfolioData && selectedPortfolioData.map(obj => (
                    <tr key={obj.portfolioName} className="text-dark font-weight-bold">
                      <td>{obj.securityName}</td>
                      <td>{obj.exchange}</td>
                      <td>{obj.benchMark}</td>

                      
                      <td>{obj.last}</td>
                     
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedPortfolio(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
  <Footer />
</>
  );
                  }