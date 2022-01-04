import './Hero.css'
import Button from '../Button/Button'
import BigPhone  from '../../assets/images/Big Phone white.png'


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