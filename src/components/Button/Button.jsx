import './button.scss'

function Button({ text, type }) {

    return (
        <button className='button' type={type}>{text}</button>
    )
}

export default Button