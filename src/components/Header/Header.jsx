import React from 'react';
import Button from 'components/Button/Button';
import './Header.css'
import { motion } from 'framer-motion'

const headerVariants = {
  hidden: {
    y: '-35px'
  },
  visible:{
    y: '5px',
    transition: {
      duration: .5,
    }
  }
}

const Header = React.forwardRef((props, ref) => {  
  return (
    <header ref={ref}>
      <motion.div className="logo-box"
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        THYFLOW
      </motion.div>
      
      <motion.nav
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <ul className="nav-items">
          <li>Services</li>
          <li>Contact</li>
          <li>Blog</li>
          <Button>
            join our beta crew
          </Button>
        </ul>
      </motion.nav>
    </header>
  )
})

export default Header;