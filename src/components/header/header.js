import React from 'react'
import { Link } from 'react-router-dom'
import '../header/header.css'
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="#">
              {" "}
              <span className="fa-solid fa-code" aria-hidden="true" />{" "}
              <span></span>

              <span>Fs</span>

            </a>

          </h1>
        </li>
        <li>
          <a href="/">Home</a>
        </li>


        
        {/* {<li>
          <Link to={"/Portfolio"}>Portfolio</Link>
        </li>} */}


        {/* {<li>
        <a href="/search">Stock</a>
      </li> } */}

        <div className="dropdown">
          <span>Master</span>
          <div className="dropdown-content">
            <ul>
              <li>
              <Link to={"/Portfolio"}>Portfolio</Link>
              <Link to={"/Search"}> USM </Link>
              <Link to={"/ThemeAddingPage"}>Custom Theme</Link>
              </li>
            </ul>
          </div>
        </div>



        {/* <Link to={"/Search"}> Stock </Link>

        <Link to={"/ThemeAddingPage"}>Theme</Link> */}

        {/* <Link to={"/AddAssetsPage"}>Add Stocks</Link> */}

        {/* <Link to={"/Comparision"}>Comparision</Link> */}
        <Link to={"/contact"}> Contact</Link>

        {<Link to={"/CreatePortfolio"}><li >
          Create Portfolio
        </li></Link>}
      </ul>
    </nav>

  )
}

export default Header