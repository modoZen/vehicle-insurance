import { FC } from "react"
import './styles.sass'

interface Props{
    text: string,
    onClick?: ()=>void
}

const Button:FC<Props> = ({ text, onClick })=>{
    return (
        <button 
            onClick={onClick}
            className="button">
            {text}
        </button>
    )
}

export { Button }