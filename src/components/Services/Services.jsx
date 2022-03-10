import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const headerVariants = {
	hidden: {
		x: '-100%',
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

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
};

const cardVariants = {
	hidden: {
		opacity: 0,
		height: 0,
	},
	visible: {
		opacity: 1,
		height: '30rem',
		transition: {
			duration: 1,
			ease: 'linear',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};

const cardNumberVariants = {
	hidden: {
		top: 0,
		opacity: 0,
	},
	visible: {
		top: '-2.5rem',
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'linear',
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		scale: [1.1, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Services = () => {
	return (
		<section className='services'>
			<h2
				variants={headerVariants}
				initial='hidden'
				// animate='visible'
				whileInView='visible'
				viewport={{ once: true }}
			>
				How ThyFlow On-Demand Services Work
			</h2>
			<div
				className='cards'
				variants={cardContainer}
				initial='hidden'
				// animate='visible'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<div className='card' variants={cardVariants}>
					<h1 variants={cardNumberVariants}>1</h1>
					<h3 variants={textVariants}>Download App</h3>
					<p variants={textVariants}>
						Sign up to view list of mobile services in your city.
					</p>
				</div>

				<div className='card' variants={cardVariants}>
					<h1 variants={cardNumberVariants}>2</h1>
					<h3 variants={textVariants}>Choose your On-demand</h3>
					<p variants={textVariants}>
						service, location, time for service & book!
					</p>
				</div>
				<div className='card' variants={cardVariants}>
					<h1 variants={cardNumberVariants}>3</h1>
					<h3 variants={textVariants}>Get matched</h3>
					<p variants={textVariants}>
						with our verified mobile service provider well experience to perform
						service
					</p>
				</div>
				<div className='card' variants={cardVariants}>
					<h1 variants={cardNumberVariants}>4</h1>
					<h3 variants={textVariants}>Friendly, professional vetted</h3>
					<p variants={textVariants}>
						service provider will arrival at your location to perform service.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
