import React, { Component } from 'react'
import axios from 'axios';
import { useLoaderData, useParams, withRouter } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

function UpdatePortfolio() {

    const portfolioId = useParams();
    //alert(portfolioId.portfolioId);
    const [portfolioName, setportfolioName] = useState();
    const [fundManagerName, setfundManagerName] = useState();
    const [investedAmount, setInvestedAmount] = useState();
    const [exchange, setExchange] = useState();
    const [currency, setCurrency] = useState();
    const [theme, setTheme] = useState();
    const [data, setData] = useState([]);


    useEffect(() => {

        loadData();

    }, [])


    async function loadData() {

        const recievedData = await axios.get("http://localhost:8089/project/portfolioManagement/getPortfolioById/" + portfolioId.portfolioId)

        console.log(recievedData.data)
        setData(recievedData.data);
        setportfolioName(recievedData.data.portfolioName)
        setfundManagerName(recievedData.data.fundManagerName)
        setInvestedAmount(recievedData.data.investedAmount)
        setExchange(recievedData.data.exchange)
        setCurrency(recievedData.data.currency)
        setTheme(recievedData.data.theme)
        
        //alert(portfolioName)

    }

    const handleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });

    };

    //console.log(data);

    const baseURL = "http://localhost:8089/project/portfolioManagement/update/" + portfolioId.portfolioId;

    const put_portfolioId = useRef(null);

    const put_portfolioName = useRef(null);

    const put_fundManagerName = useRef(null);

    const put_InvestedAmount = useRef(null);

    const put_exchange = useRef(null);

    const put_currency = useRef(null);

    const put_theme = useRef(null);






    const [putResult, setPutResult] = useState(null);




    const fortmatResponse = (res) => {

        return JSON.stringify(res, null, 2);

    }



    async function putData() {
        //alert(portfolioName)
            const putData = {

                portfolioId : portfolioId.portfolioId,

                portfolioName: portfolioName,

                fundManagerName: fundManagerName,

                InvestedAmount: investedAmount,

                exchange: exchange,

                currency: currency,

                theme : theme

            };

          //  alert(putData.portfolioId)

            try {

                const res = await axios.put(baseURL, 

                  putData

                );




                if (!res.ok) {

                    const message = `error : ${res.status} - ${res.statusText}`;

                    throw new Error(message);

                }




                const data = await res.json();




                const result = {

                    status: res.status + "-" + res.statusText,

                    headers: { "Content-Type": res.headers.get("Content-Type") },

                    data: data,

                };

                setPutResult(fortmatResponse(result));

            } catch (err) {

                setPutResult(err.message);

            }

        

    }

    return (

        <>

           <Header/>

            <div className='container'>

                <div className='EditForm'>

                    {

                        //data ?

                            <>

                                <form className='Form'>

                                    {/* <div class="form-group">

                                        <label for="exampleInputEmail1">portfolioId</label>

                                        <input type="text" class="form-control" id="exampleInputEmail1" ref={put_portfolioId} value={portfolioId} onChange={(e) => setIsin(e.target.value)}

                                            placeholder="enter portfolio id "></input>



                                    </div> */}

                                    <div class="form-group">

                                        <label for="exampleInputEmail1">Portfolio Name</label>

                                        <input type="text" class="form-control" id="exampleInputEmail1" ref={put_portfolioName} value={portfolioName} onChange={(e) => setportfolioName(e.target.value)} placeholder="Enter portfolio name"></input>



                                    </div>

                                    <div class="form-group">

                                        <label for="exampleInputPassword1">fundManagerName</label>

                                        <input type="text" class="form-control" id="exampleInputPassword1" ref={put_fundManagerName} value={fundManagerName} onChange={(e) => setfundManagerName(e.target.value)} placeholder="Enter Name"></input>

                                    </div>

                                    <div class="form-group">

                                        <label for="exampleInputEmail1">Exchange</label>

                                        <input type="text" class="form-control" id="exampleInputEmail1" ref={put_exchange} value={exchange} onChange={(e) => setExchange(e.target.value)} placeholder="Enter Exchange"></input>



                                    </div>

                                    <div class="form-group">

                                        <label for="exampleInputEmail1">Currency</label>

                                        <input type="text" class="form-control" id="exampleInputEmail1" ref={put_currency} value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="Enter Currency"></input>



                                    </div>

                                    <div class="form-group">

                                        <label for="exampleInputEmail1">Theme</label>

                                        <input type="text" class="form-control" id="exampleInputEmail1" ref={put_theme} value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="Enter Theme"  readOnly={true}></input>



                                    </div>

                                  

                                

                                </form>

                                    <div className='subBtn'>

                                        <button type="submit" class="btn btn-primary" onClick={putData}>Save</button>

                                    </div>

                            </>

                          
                    }



                </div>

            </div>

            <Footer/>

        </>

    )

}




export default UpdatePortfolio