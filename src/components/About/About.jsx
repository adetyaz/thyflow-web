import React from 'react'
import './About.css'
import lightPhone from '../../assets/images/phone image 2.png'
// import lightPhoneDark from '../../assets/images/phone image 2 dark.png'
import { motion } from 'framer-motion'

const imageContainer = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,
		transition: {
			duration: 1,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
}

const imageVariants = {
	hidden: {
		y: '100%',
	},
	visible: {
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeIn',
		},
	},
}

const textContainer = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			when: 'beforeChildren',
			staggerChildren: 1.5,
		},
	},
}

const textVariants = {
	hidden: {
		opacity: 0,
		x: '-100%',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
}

const About = () => {
	return (
		<section className='about'>
			<motion.div
				className='about-image'
				variants={imageContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 1 }}
			>
				<motion.img src={lightPhone} alt='phone' variants={imageVariants} />
			</motion.div>
			<motion.div
				className='about-text'
				variants={textContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 1 }}
			>
				<motion.h2 variants={textVariants}>Welcome to ThyFlow</motion.h2>
				<motion.h3 variants={textVariants}>
					..the marketplace for on-demand services.
				</motion.h3>
				<motion.p variants={textVariants}>
					ThyFlow was created with one simple question in mind:
				</motion.p>
				<motion.p variants={textVariants}>
					How can we help busy professionals dealing with the stress and hassle
					that comes with living in big cities save time and maintain their
					appearance so that they can continue to enjoy life on their terms?
				</motion.p>
				<motion.p variants={textVariants}>
					<span>The solution? </span>... On Demand services, available to you at
					your convenience.
				</motion.p>
				<motion.p variants={textVariants}>
					You can now BOOK on-demand service from the comfort of your phone.{' '}
				</motion.p>
				<motion.p variants={textVariants}>
					NO NEED to go to the dry cleaners, barbershop, pet groomers, car wash,
					etc. Let these services, plus more, come to you.
				</motion.p>
			</motion.div>
		</section>
	)
}

export default About
