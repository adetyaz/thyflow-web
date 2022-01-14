import './button.css'

const Button = ({children}) => {
    return (
      <button type="button">
          {children}
      </button>
    )
}
export default Button;
