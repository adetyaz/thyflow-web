import './Countdown.css'

function Countdown() {
    return (
        <section className="countdown">
            <h3>We'll fully launch the service</h3>
            <div className="countdown-timer">
                <div>
                    <h1>49</h1>
                    <span>Days</span>
                </div>
                <div>
                    <h1>22</h1>
                    <span>Hours</span>
                </div>
                <div>
                    <h1>55</h1>
                    <span>Minutes</span>
                </div>
                <div>
                    <h1>00</h1>
                    <span>Seconds</span>
                </div>
            </div>
        </section> 
    )
}
export default Countdown
