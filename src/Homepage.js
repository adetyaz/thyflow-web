import About from 'components/About/About';
import Countdown from 'components/Countdown/Countdown';
import CTA from 'components/CTA/CTA';
import Download from 'components/Download/Download';
import Header from 'components/Header/Header'
import Hero from "components/Hero/Hero";
import JoinUs from 'components/Join-us/JoinUs';
import Services from 'components/Services/Services';
import Footer from 'components/Footer/Footer';
import { useInView } from "react-intersection-observer";
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react';
// import { ThemeProvider } from 'styled-components'
// import { GlobalStyle } from './global'
// import { DarkTheme, LightTheme } from './theme'
// import {useState} from 'react'

const Homepage = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()
  // const [theme, setTheme] = useState('light')

  // const themeToggler =() => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }

  useEffect(() => {
    if(inView){
      controls.start('visible')
    }
  }, [controls, inView])

  return(
      <>
        {/* <GlobalStyle /> */}
        <Header ref={ref} />
        {/* <button onClick={themeToggler}>toggle</button> */}
        <main>
          <Hero ref={ref} />
          <Services ref={ref} />
          <About ref={ref} />
          <JoinUs ref={ref} />
          <Download />
          <Countdown />
          <CTA />
        </main>
        <Footer />
      </>
  )
}

export default Homepage;