import React from "react";
import styles from './AboutContent.module.css'
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa"
import { SiNextdotjs, SiTypescript } from "react-icons/si"

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";


function About(){

    const { globalState } = useContext(GlobalStateContext);

    return(
        <div className={styles.containerMainContent} id="about">
            <div>
                <div className={styles.containerAboutMe}>
                    <h1>{globalState ==="Portugues" ?"Sobre mim": "About me"}</h1>
                    <p>{globalState ==="Portugues"
                        ? "Possuo conhecimentos em Html, Css, Javascript e ReactJs. Tenho algumas noções de backend também como NodeJs, Express e MySql. Falo inglês fluentemente." 
                        : "I have knowledge about Html, Css Javascript and ReactJs. But i do know some things about backend aswell, such as NodeJs, Express and MySql. As you may have noticed, i speak English fluently."}
                    </p>
                    <p>{globalState ==="Portugues"
                        ? "Na próxima seção você encontrará mais informações sobre mim, o que eu faço, e minhas atuais habilidades, principalmente em relação a programação e tecnologia."
                        : "The next section right ahead of this one, you will find more about me, what i do and my current skills."}
                    </p>
                </div>
            </div>

            <div className={styles.containerGlobalGetToKnowMe}>
                <div className={styles.card}>
                    <h1>{globalState ==="Portugues"
                        ? "Saiba mais sobre mim!"
                        : "learn more about me!"}
                    </h1>
                    <div className={styles.cardContent}>
                        <p>{globalState ==="Portugues"
                            ? "Sou estudante de ADS do 2º período na Unifbv (EAD) e venho estudando principalmente as tecnologias para Web. Também sou formado técnico em redes de computadores. E outra curiosidade sobre mim: Falo inglês fluente. Sim, isso mesmo! Em 2016 eu fiz intercâmbio no Missouri durante quase 6 meses estudando na Maryville High School. Tudo pelo Governo de Pernambuco pelo Programa Ganhe o Mundo."
                            : "Right now i'm a ASD student in the second semester studying it at Unifbv and it's a totally home office college, all the classes were previously recorded for us. I've been studying web technologies and focusing on the Frontend technologies. I've studied Computer Network in a technical school right after my High School and also, during 2016 i went to the USA on a Exchange program during one whole semester in the State of Missouri. I attended to Maryville High School and lived a normal american teenager routine."}
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <h1>{globalState ==="Portugues"
                        ? "Minhas habilidades"
                        : "My skills"}
                        </h1>
                    <div className={styles.cardContent}>
                        <span className={styles.htmlIcon}><FaHtml5 /></span>
                        <span className={styles.css3Icon}><FaCss3 /></span>
                        <span className={styles.jsIcon}><FaJs /></span>
                        <span className={styles.reactIcon}><FaReact /></span>
                        <span className={styles.nextIcon}><SiNextdotjs /></span>
                        <span className={styles.githubIcon}><FaGithub /></span>
                        <span className={styles.typescriptIcon}><SiTypescript /></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;