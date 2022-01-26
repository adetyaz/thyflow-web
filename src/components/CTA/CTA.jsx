import Button from 'components/Button/Button'
import './CTA.css'
import backgroundImage from 'assets/images/light background 2.png'

function CTA() {
    return (
        <section className="cta">
            <img src={backgroundImage} alt="background"/>
            <div>
                <h2>Are You Ready To Choose On-Demand Services?</h2>
                <p>Download app and book your service today</p>
                <Button>Join our beta crew</Button>
            </div>
        </section>
    )
}

export default CTA
