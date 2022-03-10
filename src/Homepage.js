import About from 'components/About/About';
import Countdown from 'components/Countdown/Countdown';
import CTA from 'components/CTA/CTA';
import Download from 'components/Download/Download';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import JoinUs from 'components/Join-us/JoinUs';
import Services from 'components/Services/Services';
import Footer from 'components/Footer/Footer';
// import { ThemeProvider } from 'styled-components'
// import { GlobalStyle } from './global'
// import { DarkTheme, LightTheme } from './theme'

const Homepage = () => {
	// const [theme, setTheme] = useState('light')

	// const themeToggler =() => {
	//   theme === 'light' ? setTheme('dark') : setTheme('light')
	// }

	return (
		<>
			{/* <GlobalStyle /> */}
			<Header />
			{/* <button onClick={themeToggler}>toggle</button> */}
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
	);
};

export default Homepage;
