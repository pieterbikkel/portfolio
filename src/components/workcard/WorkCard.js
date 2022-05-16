 import "./WorkCard.scss"
 import { Link } from "react-router-dom";
 
 function WorkCard ({link, img, title}) {
     return (
         <div className="work-card">
            <Link className="work-card__container" to={link}>
                <img src={img} alt={title}/>
            </Link>
            <h3>{title}</h3>
         </div>
     )
 }

 export default WorkCard;