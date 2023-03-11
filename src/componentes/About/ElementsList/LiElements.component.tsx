import { useState } from "react";
import classes from "./LiElement.module.scss";

const LiElement =({text = "", ImgElement, ...rest})=>{
    const [mouseState, changeMouseState] = useState(false);

    const changeMouseStateHandler = () => changeMouseState(!mouseState);

    return(
        <li className={classes.Technologies} {...rest} onMouseOver={changeMouseStateHandler} onMouseOut={changeMouseStateHandler}>
            <div className={`${classes["container"]} ${classes[`container--${ mouseState ? `original` : `blue`}`]}`}></div>

            { ImgElement }
            <p className={classes.Text}>{text}</p>
        </li>
    );
}

export default LiElement;