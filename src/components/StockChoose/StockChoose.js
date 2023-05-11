// // import React, { useState } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Modal, Button, Form } from 'react-bootstrap';
// import { useLocation, useParams } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2';
// import  './StockChoose.css'
// import Header from '../header/header';
// import toastr from "toastr";
// import'toastr/build/toastr.min.css';
// import React, { useState, useEffect, useCallback } from 'react';

// const StockChoose = () => {
//     const [formData, setFormData] = useState([]);
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const initialPortfolioName = searchParams.get('portfolioName');
//     console.log(initialPortfolioName);

// const initialAmount = searchParams.get('amount');


// // const[portfolioNames, setPortfolioName] = useState(portfolioName);
// // const[securityName, setSecurityName] = useState('');
// // const[assetClass, setAssetClass] = useState('');

// const [portfolioName, setPortfolioName] = useState(initialPortfolioName);
// const [portfolio, setPortfolio] = useState(false);

// const [securityData, setSecurityData] = useState([]); // to store the data fetched from API
// const [showModal, setShowModal] = useState(false); // to control the visibility of the modal
// const [selectedSecurity, setSelectedSecurity] = useState(''); // to store the selected security name
// const [portfolioData, setPortfolioData] = useState([{portfolioName: '', securityName: '', assetClass: '', equityCategory: '', exchange: '', lasttradedprice: '',buyprice:'', units: '', totalamount: '',transactionDate:''}]);
// // const[portfolioData,setPortfolioData]= useState([]);
//  // to store the portfolio data entered by user
//  const[selectedIndex,setSelectedIndex] = useState(null);


//  const navigate = useNavigate();


//  const [filteredSecurity, setFilteredSecurity] = useState([]);
//  const [data, setData] = useState([]);

//  // Function to filter security data based on search input
// //  const handleSearch = (e) => {
// //  const value = e.target.value.toLowerCase();
// //  const filteredData = securityData.filter((security) =>
// //  security.securitiesSymbol.toLowerCase().includes(value)
// //  );
// //  setFilteredSecurityData(filteredData);
// //  };

// const handlePortfolioNameChange = (event) => {
//     setPortfolioName(event.target.value);
//     }

//     // useEffect(() => {
//     //     fetch('http://localhost:8089/project/portfolioManagement/getDetails')
//     //       .then(response => response.json())
//     //       .then(data => setData(data))
//     //       .catch(error => console.log(error));
//     //   }, []);


//     useEffect(() => {
//         setPortfolioName(portfolioName);
//         fetch(`http://localhost:8089/project/portfolioManagement/getassetbypname/${portfolioName}`)
//         .then(response => {
//         if (!response.ok) {
//         throw new Error('Network response was not ok');
//         }
//         return response.json();
//         })
//         .then(data => {
//         setFormData(data);
//         })
//         .catch(error => {
//         console.log('Error fetching form data:', error);
//         });
//         }, []);



// const handleCalculation = (index) => {
//     const updatedPortfolioData = [...portfolioData];
//     updatedPortfolioData[index].totalamount = updatedPortfolioData[index].last * updatedPortfolioData[index].units;
//     setPortfolioData(updatedPortfolioData);
//     }

// const handleDeleteRow= (index) => {
// const newPortfolioData = [...portfolioData];
// newPortfolioData.splice(index, 1);
// setPortfolioData(newPortfolioData);
// };


// const handleTotalamount = () => {
//     let total = 0;
//     portfolioData.forEach((data) => {
//     total += parseFloat(data.totalamount);
//     });
//     return total.toFixed(2);
//     }

//     const handleAvailableBalance = () => {
//         let available 
//         available = initialAmount - handleTotalamount();
//         if(available < 0)
// {
//     available = 0;
// }        
//         if (available <= 0) {
//         toastr.error('Cannot add stocks available balance is Zero')
//         }

//         return available.toFixed(2);
//         };
//     // const handleHome = () => {
//     //      navigate(`/Portfolio`)
//     // }

// const handleCloseModal = () => {
// setShowModal(false);
// }

// const handleFetchSecurityData = async () => {
//     try {
//     const response = await fetch('http://localhost:8089/project/UnifiedSecurityMaster/getallsecurities');
//     if (!response.ok) {
//     throw new Error('Failed to fetch securities');
//     }
//     const data = await response.json();
//     setSecurityData(data);
//     setShowModal(true);
//     } catch (error) {
//     console.error(error);
//     }
//     };

//         const handleSelectSecurity = (selected) => {
//             const updatedPortfolioData = [...portfolioData];
//             const selectedSecurity = securityData.find((security) => security.securitiesSymbol === selected);
//             if (selectedIndex !== -1) {
//             updatedPortfolioData[selectedIndex] = {
//             ...updatedPortfolioData[selectedIndex],
//             securityName: selectedSecurity.securitiesSymbol,
//             assetClass: selectedSecurity.assetClass,
//             equityCategory: selectedSecurity.equityCategory,
//             securitiesExchange: selectedSecurity.securitiesExchange,
//             last: selectedSecurity.last,
//             open:selectedSecurity.open,
//             units: '',
//             totalamount: '',
//             };
//             setPortfolioData(updatedPortfolioData);
//             }
//             setSelectedIndex(-1);
//             setSelectedSecurity(selected);
//             setShowModal(false);
//             };
//             const handleAddRow = () => {
//                 const newRow = {
//                 id: portfolioData.length + 1,
//                 securityName: '',
//                 assetClass: '',
//                 equityCategory: '',
//                 securitiesExchange: '',
//                 last: '',
//                 open: '',
//                 units: '',
//                 totalamount: '',
//                 isPurchased: false, // set default value to false
//                 };

