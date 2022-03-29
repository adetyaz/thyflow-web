import React from 'react'
import './Hero.css'
import Button from 'components/Button/Button'
import BigPhone from 'assets/images/big-white-phone.png'
import { motion } from 'framer-motion'

const headerVariants = {
	hidden: {
		y: '100%',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'linear',
		},
	},
}

const buttonVariants = {
	hidden: {
		y: '100%',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'linear',
		},
	},
}

const imgVariants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	visible: {
		opacity: 1,
		scale: [1, 0.9, 1],
	},
}

const Hero = () => {
	return (
		<section className='hero'>
			<div className='text-wrapper'>
				<motion.h1 variants={headerVariants} initial='hidden' animate='visible'>
					Together, we're here to help you save
					<span> time.</span>
				</motion.h1>
			</div>
			<motion.p variants={headerVariants} initial='hidden' animate='visible'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc
				ultricies sed etiam platea imperdiet.
			</motion.p>

			<div className='text-wrapper'>
				<Button variants={buttonVariants} initial='hidden' animate='visible'>
					join our beta crew
				</Button>
			</div>

			<motion.img
				src={BigPhone}
				alt='phone'
				className='hero-image'
				variants={imgVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 1 }}
			/>
		</section>
	)
}

export default Hero
