import { NavLink as ReactNavlink, useMatch, useResolvedPath } from "react-router-dom";
import classes from "./Navlink.module.scss";

const Navlink = ({children, to="/", ...rest})=>{
    const resolved = useResolvedPath(to);
    const matched = useMatch({path: resolved.pathname, end: true});
    
    return(
        <li>
            <ReactNavlink to={to} {...rest}>
                { children }
            </ReactNavlink>
        </li>
    );
}

export default Navlink;