//                 setPortfolioData([...portfolioData, newRow]);
//                 };

//                 const handleSell = () => {
//                     toastr.error('Sorry','',{positionClass: 'toast-bottom-right'});

//                 }

//                 const handleBuy = () => {
//                     const newRow = {
//                     ...portfolioData.find((data) => data.id === undefined),
//                     portfolioName: portfolioName // add portfolioName to the new row
//                     };

//                     if (!newRow.assetClass || !newRow.units || !newRow.totalamount || !newRow.securityName) {
//                     Swal.fire({
//                     icon: 'error',
//                     title: 'Error!',
//                     text: 'Please fill all the columns!'
//                     });
//                     return;
//                     }

//                     const availableBalance = handleAvailableBalance();
//                     if (availableBalance < 0) {
//                     Swal.fire({
//                     icon: 'error',
//                     title: 'Error!',
//                     text: "Sorry, you can't buy. Available balance is not enough."
//                     });
//                     return;
//                     }

//                     fetch(`http://localhost:8089/project/portfolioManagement/addasset`, {
//                     method: 'POST',
//                     headers: {
//                     'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(newRow)
//                     })
//                     .then(response => {
//                     if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                     }

//                     // Show success message using Sweet Alert
//                     Swal.fire({
//                     icon: 'success',
//                     title: 'Success!',
//                     text: 'Your purchase was successful!',
//                     showCancelButton: true,
//                     confirmButtonText:'OK',
//                     }).then((result) => {
//                         if(result.isConfirmed){
//                             navigate(0);
//                         }
//                     })

//                     // Handle success
//                     })
//                     .catch(error => {
//                     console.error('There was a problem with the fetch operation:', error);
//                     // Show error message using Sweet Alert
//                     Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: 'Something went wrong. Please try again later.'
//                     });
//                     // Handle error

//                     });
//                     };

//                 // const handleBuy = (index) => {
//                 //     const updatedPortfolioData = [...portfolioData];
//                 //     const purchasedRow = updatedPortfolioData[index];
//                 //     const newRow = {
//                 //             ...portfolioData.find((data) => data.id === undefined),
//                 //             portfolioName: portfolioName // add portfolioName to the new row
//                 //             };


//                 //     if (!purchasedRow.assetClass || !purchasedRow.units || !purchasedRow.totalamount || !purchasedRow.securityName) {
//                 //     Swal.fire({
//                 //     icon: 'error',
//                 //     title: 'Error!',
//                 //     text: 'Please fill all the columns!'
//                 //     });
//                 //     return;
//                 //     }

//                 //     const availableBalance = handleAvailableBalance();

//                 //     if (availableBalance < 0) {
//                 //     Swal.fire({
//                 //     icon: 'error',
//                 //     title: 'Error!',
//                 //     text: "Sorry, you can't buy. Available balance is not enough."
//                 //     });
//                 //     return;
//                 //     }

//                 //     fetch(`http://localhost:8089/project/portfolioManagement/addasset`, {
//                 //     method: 'POST',
//                 //     headers: {
//                 //     'Content-Type': 'application/json'
//                 //     },
//                 //     body: JSON.stringify(purchasedRow)
//                 //     })
//                 //     .then(response => {
//                 //     if (!response.ok) {
//                 //     throw new Error('Network response was not ok');
//                 //     }



//                 //     // Show success message using Sweet Alert
//                 //    toastr.success('Security added','',{positionClass: 'toast-bottom-right'});

//                 //     const updatedPortfolioData = [...portfolioData];
//                 //     updatedPortfolioData[index].purchased = true;
//                 //     setPortfolioData(updatedPortfolioData);

//                 //     })
//                 //     .catch(error => {
//                 //     console.error('There was a problem with the fetch operation:', error);

//                 //     // Show error message using Sweet Alert
//                 //     Swal.fire({
//                 //     icon: 'error',
//                 //     title: 'Oops...',
//                 //     text: 'Something went wrong. Please try again later.'
//                 //     });
//                 //     });
//                 //     };

// return (
// <div>
// <Header/>
// <br/>
// {/* <h2>Add your stocks</h2> */}
// <br/>

