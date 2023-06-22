import React from "react";
import styles from './ProjectsContent.module.css'
import ProjectCard from "./ProjectCard";
import screenWeatherApp from '../../pictures/screenAppClima.png'
import screenCalculatorApp from '../../pictures/screenAppCalculadora.png'
import screenToDoListApp from "../../pictures/screenAppToDoList.png"

import {FaCss3, FaHtml5, FaJs , FaReact } from "react-icons/fa"

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";

function ProjectsContent(){

    
    const { globalState } = useContext(GlobalStateContext);

    return (
        <div className={styles.containerMainContent} id="projects">
            <div className={styles.projectDescription}>
                <h1>{globalState ==="Portugues"
                ? "Projetos"
                : "Projects"}
                </h1>
                <p>{globalState ==="Portugues"
                ? "Aqui você encontrará mais informações sobre alguns de meus projetos pessoais que já desenvolvi até agora!"
                : "Here you'll find more information about the projects i've done until now!"}
                </p>
            </div>

            <div className={styles.projectCards}>
                <ProjectCard
                screen={screenWeatherApp} 
                title={globalState ==="Portugues"
                ? "Aplicativo de previsão do tempo"
                : "Forecast App"}
                description={globalState ==="Portugues"
                ? "Aplicativo onde consumi uma API de previsão do tempo. Usuário digita cidade e as informações aparecerão."
                : "Forecast App which i've used an API about forecast. User types city and information will appear."}
                deploy={"https://felipealvesdev.github.io/AppClima/"}
                code={"https://github.com/felipealvesdev/AppClima"}
                techs={<><FaHtml5 /> <FaCss3 /> <FaJs /></>}
                />
            </div>

            <div className={styles.projectCards}>
                <ProjectCard
                screen={screenCalculatorApp} 
                title={globalState ==="Portugues"
                ? "Aplicativo de calculadora simples"
                : "Calculator App"}
                description={globalState ==="Portugues"
                ? "Aplicativo onde construí uma calculadora que realiza operações matemáticas simples, tais como adição, subtração, multiplicação e divisão."
                : "Application which i've made a simple calculator to make some simple math operations, such as addition, subtraction, division and multiplication."}
                deploy={"https://felipealvesdev.github.io/AppCalculadora/"}
                code={"https://github.com/felipealvesdev/AppCalculadora"}
                techs={<><FaHtml5 /> <FaCss3 /> <FaJs /></>}
                />
            </div>

            <div className={styles.projectCards}>
                <ProjectCard
                screen={screenToDoListApp} 
                title={globalState ==="Portugues"
                ? "Aplicativo de bloco de notas"
                : "To do list App"}
                description={globalState ==="Portugues"
                ? "Aplicativo no qual fiz um CRUD baseando-me nas aulas do curso da udemy."
                : "Application which i've create a CRUD based on the classes i've studied on Udemy."}
                deploy={"https://todolistfelipereact.netlify.app/"}
                code={"https://github.com/felipealvesdev/AppToDoList"}
                techs={<><FaHtml5 /> <FaCss3 /> <FaJs /> <FaReact /></>}
                />
            </div>

        </div>
    )
}

export default ProjectsContent;