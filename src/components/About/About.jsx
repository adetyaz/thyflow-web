import './About.css';
import lightPhone from '../../assets/images/phone image 2.png'


const About = () => {
    return(
        <section className="about">
            <div className="about-image">
                <img src={lightPhone} alt="phone"/>
            </div>
            <div className="about-text">
                <h2>Welcome to ThyFlow</h2>
                <h3>..the marketplace for on-demand services.</h3>
                <p>ThyFlow was created with one simple question in mind:</p>
                <p>How can we help busy professionals dealing with the stress and hassle that comes with living in big cities save time and maintain their appearance so that they can continue to enjoy life on their terms?</p>
                <p><span>The solution? </span>... On Demand services, available to you at your convenience.</p>
                <p>You can now BOOK on-demand service from the comfort of your phone. </p>
                <p>NO NEED to go to the dry cleaners, barbershop, pet groomers, car wash, etc. Let these services, plus more, come to you.</p>
            </div>
        </section>     
    )
}

export default About