// <Table striped bordered hover>
// <thead className="thead-dark">
// <tr className="table table-sm table-dark"></tr>
// <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
// Portfolio Name:
// </span>
// <span style={{ color: '#16524f' }}>
// {portfolioName}
// </span>
// </td>
// {/* <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
// Benchmark:
// </span>
// <span style={{ color: '#16524f' }}>
// {benchMark}
// </span>
// </td> */}
// {/* <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
// Theme:
// </span>
// <span style={{ color: '#16524f' }}>
// {theme}
// </span>
// </td> */}
// <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
// initialAmount:
// </span>
// <span style={{ color: 'blue' }}>
// {initialAmount}
// </span>
// </td>
// <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
//         Available Balance:
// </span>
// <span style={{ color: 'red' }}>
// {handleAvailableBalance()}
// </span>
// </td>
// <td  className="text-right font-weight-bold text-center h4 heading">
//     <span style={{color: 'black'}}>
//         Total:
// </span>
// <span style={{ color: 'green' }}>
// {handleTotalamount()}
// </span>
// </td>



// </thead>
// </Table>



// <Table striped bordered hover>
// <thead className="thead-dark">
// <tr className="table table-sm table-dark">
// {portfolio && <th>Name</th>}
// <th>Security Name</th>
// <th>Asset Type</th>
// <th>Equity Category</th>
// <th>Exchange</th>
// <th>Last Traded Price</th>
// <th>Buy/Sell price</th>
// <th>Units</th>

// <th>Invested amount</th>

// <th>Buy</th>
// <th>Sell</th>
// </tr>
// </thead>



// <tbody>
// {portfolioData.map((data, index) => (
// <tr key={index}>
// {portfolio && (
// <td>
// <Form.Control
// type='text'
// value={portfolioName}
// onChange={handlePortfolioNameChange}
// />
// </td>
// )}
// <td>
// <Form.Control
// type="text"
// placeholder="Search Security"
// onClick={() => {
// setSelectedIndex(index);
// setShowModal(true)
// }}
// value={data.securityName}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].securityName = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.assetClass}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].assetClass = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.equityCategory}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].equityCategory = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.securitiesExchange}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].exchange = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.last}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].lasttradedprice = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.open}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].buyprice = e.target.value;
// setPortfolioData(updatedPortfolioData);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.units}
// onChange={(e) => {
// const updatedPortfolioData = [...portfolioData];
// updatedPortfolioData[index].units = e.target.value;
// setPortfolioData(updatedPortfolioData);
// handleCalculation(index);
// }}
// />
// </td>
// <td>
// <Form.Control
// type="text"
// value={data.totalamount}
// readOnly
// />
// </td>
// <td>
// <Button variant="success" disabled={data.purchased} onClick={() => handleBuy(index)} onBlur={() => handleCalculation(index)}>
// {data.purchased ? "Buy" : "Buy"}
// </Button>
// </td>
// <td>
// <Button variant="danger" onClick={() => handleSell(index)}>Sell</Button>
// </td>
// </tr>
// ))}
// </tbody>


// </Table>


// <Modal show={showModal} onHide={handleCloseModal}>
// <Modal.Header closeButton className="btn-close-white">
// <Modal.Title className="text-dark font-weight-bold">Search Security</Modal.Title>
// </Modal.Header>
// <Modal.Body>
// <Form.Control
// type="text"
// placeholder="Enter Security Name"
// value={selectedSecurity}
// onChange={(e) => {
// const searchValue = e.target.value.toLowerCase();
// setSelectedSecurity(searchValue);
// const filteredSecurity = securityData.filter(security =>
// security.securitiesSymbol.toLowerCase().includes(searchValue)
// );
// setFilteredSecurity(filteredSecurity);
// }}
// />
// <br/>
// <Button variant="primary" onClick={handleFetchSecurityData}>Search</Button> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

// <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
// <br/>

// <table className="table table-sm table-dark">

// <thead className="thead-dark">
// <tr className="table table-sm table-dark">
//             <th>Security Symbol</th>
//             <th>Security Name</th>
//             <th>Open price</th>


//         </tr>
//     </thead>
//     <tbody>
//         {securityData.map((data,index) => (
//             <tr key={index} onClick ={() => handleSelectSecurity(data.securitiesSymbol)} className="bg-white">
//                 <td className="text-dark font-weight-bold">{data.securitiesSymbol}</td>
//                 <td className="text-dark">{data.securitiesDescription}</td>
//                 <td className="text-dark">{data.open}</td>


//             </tr>
//         ))}
//    </tbody>
// </table>
// </Modal.Body>
// <Modal.Footer>

// </Modal.Footer>
// </Modal>

// {/* <Button variant="info" className="text-center" onClick={handleAddRow}>Add securities</Button> &nbsp; &nbsp;  */}
// {/* &nbsp; &nbsp; <Button variant="info" className="text-center" onClick={(handleHome) } >Home</Button>&nbsp;&nbsp; */}
// {/* &nbsp; &nbsp;<Button variant="success" className="text-center" onClick={() => handleDeleteRow()}>Delete</Button> */}

