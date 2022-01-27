import About from 'components/About/About';
import Countdown from 'components/Countdown/Countdown';
import CTA from 'components/CTA/CTA';
import Download from 'components/Download/Download';
import Header from 'components/Header/Header'
import Hero from "components/Hero/Hero";
import JoinUs from 'components/Join-us/JoinUs';
import Services from 'components/Services/Services';
import Footer from 'components/Footer/Footer';

const Homepage = () => {
  return(
      <>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <JoinUs />
          <Download />
          <Countdown />
          <CTA />
        </main>
        <Footer />
      </> 
  )
}

export default Homepage;