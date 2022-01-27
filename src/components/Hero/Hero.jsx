import './Hero.css'
import Button from 'components/Button/Button'
import BigPhone from 'assets/images/big-white-phone.png'
import BigPhoneDark from 'assets/images/big-black-phone.png'

const Hero = () => {
  return(
    <div className="hero">
      <h1>
        Together, we're here to help you save <span>time.</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc ultricies sed etiam platea imperdiet. </p>
      <Button>join our beta crew</Button>

      <img src={BigPhone} alt="phone" className="hero-image"/>
          
    </div>
  )
}

export default Hero