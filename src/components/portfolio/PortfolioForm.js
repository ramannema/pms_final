
import './PortfolioForm.css'
import { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import toastr from "toastr";
import'toastr/build/toastr.min.css';

const currencies = ['INR', 'USD'];

// const themes = ['Aggressive', 'Conservative', 'Moderate'];

const reblanceFrequencys = ['Daily', 'Monthly', 'Quarterly'];
const exchanges = ['NSE', 'Nasdaq'];
const themes = ['Very Aggressive','Aggressive', 'Conservative', 'Moderate'];
const themeId = {
Aggressive: 1,
Conservative: 3,
Moderate: 2,
};

function PortfolioForm() {

    const [portfolioName, setPortfolioName] = useState('');
    const [fundManagerName, setFundManager] = useState('');
    const [currency, setBaseCurrency] = useState('INR');
    const [benchMark, setBenchmark] = useState('');
    const [theme, setTheme] = useState('Moderate');
    const [amount, setamount] = useState('');
    const [rebalancingFrequency, setRebalanceFrequency] = useState('Daily');
    const [exchange, setExchange] = useState('NSE');
    const [ptId, setptId] = useState('');
    const [status,setStatus] = useState('Ready');
    const navigate = useNavigate();

    function handleSave(event) {
        event.preventDefault();
        if(!portfolioName || !fundManagerName || !benchMark ||!amount ||!currency ||!theme ||!rebalancingFrequency ||!exchange){
            Swal.fire({
                icon: 'error',
                title: 'oops!',
                text: 'Please fill all the fields!'})
                return;
                    }
                    let themeId =5
                    switch(theme) {
                        case 'Very Aggressive':
                            themeId = 1;
                            break;
                            case 'Aggressive':
                                themeId = 2;
                                break;
                            case 'Moderate':
                                themeId = 3;
                                break;
                            case 'Conservative':
                                themeId = 4;
                                break;
                            default:
                                themeId = 5;
                                
                    }
        console.log('submitting form');
        fetch('http://localhost:8089/project/portfolioManagement/addportfolio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ portfolioName, fundManagerName, currency, benchMark, theme, status, rebalancingFrequency, exchange, amount, themes:{themeId} })
            
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
             
               toastr.success('Portfolio saved successfully','',{positionClass: 'toast-bottom-right'})
            

                
                }

    const handleNextpage = () => {
        navigate(`/StockChoose?portfolioName=${portfolioName}&amount=${amount} &benchMark=${benchMark}&theme=${theme}`);

    }

    

    function handleReset() {

        setPortfolioName('');

        setFundManager('');

        setBaseCurrency('INR');

        setBenchmark('');

        // setType('amount');

        setTheme('Moderate');

        setamount('');

        setStatus('Ready');

        

        

    }

    const handleChange = (event) => {
        setamount(amount(event.target.value));
    };



    return (
        <div >
            <Header />
           
           
            <div className='h'>
             <br/>
                <h1 className='hhh'>Create Your Portfolio</h1>
                <br />
            </div>

            <div className='container bd' style={{ 'margin-top': '20px', 'width': '100%', 'tableLayout':'fixed', 'height': '100%'}}>

                <Form className='form-group'>
                    <div className='row'>
                        <Form.Group controlId="portfolioName" className='col-sm-6'>

                            <Form.Label>Portfolio Name</Form.Label>

                            <Form.Control type="text" required className='form-control' value={portfolioName} onChange={e => setPortfolioName(e.target.value)} />

                        </Form.Group>




                        <Form.Group controlId="fundManager" className='col'>

                            <Form.Label>Fund Manager</Form.Label>

                            <Form.Control type="text" value={fundManagerName} className='form-control' onChange={e => setFundManager(e.target.value)} />

                        </Form.Group>
                    </div>
                    <div className='row'>


                        <Form.Group controlId="baseCurrency" className='col'>

                            <Form.Label>Base Currency</Form.Label>

                            <Form.Control as="select" value={currency} className='form-control' onChange={e => setBaseCurrency(e.target.value)}>

                                {currencies.map(currency => (

                                    <option key={currency} value={currency}>{currency}</option>

                                ))}

                            </Form.Control>

                        </Form.Group>

                        <Form.Group controlId="benchmark" className='col'>

                            <Form.Label>Benchmark</Form.Label>

                            <Form.Control className='form-control' type="text" value={benchMark} onChange={e => setBenchmark(e.target.value)} />

                        </Form.Group>
                    </div>

                    <div className='row'>

                    <Form.Group controlId="theme" className='col'>
<Form.Label>Theme</Form.Label>
<Form.Control as="select" value={theme} onChange={e => {
const selectedTheme = e.target.value;
setTheme(selectedTheme);
setptId(themeId[selectedTheme]);
}}>
{themes.map(theme => (
<option key={theme} value={theme}>{theme}</option>
))}
</Form.Control>
</Form.Group>
                   

<Form.Group controlId="amount" className='col-sm-6'>

<Form.Label>amount</Form.Label>

<Form.Control type="number" className='form-control' value={amount} onChange={e => setamount(e.target.value)} />

</Form.Group>




                       
                    </div>


                    <div className='row'>
                        <Form.Group controlId="exchange" className='col'>

                            <Form.Label>Exchanges</Form.Label>

                            <Form.Control className='form-control' as="select" value={exchange} onChange={e => setExchange(e.target.value)}>

                                {exchanges.map(exchange => (

                                    <option key={exchange} value={exchange}>{exchange}</option>

                                ))}

                            </Form.Control>

                        </Form.Group>




                        <Form.Group controlId="rebalancingFrequency" className='col'>

<Form.Label>Re-Balance Frequency</Form.Label>

<Form.Control as="select" value={rebalancingFrequency} onChange={e => setRebalanceFrequency(e.target.value)}>

{reblanceFrequencys.map(rebalancingFrequency => (

<option key={rebalancingFrequency} value={rebalancingFrequency}>{rebalancingFrequency}</option>

))}

</Form.Control>

</Form.Group>

                    </div>
                    <br /><br />




                    <div className='form-group'>
                        <Button className='btn btn-primary col-sm-2' variant="primary" onClick={handleSave}>Save</Button>{' '}

                        <Button className='btn btn-success col-sm-2' variant="secondary" onClick={handleReset}>Reset</Button>{' '}

                        <Button className='btn btn-info col-sm-2' variant="info" onClick={handleNextpage}>Next</Button>


                    </div>
                </Form>
                <br />
            </div>
            <Footer />
        </div>

    );

}

export default PortfolioForm;