// <table className= 'striped bordered hover  table-sm' style  ={{ 'margin-top': '20px','width': '100%', 'tableLayout':'fixed' }}>
//             <thead className='table  table-sm'>
//               <tr className="table table-sm table-dark text-dark">
//                 <th>Portfolio Name </th>
//                 <th>Equity Category</th>
//                 <th>Units</th>
//                 <th>Asset Class</th>
//                 <th>Security Name</th>
//                 <th>Last Traded Price</th>
//               </tr>
//             </thead>
//             <tbody className="table table-sm table-dark text-light">
//               {formData.map(obj => (
//                 <tr key={obj.portfolioName}>
//                   <td>{obj.portfolioName}</td>
//                   <td>{obj.equityCategory}</td>
//                   <td>{obj.units}</td>
//                   <td>{obj.assetClass}</td>
//                   <td>{obj.securityName}</td>
//                   <td>{obj.last}</td>
//                 </tr>
//               ))}
//                 </tbody>
//                 </table>


// </div>
// );
// }
// export default StockChoose;


// //////////////////////////////////////////////////////////

// import { Table, Modal, Button, Form } from 'react-bootstrap';
// import { useLocation, useParams } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2';
// import './StockChoose.css'
// import Header from '../header/header';
// import toastr from "toastr";
// import 'toastr/build/toastr.min.css';
// import React, { useState, useEffect, useCallback } from 'react';

// const StockChoose = () => {
//     const [formData, setFormData] = useState([]);
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const initialPortfolioName = searchParams.get('portfolioName');
//     const initialPortfolioId =searchParams.get('portfolioId');
//     const initialAmount = searchParams.get('amount');

//     const[portfolioId, setPortfolioId] =useState(initialPortfolioId);
//     const [portfolioName, setPortfolioName] = useState(initialPortfolioName);
//     const [amount,setAmount] = useState(initialAmount);
//     const [portfolio, setPortfolio] = useState(false);
//     const [available,setAvailable] = useState(initialAmount);
//     const [securityData, setSecurityData] = useState([]); // to store the data fetched from API
//     const [showModal, setShowModal] = useState(false); // to control the visibility of the modal
//     const [selectedSecurity, setSelectedSecurity] = useState(''); // to store the selected security name
//     const [portfolioData, setPortfolioData] = useState([{ portfolioName: '',portfolioId:'',amount: '', securityName: '', assetClass: '', equityCategory: '', exchange: '', lasttradedprice: '', buyprice: '', units: '',transactionDate:'',totalamount: '' }]);

//     const [selectedIndex, setSelectedIndex] = useState(null);


//     const navigate = useNavigate();


//     const [filteredSecurity, setFilteredSecurity] = useState([]);
//     const [data, setData] = useState([]);

//     let total=0;
    



//     const handlePortfolioNameChange = (event) => {
//         setPortfolioName(event.target.value);
//     }

//     const handlePortfolioIdChange =(event) => {
//         setPortfolioId(event.target.value);
//     }
//     const handleAmountChange = (event) => {
//         setAmount(event.target.value);
//     }



//     const handleCalculation = (index) => {
//         const updatedPortfolioData = [...portfolioData];
//         updatedPortfolioData[index].totalamount = updatedPortfolioData[index].open * updatedPortfolioData[index].units;
//         setPortfolioData(updatedPortfolioData);
//     }

//     const handleDeleteRow = (index) => {
//         const newPortfolioData = [...portfolioData];
//         newPortfolioData.splice(index, 1);
//         setPortfolioData(newPortfolioData);
//     };


   

//     // const handleAvailableBalance = () => {
       
//     //     available = initialAmount - handleTotalamount();
//     //     if (available < 0) {
//     //         available = 0;
//     //     }
//     //     if (available <= 0) {
//     //         toastr.error('Cannot add stocks available balance is Zero')
//     //     }

//     //     localStorage.setItem('availableBalance', available.toFixed(2));

//     //     return available.toFixed(2);
//     // };

//     const handleAvailableBalance =() => {

//     if (available >= handleTotalamount()){
//         console.log("available"+available);
//         console.log("Total"+handleTotalamount());
//         setAvailable(available - handleTotalamount);
//         }
//     }

//     const handleTotalamount = (portfolioName) => {
//         formData.forEach((data) => {
//          if (data.portfolioName === portfolioName) {
//              total += parseFloat(data.investedAmount);
//                      }
//          else{
//         console.log("Portfolio Not found")
//         }
//       });
//         localStorage.setItem('TotalAmount', total.toFixed(2));
//         return total.toFixed(2);
//     };

//     const handleHome = () => {
//         navigate(`/Portfolio`)
//     }

//     const handleCloseModal = () => {
//         setShowModal(false);
//     }

