import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";
function Links(){
    return(
        <>
            <div className="Link">
                <div className="headerImg">
                    <div className="trad">Trading</div>
                    <div className="app">App</div>
                </div>
                <div className="name">
              
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">News</NavLink></li>
                  <li><NavLink to="/mutual">Mutual</NavLink></li>
                  {/* <li><NavLink to="/cryptoCurrency">CryptoCurrency</NavLink></li> */}
                  <li><NavLink to="/contact">Learn</NavLink></li>
              </ul>
          </div>
            </div>
        </>
    )
}
export default Links;
