import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";

//elements
import logo from "../../assets/HL_log.png";
import Container from "../Container.component";
import Navbar from "./Navbar/Navbar.component";
import { useState } from "react";

//<Link to={"./some.html"}>link to another</Link>
const Header = ()=>{
    const [openMenu, toogleOpenMenu] = useState(false)

    const toogleMenu = ()=>{
        toogleOpenMenu(!openMenu);
    }
    
    return(
        <>
            <header className={classes.Header}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Henry Lima's logo" />
                    </Link>

                    <List onClick={toogleMenu} className={classes[`menu__${ !openMenu ? `closed`:`opened`}`]}/>
                    
                    <Navbar className={ `nav--${ openMenu ? `open`: `close` }` } setMenu={toogleMenu} />
                </Container>
            </header>
            <div className={ openMenu ? classes["blur"]: ""}></div>
        </>
    );
}

export default Header;