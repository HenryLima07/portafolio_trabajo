import classes from "./Landing.module.scss";

import Home from "../../componentes/Home/Home.component";


const LandingView = ()=>{
    return(
        <div>
            <Home />
            <div className={classes.div1}></div>
            <div className={classes.div2}></div>
        </div>
    );
}

export default LandingView;