import './Footer.css'
import instagram from 'assets/images/instagram.png'
import twitter from 'assets/images/twitter.png'
import facebook from 'assets/images/facebook.png'
import linkedin from 'assets/images/linkedin.png'


function Footer() {
    return (
        <footer>
           <h3>
                Thyflow  
           </h3>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
            <p>1390 Market St, Suite 200. San Francisco, CA 94102</p>
            <div>            
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
                <img src={facebook} alt="facebook"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
            <p>©2021 ThyFlow Inc. All Rights Reserved. Privacy Policy</p>
        </footer>
    )
}

export default Footer


//created an infinite loop using conmpoent tags