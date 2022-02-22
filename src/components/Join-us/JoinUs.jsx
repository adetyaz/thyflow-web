import React from 'react';
import './JoinUs.css'
import lightPhone1 from 'assets/images/phone image 1.png'
import lightPhone2 from 'assets/images/phone image 2.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';


const sectionContainer = {
  hidden: {
    opacity: 1,
  },
  visible:{
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 2.5
    }
  }
}


const headerVariants={
  hidden: {
    x: '-100%',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

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
      staggerChildren: .5
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0,
    x: '-100%'
  },
  visible:{
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: .5,
    }
  }
}

const imageVariants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeIn'
    }
  }
}


const JoinUs = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if(inView){
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section className="join-us"
      variants={sectionContainer}
      initial='hidden'
      animate='visible'
      ref={ref}
    >
        <div>
          <motion.h2
            variants={headerVariants}
          >Why Choose Thyflow Services</motion.h2>
          <motion.div className="join-card"
            variants={cardVariants}
          >
            <motion.h3
              variants={textVariants}
            >ThyFlow App Dispatch Specialist</motion.h3>
            <motion.p
              variants={textVariants}
            >will act as your assistant to ensure your on-demand booking goes smoothly from start to finish.</motion.p>
            <ul>
              <motion.li 
                variants={textVariants}
              >We receive your booking request.</motion.li>
              <motion.li 
                variants={textVariants}
              >We match you with a verified on-demand service provider</motion.li>
              <motion.li 
                variants={textVariants}
              >You sit back & relax. The service gets done.</motion.li>
            </ul>
            <motion.a variants={textVariants} href="https://www.google.com">Join our beta crew &#62;</motion.a>
            <motion.img 
              src={lightPhone1} 
              alt="phone"
              variants={imageVariants}  
            />
          </motion.div>
        </div>
        <div>
          <motion.div className="join-card"
            variants={cardVariants}
          >
            <motion.h3
              variants={textVariants}
            >ThyFlow App makes it easy</motion.h3>
            <motion.p
              variants={textVariants}
            >To find & book verified on-demand services. We currently offer 5 mobile services you can book.</motion.p>
            <ul>
              <motion.li 
                variants={textVariants}
              >Find Service</motion.li>
              <motion.li 
                variants={textVariants}
              >Book Service</motion.li>
              <motion.li 
                variants={textVariants}
              >Get Result</motion.li>
            </ul>
            <motion.a variants={textVariants} href="https://www.google.com">Join our beta crew &#62;</motion.a>
            <motion.img 
              src={lightPhone2} 
              alt="phone"
              variants={imageVariants}  
            />
          </motion.div>
        </div>
    </motion.section>
  )
}

export default JoinUs
