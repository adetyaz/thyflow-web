import React from 'react'
import './Services.css'
import { motion } from 'framer-motion'

const headerVariants = {
	hidden: {
		x: '-100%',
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
}

const cardContainer = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 1,
		},
	},
}

const cardVariants = {
	hidden: {
		opacity: 0,
		height: 0,
	},
	visible: {
		opacity: 1,
		height: '30rem',
		transition: {
			duration: 0.8,
			ease: 'linear',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
}

const cardNumberVariants = {
	hidden: {
		top: 0,
		opacity: 0,
	},
	visible: {
		top: '-2.5rem',
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'linear',
		},
	},
}

const textVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		scale: [1.1, 1],
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
}

const Services = () => {
	return (
		<section className='services'>
			<motion.h2
				variants={headerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				How ThyFlow On-Demand Services Work
			</motion.h2>
			<motion.div
				className='cards'
				variants={cardContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 1 }}
			>
				<motion.div className='card' variants={cardVariants}>
					<motion.h1 variants={cardNumberVariants}>1</motion.h1>
					<motion.h3 variants={textVariants}>Download App</motion.h3>
					<motion.p variants={textVariants}>
						Sign up to view list of mobile services in your city.
					</motion.p>
				</motion.div>

				<motion.div className='card' variants={cardVariants}>
					<motion.h1 variants={cardNumberVariants}>2</motion.h1>
					<motion.h3 variants={textVariants}>Choose your On-demand</motion.h3>
					<motion.p variants={textVariants}>
						service, location, time for service & book!
					</motion.p>
				</motion.div>
				<motion.div className='card' variants={cardVariants}>
					<motion.h1 variants={cardNumberVariants}>3</motion.h1>
					<motion.h3 variants={textVariants}>Get matched</motion.h3>
					<motion.p variants={textVariants}>
						with our verified mobile service provider well experience to perform
						service
					</motion.p>
				</motion.div>
				<motion.div className='card' variants={cardVariants}>
					<motion.h1 variants={cardNumberVariants}>4</motion.h1>
					<motion.h3 variants={textVariants}>
						Friendly, professional vetted
					</motion.h3>
					<motion.p variants={textVariants}>
						service provider will arrival at your location to perform service.
					</motion.p>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Services
