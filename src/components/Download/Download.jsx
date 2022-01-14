import './Download.css';
import lightPhone1 from '../../assets/images/phone image 3.png'
import lightPhone2 from '../../assets/images/phone image 4.png'
import playstore from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'

function Download() {
    return (
        <section className="download">
            <div className="download-options">
                <h2>Download the mobile app for a whole new experience.</h2>
                <div className="app-stores">
                    <img src={playstore} alt="google playstore"/>
                    <img src={appstore} alt="apple appstore"/>
                </div>
            </div>
            <div className="app-display">
                <img src={lightPhone1} alt="phone image"/>
                <img src={lightPhone2} alt="phone image"/>
            </div>
        </section>
    )
}

export default Download;