import React from 'react';
import './JoinUs.css';
import lightPhone1 from 'assets/images/phone image 1.png';
import lightPhone2 from 'assets/images/phone image 2.png';
import { motion } from 'framer-motion';

const sectionContainer = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 2.5,
		},
	},
};

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

const cardVariants = {
	hidden: {
		opacity: 0,
		height: 0,
	},
	visible: {
		opacity: 1,
		height: 'initial',
		transition: {
			duration: 1,
			ease: 'linear',
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};

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
};

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
};

const JoinUs = () => {
	return (
		<section
			className='join-us'
			variants={sectionContainer}
			initial='hidden'
			// animate='visible'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<div>
				<h2 variants={headerVariants}>Why Choose Thyflow Services</h2>
				<div className='join-card' variants={cardVariants}>
					<h3 variants={textVariants}>ThyFlow App Dispatch Specialist</h3>
					<p variants={textVariants}>
						will act as your assistant to ensure your on-demand booking goes
						smoothly from start to finish.
					</p>
					<ul>
						<li variants={textVariants}>We receive your booking request.</li>
						<li variants={textVariants}>
							We match you with a verified on-demand service provider
						</li>
						<li variants={textVariants}>
							You sit back & relax. The service gets done.
						</li>
					</ul>
					<a variants={textVariants} href='https://www.google.com'>
						Join our beta crew &#62;
					</a>
					<img src={lightPhone1} alt='phone' variants={imageVariants} />
				</div>
			</div>
			<div>
				<div className='join-card' variants={cardVariants}>
					<h3 variants={textVariants}>ThyFlow App makes it easy</h3>
					<p variants={textVariants}>
						To find & book verified on-demand services. We currently offer 5
						mobile services you can book.
					</p>
					<ul>
						<li variants={textVariants}>Find Service</li>
						<li variants={textVariants}>Book Service</li>
						<li variants={textVariants}>Get Result</li>
					</ul>
					<a variants={textVariants} href='https://www.google.com'>
						Join our beta crew &#62;
					</a>
					<img src={lightPhone2} alt='phone' variants={imageVariants} />
				</div>
			</div>
		</section>
	);
};

export default JoinUs;
