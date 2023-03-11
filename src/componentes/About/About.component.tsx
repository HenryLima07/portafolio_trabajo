import classes from "./About.module.scss";

import LiElement from "./ElementsList/LiElements.component";
import Title from "../Title/Title.component";

/* icons client side aplications*/
import { ClientSideIcons, BackendSideIcons, DatabaseIcons, OtherTechIcons, DesktopAppsIcons } from "./icons/Icons.module";

const About = ()=>{
    
    const { JavaScriptIcon, HTMLIcon, CSSIcon, SASSIcon, ReactIcon, ViteIcon } = ClientSideIcons();
    const { ExpressIcon, MongoDBIcon, MongooseIcon } = BackendSideIcons();
    const { CplusIcon, CChartIcon, PhytonIcon } = DesktopAppsIcons();
    const { AzureDBIcon, OracleIcon } = DatabaseIcons();
    const { GitIcon, GitHubIcon, DockerIcon } = OtherTechIcons();

    return(
        <section className={classes.About}>
            
            <Title Num = "01" Title="About" />

            <div className={classes["personal-information"]}>
                <p>
                    Hello! my name is Henry. I'm a dreamer and positive younger, whose passion is programming and all computer's world; I see myself as a computer engineer who works and shares to improve myself.
                </p>
                <p>
                    My desire for programming started back in 2019, when a recibe a schollar-ship on computers and where I learned about static web development.

                </p>
                <p>
                    Now a days and thanks to all programs I've been enrolled in, I've learned different skilss such as English, knowledge on Microsoft Excel, and proggramming lenguages like JavaScript, Phyton and others. My main focus these days is creating experiences throw applications!.

                </p>
                <p>
                    Here are some technologies I've worked with:
                </p>

                
            </div>
            <div>
                <ul>
                    Client-side apps:

                    <LiElement text="HTML" ImgElement={HTMLIcon} />
                    <LiElement text="CSS" ImgElement={CSSIcon} />
                    <LiElement text="SASS" ImgElement={SASSIcon} />
                    <LiElement text="JavaScript" ImgElement={JavaScriptIcon} />
                    <LiElement text="React" ImgElement={ReactIcon} />
                    <LiElement text="Vite + React" ImgElement={ViteIcon} />
                      
                </ul>
                <ul>
                    Backend and scalable apps:

                    <LiElement text="Express" ImgElement={ExpressIcon} />
                    <LiElement text="MongoDB" ImgElement={MongoDBIcon} />
                    <LiElement text="Mongoose" ImgElement={MongooseIcon} />
                      
                </ul>
                <ul>
                    Interface + No interface desktop apps:

                    <LiElement text="C++" ImgElement={CplusIcon} />
                    <LiElement text="Phyton" ImgElement={CChartIcon} />
                    <LiElement text="C#" ImgElement={PhytonIcon} />
                      
                </ul>
                <ul>
                    Database platforms I've worked with:

                    <LiElement text="Azure DB Studio" ImgElement={AzureDBIcon} />
                    <LiElement text="Oracle" ImgElement={OracleIcon} />
                    <LiElement text="MongoDBCompass" ImgElement={MongoDBIcon} />
                      
                </ul>
                <ul>
                    Other technologies:

                    <LiElement text="Git" ImgElement={GitIcon} />
                    <LiElement text="Github" ImgElement={GitHubIcon} />
                    <LiElement text="Docker" ImgElement={DockerIcon} />
                      
                </ul>
            </div>
        </section>
    )
}

export default About;