//     const handleFetchSecurityData = async () => {
//         try {
//             const response = await fetch('http://localhost:8089/project/UnifiedSecurityMaster/getallsecurities');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch securities');
//             }
//             const data = await response.json();
//             setSecurityData(data);
//             setShowModal(true);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSelectSecurity = (selected) => {
//         const updatedPortfolioData = [...portfolioData];
//         const selectedSecurity = securityData.find((security) => security.securitiesSymbol === selected);
//         if (selectedIndex !== -1) {
//             updatedPortfolioData[selectedIndex] = {
//                 ...updatedPortfolioData[selectedIndex],
//                 securityName: selectedSecurity.securitiesSymbol,
//                 assetClass: selectedSecurity.assetClass,
//                 equityCategory: selectedSecurity.equityCategory,
//                 exchange: selectedSecurity.securitiesExchange,
//                 last: selectedSecurity.last,
//                 open: selectedSecurity.open,
//                 units: '',
//                 transactionDate: '',
//                 totalamount: '',
//             };
//             setPortfolioData(updatedPortfolioData);
//         }
//         setSelectedIndex(-1);
//         setSelectedSecurity(selected);
//         setShowModal(false);
//     };
//     const handleAddRow = () => {
//         const newRow = {
//             id: portfolioData.length + 1,
//             securityName: '',
//             assetClass: '',
//             equityCategory: '',
//             securitiesExchange: '',
//             last: '',
//             open: '',
//             units: '',
//             totalamount: '',
//             isPurchased: false, // set default value to false
//         };

//         setPortfolioData([...portfolioData, newRow]);
//     };

//     const handleSell = () => {
//         toastr.error('Sorry', '', { positionClass: 'toast-bottom-right' });

//     }

//     const handleBuy = () => {
//         const newRow = {
//             ...portfolioData.find((data) => data.id === undefined),
//             // portfolioId: portfolioId,
//             portfolioName: portfolioName, // add portfolioName to the new row
//             amount:amount,
//             availableAmount:available,
//             investedAmount:total
//         };

//         if (!newRow.assetClass || !newRow.units || !newRow.totalamount || !newRow.securityName) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'Please fill all the columns!'
//             });
//             return;
//         }

//         const availableBalance = handleAvailableBalance();
//         if (availableBalance < 0) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: "Sorry, you can't buy. Available balance is not enough."
//             });
//             return;
//         }

//         fetch(`http://localhost:8089/project/portfolioManagement/addasset`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newRow)
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }

//                 // Show success message using Sweet Alert
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success!',
//                     text: 'Your purchase was successful!',
//                     showCancelButton: true,
//                     confirmButtonText: 'OK',
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         navigate(0);
//                     }
//                 })

//                 // Handle success
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//                 // Show error message using Sweet Alert
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: 'Something went wrong. Please try again later.'
//                 });
//                 // Handle error

//             });
//     };


//     const fetchFormData = async () => {
//         try {
//             const response = await fetch(`http://localhost:8089/project/portfolioManagement/getassetbypname/${initialPortfolioName}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch form data');
//             }
//             const data = await response.json();
//             setFormData(data);
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchFormData();
//     }, [initialPortfolioName]);

//     useEffect(() => {
//         fetchFormData();
//     }, [initialAmount]);

 


//     return (
//         <div>
//             <Header />
//             <br />
//             {/* <h2>Add your stocks</h2> */}
//             <br />

//             <Table striped bordered hover>
//                 <thead className="thead-dark">
//                     <tr className="table table-sm table-dark"></tr>
//                     <td className="text-right font-weight-bold text-center h4 heading">
//                         <span style={{ color: 'black' }}>
//                             Portfolio Name:
//                         </span>
//                         <span style={{ color: '#16524f' }}>
//                             {portfolioName}
//                         </span>
//                     </td>

//                     <td className="text-right font-weight-bold text-center h4 heading">
//                         <span style={{ color: 'black' }}>
//                             Portfolio Id:
//                         </span>
//                         <span style={{ color: '#16524f' }}>
//                             {portfolioId}
//                         </span>
//                     </td>

//                     <td className="text-right font-weight-bold text-center h4 heading">
//                         <span style={{ color: 'black' }}>
//                             Amount:
//                         </span>
//                         <span style={{ color: 'blue' }}>
//                             {amount}
//                         </span>
//                     </td>
//                     <td className="text-right font-weight-bold text-center h4 heading">
//                         <span style={{ color: 'black' }}>
//                             Available Balance:
//                         </span>
//                         <span style={{ color: 'red' }}>
//                             {handleAvailableBalance()}
//                         </span>
//                     </td>
//                     <td className="text-right font-weight-bold text-center h4 heading">
//                         <span style={{ color: 'black' }}>
//                             Total:
//                         </span>
//                         <span style={{ color: 'green' }}>
//                             {handleTotalamount (portfolioName)}
//                         </span>
//                     </td>



//                 </thead>
//             </Table>



//             <Table striped bordered hover>
//                 <thead className="thead-dark">
//                     <tr className="table table-sm table-dark">
//                         {portfolio && <th>Name</th>}
//                         <th>Security Name</th>
//                         <th>Asset Type</th>
//                         <th>Equity Category</th>
//                         <th>Exchange</th>
//                         <th>Last Traded Price</th>
//                         <th>Buy price</th>
//                         <th>Units</th>
//                         <th>Transaction Date</th>
//                         <th>Invested amount</th>

//                         <th>Buy</th>
//                         <th>Sell</th>
//                     </tr>
//                 </thead>



