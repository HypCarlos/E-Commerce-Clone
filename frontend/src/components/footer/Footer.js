import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";

function Footer() {
return (
<div className="footer">
<div className="footer-elements">

    <ul>
        <li><Link to=""><h4>TERMS OF USE</h4></Link></li>
        <li><Link to=""><h4>PRIVACY</h4></Link></li>
        <li><Link to=""><h4>FAQ</h4></Link></li>
        <li><Link to=""><h4>NEWSLETTER</h4></Link></li>
        <li><Link to=""><h4>TRACK ORDER</h4></Link></li>
    </ul>
    </div>
</div>
)
}

export default Footer;