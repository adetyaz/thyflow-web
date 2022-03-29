import './Countdown.css'
import { motion } from 'framer-motion'

const headerVariants = {
	hidden: {
		opacity: 0,
		y: '100px',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
}

function Countdown() {
	return (
		<section className='countdown'>
			<motion.h3
				variants={headerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 1 }}
			>
				We'll fully launch the service
			</motion.h3>
			<div className='countdown-timer'>
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