//                 <tbody>
//                     {portfolioData.map((data, index) => (
//                         <tr key={index}>
//                             {portfolio && (
//                                 <td>
//                                     <Form.Control
//                                         type='text'
//                                         value={portfolioName}
//                                         onChange={handlePortfolioNameChange}
//                                     />

//                                     <Form.Control
//                                         type='number'
//                                         value={amount}
//                                         onChange={handleAmountChange}
//                                     />
//                                 </td>
                                
//                             )}
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Search Security"
//                                     onClick={() => {
//                                         setSelectedIndex(index);
//                                         setShowModal(true)
//                                     }}
//                                     value={data.securityName}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].securityName = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.assetClass}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].assetClass = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.equityCategory}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].equityCategory = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.exchange}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].exchange = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.last}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].lasttradedprice = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.open}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].buyprice = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.units}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].units = e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                         handleCalculation(index);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="datetime-local"
//                                     value={data.transactionDate}
//                                     onChange={(e) => {
//                                         const updatedPortfolioData = [...portfolioData];
//                                         updatedPortfolioData[index].transactionDate= e.target.value;
//                                         setPortfolioData(updatedPortfolioData);
//                                         handleCalculation(index);
//                                     }}
//                                 />
//                             </td>
//                             <td>
//                                 <Form.Control
//                                     type="text"
//                                     value={data.totalamount}
//                                     readOnly
//                                 />
//                             </td>
//                             <td>
//                                 <Button variant="success" disabled={data.purchased} onClick={() => handleBuy(index)} onBlur={() => handleCalculation(index)}>
//                                     {data.purchased ? "Buy" : "Buy"}
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Button variant="danger" onClick={() => handleSell(index)}>Sell</Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>


//             </Table>


//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton className="btn-close-white">
//                     <Modal.Title className="text-dark font-weight-bold">Search Security</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter Security Name"
//                         value={selectedSecurity}
//                         onChange={(e) => {
//                             const searchValue = e.target.value.toLowerCase();
//                             setSelectedSecurity(searchValue);
//                             const filteredSecurity = securityData.filter(security =>
//                                 security.securitiesSymbol.toLowerCase().includes(searchValue)
//                             );
//                             setFilteredSecurity(filteredSecurity);
//                         }}
//                     />
//                     <br />
//                     <Button variant="primary" onClick={handleFetchSecurityData}>Search</Button> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

//                     <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//                     <br />

//                     <table className="table table-sm table-dark">

//                         <thead className="thead-dark">
//                             <tr className="table table-sm table-dark">
//                                 <th>Security Symbol</th>
//                                 <th>Security Name</th>
//                                 <th>Open price</th>


//                             </tr>
//                         </thead>
//                         <tbody>
//                             {securityData.map((data, index) => (
//                                 <tr key={index} onClick={() => handleSelectSecurity(data.securitiesSymbol)} className="bg-white">
//                                     <td className="text-dark font-weight-bold">{data.securitiesSymbol}</td>
//                                     <td className="text-dark">{data.securitiesDescription}</td>
//                                     <td className="text-dark">{data.open}</td>


//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </Modal.Body>
//                 <Modal.Footer>

//                 </Modal.Footer>
//             </Modal>


//             <table className='striped bordered hover  table-sm' style={{ 'margin-top': '20px', 'width': '100%', 'tableLayout': 'fixed' }}>
//                 <thead className='table  table-sm'>
//                     <tr className="table table-sm table-dark text-dark">

//                         <th>Portfolio Name</th>
//                         <th>Equity Category</th>
//                         <th>Units</th>
//                         <th>Asset Class</th>
//                         <th>Security Name</th>
//                         <th>Last</th>
//                         <th>Amount</th>
//                         <th>Invested Amount</th>
//                         <th>Available Balance</th>
//                     </tr>
//                 </thead>
//                 <tbody className="table table-sm table-dark text-light">
//                     {formData.map(obj => (
//                         <tr key={obj.portfolioName}>
//                             <td>{obj.portfolioName}</td>
//                             <td>{obj.equityCategory}</td>
//                             <td>{obj.units}</td>
//                             <td>{obj.assetClass}</td>
//                             <td>{obj.securityName}</td>
//                             <td>{obj.last}</td>
//                             <td>{obj.amount}</td>
//                             <td>{obj.investedAmount}</td>
//                             <td>{obj.availableAmount}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>


//         </div>
//     );
// }
// export default StockChoose;

////////////////////////////////////////////////////////////////////////

import { Table, Modal, Button, Form } from 'react-bootstrap';
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import './StockChoose.css'
import Header from '../header/header';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import React, { useState, useEffect, useCallback } from 'react';

