
import Profilepic from './assets/profile.jpg'
function Card(){
return(
    <div className="card">
         <h1 className="name">Sunil Bhattarai</h1>
        <hr className="line"></hr>
        <img className="image"src={Profilepic} alt="Profile picture" />
        <p>Hey me frontend developer just making card of my own profile.</p> 
        
       
    </div>
    
);

}
export default Card