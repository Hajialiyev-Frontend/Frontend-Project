import { CiSearch } from "react-icons/ci";
import "./firstsection.css"


function Firstsection  () {
    return(
         <div className="formsection">
    
            <div className="inpdiv">
            <input className="input" placeholder="Search" type="text" />
             <CiSearch className="icon" />
            </div>
          

    </div>
    )
   
}
export default Firstsection;