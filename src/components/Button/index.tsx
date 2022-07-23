import { FC } from "react"
import './styles.sass'

interface Props{
    text: string,
    onClick?: ()=>void,
    className: string
}

const Button:FC<Props> = ({ text, onClick, className })=>{
    return (
        <button 
            className={`button ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export { Button }