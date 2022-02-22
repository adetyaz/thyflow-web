import './Download.css';
import lightPhone1 from 'assets/images/phone image 3.png'
import lightPhone2 from 'assets/images/phone image 4.png'
import playstore from 'assets/images/playstore.png'
import appstore from 'assets/images/appstore.png'
import { motion } from 'framer-motion'

const sectionVariant = {
  hidden: {
    opacity: 0,
    backgroundSize: 0,
  },
  visible: {
    opacity: 1,
    backgroundSize: 'cover',
    transition: {
      duration: 2,
      ease: 'linear',
      when: 'beforeChildren',
      staggerChildren: 1,
    }
  }
}

const headerVariants = {
  hidden: {
    y: '100%',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'linear',
    },
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


function Download() {
  return (
    <motion.section className="download"
      variants={sectionVariant}
      initial='hidden'
      animate='visible'
    >
      <div className="download-options">
        <div className="text-wrapper">
          <motion.h1
            variants={headerVariants}
          >Download the mobile app for a whole new experience.</motion.h1>
        </div>
        <div className="app-stores">
            <motion.img variants={imageVariants} src={playstore} alt="google playstore"/>
            <motion.img variants={imageVariants} src={appstore} alt="apple appstore"/>
        </div>
      </div>
      <div className="app-display">
        <motion.img variants={imageVariants} src={lightPhone1} alt="phone"/>
        <motion.img variants={imageVariants} src={lightPhone2} alt="phone"/>
      </div>
    </motion.section>
  )
}

export default Download;