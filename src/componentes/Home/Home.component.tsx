import { useState } from "react";
import classes from "./Home.module.scss";

const Home = ()=>{

    const [imgColor, setRealColor] = useState(false);

    const imgChangeColor = ()=>{
        setRealColor(!imgColor)
    }

    return(
        <section className={classes.Home}>
            <article className={classes["Presentation"]}>
                <div className={classes.box}>Hi there!</div>
                <h2>Henry Lima.</h2>
                <div>
                    I'm a science computer student, whose passion is building applications and digital experiences.
                </div>
            </article>

            <article className={classes["photo"]} onMouseOver={imgChangeColor} onMouseOut={imgChangeColor} > 

                <div className={`${classes["image"]} ${classes[`image--${imgColor ? `real`: `blue`}`]}`}></div>

                <img src={"./someimage1.jpeg"} alt="Henry Escobar's photo" />

                <div className={`${classes["border"]} ${classes[`border--${imgColor ? `semiblack`: `blue`}`]}`}></div>
            </article>
        </section>
    );
}

export default Home;
