import classes from "./Work.module.scss";
import Title from "../Title/Title.component";

const Work = ()=>{
    return(
        <section className={classes.Work}>
            <Title Num="03" Title="Things I've done" />
        </section>
    )
}

export default Work;