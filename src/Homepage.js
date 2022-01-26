import About from 'components/About/About';
import Countdown from 'components/Countdown/Countdown';
import CTA from 'components/CTA/CTA';
import Download from 'components/Download/Download';
import Header from 'components/Header/Header'
import Hero from "components/Hero/Hero";
import JoinUs from 'components/Join-us/JoinUs';
import Services from 'components/Services/Services';
import { GlobalStyles } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from './theme'
import Footer from 'components/Footer/Footer';
import { useDarkMode } from './useDarkMode'
import Toggle from 'components/Toggle/Toggle';

const Homepage = () => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;
  
  // if(!mountedComponent) return <div/>
  return(
    <ThemeProvider theme={themeMode} >
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
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
    </ThemeProvider>  
  )
}

export default Homepage;