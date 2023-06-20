import React from "react";
import styles from './HomeContent.module.css'
import profilePic from '../../pictures/20220825_112606.jpg'
import AnimatedHomeTitle from "./AnimatedHomeTitle"
import { motion } from "framer-motion"

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";


function MainContent(){

    const { globalState } = useContext(GlobalStateContext);

    return(
        <div className={styles.containerMainContent} id="home">
            <h1 className={styles.title}><AnimatedHomeTitle /></h1>
            <div className={styles.picAndDescripParagraph}>
                <div className={styles.profilePicture}>
                    <motion.div
                    animate={{ x: [-150, 0, 0] , y: [30,0,0]}}
                    transition={{ ease: "backInOut", duration: 3}}
                    >
                        <img src={profilePic} alt="profile" />
                    </motion.div>
                    
                    <div className={styles.picText}>
                    <motion.div
                    animate={{ x: [150, 0, 0] , y: [-30,0,0]}}
                    transition={{ ease: "backInOut", duration: 3}}
                    >
                        <h3>{globalState ==="Portugues" ?"Olá, tudo certo?": "Hello, How's it going?"}</h3>
                        <h3>{globalState ==="Portugues" ?"Sou estudante de análise e desenvolvimento de sistemas no 2º período"
                        : 
                        "I'm a second semester student taking Analysis and Systems Development"}</h3>
                    </motion.div>
                    </div>
                    
                </div>
                <div className={styles.homeDescription}>
                    <motion.div
                    animate={{ x: [150, 0, 0] , y: [-30,0,0]}}
                    transition={{ ease: "backInOut", duration: 3}}
                    >
                        <p>{globalState ==="Portugues" ?"Seja bem-vindo ao meu portfólio"
                        :
                        "Be welcome to my portfolio"}</p>

                        <p>{globalState ==="Portugues" ?"Aqui você me conhecerá um pouco mais! Por favor, fique à vontade."
                        :
                        "Here you will know more about me! Please, enjoy it."}</p>
                            <motion.div className={styles.englishComeOut}
                            animate={{ x: [0, 25, 0] , y: [0,0,0]}}
                            transition={{ ease: "backInOut", duration: 6, repeat:Infinity}}>
                               <p>{globalState ==="Portugues" ?"O site ainda não está responsivo para todos os tipos de tela. Em breve será corrigido."
                        :
                        "This website is not fully responsive to all screen sizes. Soon it'll be fixed"}</p>
                            </motion.div>
                            
                    </motion.div>
                </div>
                
            </div>            
            <a href="#projects"><button className={styles.button}>{globalState ==="Portugues"
                    ? "Projetos"
                    :
                    "Projects"}
                </button></a>
        </div>
    )
}
export default MainContent;