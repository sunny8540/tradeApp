import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";
function Footer(){
    return(
        <>
            <div className="footer">
                <div className="linkF">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>News</NavLink></li>
                    <li><NavLink to='/mutual'>Mutual</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                </div>
                <div className="contact">
                    <ul>
                        <li><img src="https://www.svgrepo.com/show/57435/facebook.svg"/></li>
                        <li><img src="https://www.svgrepo.com/show/123786/instagram.svg"/></li>
                        <li><img src="https://www.svgrepo.com/show/204954/twitter.svg"/></li>
                        <li><img src="https://www.svgrepo.com/show/204944/linkedin.svg"/></li>
                    </ul>
                </div>
                <div className="sub">
                Contact us<br/>
                    <input type="text" placeholder="Leave a Comment"/>
                </div>
                <div className="gmail">
                    gmail<br/>
                    sunnyraj@gmail.com
                </div>
            </div>
        </>
    )
}
export default Footer;