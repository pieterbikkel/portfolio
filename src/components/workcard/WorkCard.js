 import "./WorkCard.scss"
 import { Link } from "react-router-dom";
 
 function WorkCard ({work}) {
     return (
         <div className="work-card">
            <Link className="work-card__container" to={"work/" + work.title.toLowerCase()}>
                <img src={work.img} alt={work.title}/>
            </Link>
            <h3>{work.title}</h3>
         </div>
     )
 }

 export default WorkCard;