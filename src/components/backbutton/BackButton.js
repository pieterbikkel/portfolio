import "./BackButton.scss";
import BackArrow from "../../assets/back-arrow.svg"
import { Link } from "react-router-dom";

function BackButton() {

    return (
        <Link className="back-button page-margin" to="/">
            <img src={BackArrow} alt="back button arrow"/>
            <p>Back</p>
        </Link>
    )
}

export default BackButton;