const StockChoose = () => {
    const [formData, setFormData] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialPortfolioName = searchParams.get('portfolioName');
    const initialAmount = searchParams.get('amount');


    const [portfolioName, setPortfolioName] = useState(initialPortfolioName);
    const [amount, setAmount] = useState(initialAmount);
    const [portfolio, setPortfolio] = useState(false);

    const [securityData, setSecurityData] = useState([]); // to store the data fetched from API
    const [showModal, setShowModal] = useState(false); // to control the visibility of the modal
    const [selectedSecurity, setSelectedSecurity] = useState(''); // to store the selected security name
    const [portfolioData, setPortfolioData] = useState([{ portfolioName: '', amount: '', securityName: '', assetClass: '', equityCategory: '', exchange: '', lasttradedprice: '', buyprice: '', units: '', investedAmount: '' }]);

    const [selectedIndex, setSelectedIndex] = useState(null);


    const navigate = useNavigate();


    const [filteredSecurity, setFilteredSecurity] = useState([]);
    const [data, setData] = useState([]);

    let available = 0;
    let total = 0;



    const handlePortfolioNameChange = (event) => {
        setPortfolioName(event.target.value);
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }



    const handleCalculation = (index) => {
        const updatedPortfolioData = [...portfolioData];
        updatedPortfolioData[index].investedAmount = updatedPortfolioData[index].last * updatedPortfolioData[index].units;
        setPortfolioData(updatedPortfolioData);
    }


    const handleTotalamount = (portfolioName) => {
        let balance = 0;
        formData.forEach((data) => {
            if (data.portfolioName === portfolioName) {
                total += parseFloat(data.investedAmount);
                balance = initialAmount - total;
            
                // handleAvailableBalance(total.toFixed(2));
            }
            else {
                console.log("Portfolio Not found")
            }
        });

        console.log(total);
        localStorage.setItem('TotalAmount', balance.toFixed(2));
        return balance.toFixed(2);
    };

    // const handleAvailableBalance = (total) => {
    //     // console.log(total);
    //     available = initialAmount - total;
    //     console.log(available);

    //     if (available < 0) {
    //         available = 0;
    //     }
    //     if (available <= 0) {
    //         toastr.error('Cannot add stocks available balance is Zero')
    //     }

    //     localStorage.setItem('availableBalance', available.toFixed(2));

    //     return available.toFixed(2);
    // };


    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFetchSecurityData = async () => {
        try {
            const response = await fetch('http://localhost:8089/project/UnifiedSecurityMaster/getallsecurities');
            if (!response.ok) {
                throw new Error('Failed to fetch securities');
            }
            const data = await response.json();
            setSecurityData(data);
            setShowModal(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelectSecurity = (selected) => {
        const updatedPortfolioData = [...portfolioData];
        const selectedSecurity = securityData.find((security) => security.securitiesSymbol === selected);
        if (selectedIndex !== -1) {
            updatedPortfolioData[selectedIndex] = {
                ...updatedPortfolioData[selectedIndex],
                securityName: selectedSecurity.securitiesSymbol,
                assetClass: selectedSecurity.assetClass,
                equityCategory: selectedSecurity.equityCategory,
                exchange: selectedSecurity.securitiesExchange,
                last: selectedSecurity.last,
                open: selectedSecurity.open,
                units: '',
                investedAmount: '',
            };
            setPortfolioData(updatedPortfolioData);
        }
        setSelectedIndex(-1);
        setSelectedSecurity(selected);
        setShowModal(false);
    };


    const handleSell = () => {
        toastr.error('Sorry', '', { positionClass: 'toast-bottom-right' });

    }

    const handleBuy = () => {
        const newRow = {
            ...portfolioData.find((data) => data.id === undefined),
            portfolioName: portfolioName, // add portfolioName to the new row
            amount: amount,
            availableAmount: available,
            // investedAmount:investedAmount
        };

        if (!newRow.assetClass || !newRow.units || !newRow.investedAmount || !newRow.securityName) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please fill all the columns!'
            });
            return;
        }

        

        // const availableBalance = handleAvailableBalance(total);
        // if (availableBalance < 0) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Error!',
        //         text: "Sorry, you can't buy. Available balance is not enough."
        //     });
        //     return;
        // }

        fetch(`http://localhost:8089/project/portfolioManagement/addasset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRow)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Show success message using Sweet Alert
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your purchase was successful!',
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(0);
                    }
                })

                // Handle success
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // Show error message using Sweet Alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.'
                });
                // Handle error

            });
    };


    const fetchFormData = async () => {
        try {
            const response = await fetch(`http://localhost:8089/project/portfolioManagement/getassetbypname/${initialPortfolioName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch form data');
            }
            const data = await response.json();
            setFormData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFormData();
    }, [initialPortfolioName]);

    useEffect(() => {
        fetchFormData();
    }, [initialAmount]);


    return (
        <div>
            <Header />
            <br />
            {/* <h2>Add your stocks</h2> */}
            <br />

            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr className="table table-sm table-dark"></tr>
                    <td className="text-right font-weight-bold text-center h4 heading">
                        <span style={{ color: 'black' }}>
                            Portfolio Name:
                        </span>
                        <span style={{ color: '#16524f' }}>
                            {portfolioName}
                        </span>
                    </td>

                    <td className="text-right font-weight-bold text-center h4 heading">
                        <span style={{ color: 'black' }}>
                            Amount:
                        </span>
                        <span style={{ color: 'blue' }}>
                            {amount}
                        </span>
                    </td>
                    {/* <td className="text-right font-weight-bold text-center h4 heading">
                        <span style={{ color: 'black' }}>
                            Available Balance:
                        </span>
                        <span style={{ color: 'red' }}>
                            {handleAvailableBalance(available)}
                        </span>
                    </td> */}
                    <td className="text-right font-weight-bold text-center h4 heading">
                        <span style={{ color: 'black' }}>
                            Balance:
                        </span>
                        <span style={{ color: 'green' }}>
                            {handleTotalamount(portfolioName)}
                        </span>
                    </td>



                </thead>
            </Table>



            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr className="table table-sm table-dark">
                        {portfolio && <th>Name</th>}
                        <th>Security Name</th>
                        <th>Asset Type</th>
                        <th>Equity Category</th>
                        <th>Exchange</th>
                        <th>Last Traded Price</th>
                        <th>Buy price</th>
                        <th>Units</th>
                        <th>Transaction Date & Time</th>
                        <th>Invested amount</th>
                        <th>Allocate</th>
                        <th>Deallocate</th>
                    </tr>
                </thead>



                <tbody>
                    {portfolioData.map((data, index) => (
                        <tr key={index}>
                            {portfolio && (
                                <td>
                                    <Form.Control
                                        type='text'
                                        value={portfolioName}
                                        onChange={handlePortfolioNameChange}
                                    />

                                    <Form.Control
                                        type='number'
                                        value={amount}
                                        onChange={handleAmountChange}
                                    />
                                </td>

                            )}
                            <td>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Security"
                                    onClick={() => {
                                        setSelectedIndex(index);
                                        setShowModal(true)
                                    }}
                                    value={data.securityName}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].securityName = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.assetClass}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].assetClass = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.equityCategory}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].equityCategory = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.exchange}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].exchange = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.last}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].lasttradedprice = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.open}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].buyprice = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.units}
                                    onChange={(e) => {
                                        const updatedPortfolioData = [...portfolioData];
                                        updatedPortfolioData[index].units = e.target.value;
                                        setPortfolioData(updatedPortfolioData);
                                        handleCalculation(index);
                                    }}
                                />
                            </td>
                            <td>

                                <Form.Control

                                    type="datetime-local"

                                    value={data.transactionDate}

                                    onChange={(e) => {

                                        const updatedPortfolioData = [...portfolioData];

                                        updatedPortfolioData[index].transactionDate = e.target.value;

                                        setPortfolioData(updatedPortfolioData);

                                        handleCalculation(index);

                                    }}

                                />

                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={data.investedAmount}
                                    readOnly
                                />
                            </td>
                            <td>
                                <Button variant="success" disabled={data.purchased} onClick={() => handleBuy(index)}>
                                    {data.purchased ? "Buy" : "Allocate"}
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleSell(index)}>Deallocate</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </Table>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className="btn-close-white">
                    <Modal.Title className="text-dark font-weight-bold">Search Security</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Enter Security Name"
                        value={selectedSecurity}
                        onChange={(e) => {
                            const searchValue = e.target.value.toLowerCase();
                            setSelectedSecurity(searchValue);
                            const filteredSecurity = securityData.filter(security =>
                                security.securitiesSymbol.toLowerCase().includes(searchValue)
                            );
                            setFilteredSecurity(filteredSecurity);
                        }}
                    />
                    <br />
                    <Button variant="primary" onClick={handleFetchSecurityData}>Search</Button> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <br />

                    <table className="table table-sm table-dark">

                        <thead className="thead-dark">
                            <tr className="table table-sm table-dark">
                                <th>Security Symbol</th>
                                <th>Security Name</th>
                                <th>Open price</th>


                            </tr>
                        </thead>
                        <tbody>
                            {securityData.map((data, index) => (
                                <tr key={index} onClick={() => handleSelectSecurity(data.securitiesSymbol)} className="bg-white">
                                    <td className="text-dark font-weight-bold">{data.securitiesSymbol}</td>
                                    <td className="text-dark">{data.securitiesDescription}</td>
                                    <td className="text-dark">{data.open}</td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>


            <table className='striped bordered hover  table-sm' style={{ 'margin-top': '20px', 'width': '100%', 'tableLayout': 'fixed' }}>
                <thead className='table  table-sm'>
                    <tr className="table table-sm table-dark text-dark">

                        <th>Portfolio Name</th>
                        <th>Equity Category</th>
                        <th>Units</th>
                        <th>Asset Class</th>
                        <th>Security Name</th>
                        <th>Last</th>
                        <th>Invested Amount</th>
                        {/* <th>Available Balance</th> */}
                    </tr>
                </thead>
                <tbody className="table table-sm table-dark text-light">
                    {formData.map(obj => (
                        <tr key={obj.portfolioName}>
                            <td>{obj.portfolioName}</td>
                            <td>{obj.equityCategory}</td>
                            <td>{obj.units}</td>
                            <td>{obj.assetClass}</td>
                            <td>{obj.securityName}</td>
                            <td>{obj.last}</td>
                            <td>{obj.investedAmount}</td>
                            {/* <td>{obj.availableAmount}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}
export default StockChoose;