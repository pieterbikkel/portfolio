import "./Button.scss"
import CV from "../../assets/curriculum-vitae.pdf"

function Button({text}) {

    return (
        <a 
            className="button page-margin" 
            target="_blank" 
            href={CV} 
            rel="noreferrer"
        >
            {text}
        </a>
    )
}

export default Button;