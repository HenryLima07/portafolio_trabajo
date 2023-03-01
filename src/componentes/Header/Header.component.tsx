import classes from "./Header.module.scss";
import {Link} from "react-router-dom";

//elements
import logo from "../../assets/HL_log.png";
import Container from "../Container.component";

//<Link to={"./some.html"}>link to another</Link>
const Header = ()=>{
    return(
        <header>
            <Container>
                <Link to={"/"}>
                    <img src={logo} alt="Henry Lima's logo" />
                </Link>
            </Container>
        </header>
    );
}

export default Header;