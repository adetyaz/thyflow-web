import './JoinUs.css'
import lightPhone1 from 'assets/images/phone image 1.png'
import lightPhone2 from 'assets/images/phone image 2.png'

function JoinUs() {
    return (
        <section className="join-us">
            <div>
                <h2>Why Choose Thyflow Services</h2>
                <div className="join-card">
                    <h3>ThyFlow App Dispatch Specialist</h3>
                    <p>will act as your assistant to ensure your on-demand booking goes smoothly from start to finish.</p>
                    <ul>
                        <li>We receive your booking request.</li>
                        <li>We match you with a verified on-demand service provider</li>
                        <li>You sit back & relax. The service gets done.</li>
                    </ul>
                    <a href="https://www.google.com">Join our beta crew &#62;</a>
                    <img src={lightPhone1} alt="phone"/>
                </div>
            </div>
            <div>
                <div className="join-card">
                    <h3>ThyFlow App makes it easy</h3>
                    <p>To find & book verified on-demand services. We currently offer 5 mobile services you can book.</p>
                    <ul>
                        <li>Find Service</li>
                        <li>Book Service</li>
                        <li>Get Result</li>
                    </ul>
                    <a href="https://www.google.com">Join our beta crew &#62;</a>
                    <img src={lightPhone2} alt="phone"/>
                </div>
            </div>
        </section>
    )
}

export default JoinUs
