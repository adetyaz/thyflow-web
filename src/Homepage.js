import About from './components/About/About';
import Countdown from './components/Countdown/Countdown';
import CTA from './components/CTA/CTA';
import Download from './components/Download/Download';
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import JoinUs from './components/Join-us/JoinUs';
import Services from './components/Services/Services';

const Homepage = () => {
  return(
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <JoinUs />
      <Download />
      <Countdown />
      <CTA /> */}
    </>
  )
}

export default Homepage;