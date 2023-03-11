import classes from "./Title.module.scss";

const Title = ({Num="", Title=""})=>{
    return(
        <div className={classes.title}> <h2>{Num}.</h2> <h1>{Title}</h1> <hr /> </div>
    )
}

export default Title;