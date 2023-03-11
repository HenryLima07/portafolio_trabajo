import classes from "./Landing.module.scss";

import Home from "../../componentes/Home/Home.component";
import About from "../../componentes/About/About.component";
import Jobs from "../../componentes/Experience/Jobs.component";
import Work from "../../componentes/Work/Work.component";


const LandingView = ()=>{
    return(
        <div className={classes.Landing}>
            <Home />
            <About />
            {/* <Jobs /> */}
            <Work />
        </div>
    );
}

export default LandingView;