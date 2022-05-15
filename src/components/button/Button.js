import "./Button.scss"

function Button({text, buttonFunc}) {
    return (
        <div className="button page-margin" onClick={buttonFunc}>
            {text}
        </div>
    )
}

export default Button;