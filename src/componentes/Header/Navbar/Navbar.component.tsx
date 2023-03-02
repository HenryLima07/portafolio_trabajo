import classes from "./Navbar.module.scss";
import { X } from "react-bootstrap-icons";
import Navlink from "./Navlink/Navlink.component";

const Navbar = ({className = "", setMenu=()=>{false}})=>{

    return(
        <aside className={`${classes["aside-menu"]} ${classes[className]}`}>
            <nav className={`${classes["nav-menu"]}`}>
                <X onClick={setMenu}/>
                <ol>
                    <Navlink to="/" exact onClick={setMenu}> About </Navlink>
                    <Navlink to="/" onClick={setMenu}> Experience </Navlink>
                    <Navlink to="/" onClick={setMenu}> Work </Navlink>
                    
                    
                </ol>
                <a href={"./CV.pdf"} download="CV_Henry_Escobar">Resume</a>
            </nav>
        </aside>
    );
}

export default Navbar;