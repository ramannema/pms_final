import React from 'react'
import './home.css'
import '../Assests/stock.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <h1>
                <a href="#">
                  {" "}
                  <span className="fa-solid fa-code" aria-hidden="true" />{" "}
                  <span></span>




                  {/* <div id="intro">
                    <p className="name">

                      <img src={require('../Assests/fs.jpg')} className="r" style={{ boxShadow: '0 0 15px #eee' }} alt />
                    </p>


                    <br></br>

                  </div> */}






                  <span>Fs</span>

                </a>

              </h1>
            </li>
            <li>
              <a href="/">Home</a>
            </li>


            {/* <li>
              <Link to={"/Portfolio"}>Portfolio</Link>
            </li> */}

            {/* <li>
        <a href="/contact">Contact</a>
      </li> */}


            <div className="dropdown">
              <span>Master</span>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to={"/Portfolio"}>Portfolio</Link>
                    <Link to={"/Search"}>USM</Link>
                    <Link to={"/ThemeAddingPage"}>Custom Theme</Link>
                  </li>
                </ul>
              </div>
            </div>



            {/* { <li>
        <a href="/search">Stock</a>
      </li>} */}

            {/* <Link to={"/search"}> Stock </Link>

            <Link to={"/ThemeAddingPage"}>Theme</Link> */}

            {/* <Link to={"/AddAssetsPage"}>Add Stocks</Link> */}

            {/* <Link to={"/Comparision"}>Comparision</Link> */}

            <Link to={"/contact"}>Contact</Link>

            <Link to={"/CreatePortfolio"}><li >
              Create Portfolio
            </li></Link>
          </ul>
        </nav>

        <br/>
        <br/>

        <div id="intro">
          <p className="name">

            <img src={require('../Assests/stock.png')} className="img" style={{ boxShadow: '0 0 15px #eee' }} alt />
          </p>


          <br></br>

        </div>
        <div className="gradient" />
        <div className="gradient" />
        <div className="section-plum">
          <section id="contact">
            <h2>Create Portfolio</h2>
            <p>
              BUILD PORTFOLIO AND MANAGE THEM ALL IN A SINGLE PLACE!
            </p>
            <p>

              <a href="/CreatePortfolio" className="button">
                Create Portfolio
              </a>
            </p>
          </section>
        </div>
        <div className="gradient" />
        <br></br>
        <br></br>
        <br></br>
        <br />
        <footer>

          <h2>Financial Samurai</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jen4web" target="_blank">
                {" "}
                <span className="fab fa-linkedin" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.github.com/jen4web" target="_blank">
                <span className="fab fa-github-square" aria-hidden="true" />
                <span className="sr-only">Github</span>
              </a>{" "}
            </li>
            <li>
              <a href="mailto:jen@example.com">
                <span className="fas fa-envelope" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>
          <p>
            <small>©2023 Financial Samurai. All rights reserved</small>
          </p>
        </footer>
      </>
    </div>
  )
}

export default Home