import './button.css'
import { motion } from 'framer-motion'

const Button = ({children, ...props}) => {
    return (
      <motion.button type="button" {...props}>
          {children}
      </motion.button>
    )
}
export default Button;
