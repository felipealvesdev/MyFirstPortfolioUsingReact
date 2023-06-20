import React from "react";
import styles from "./Footerbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"


import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";

 
function Footerbar(){

    const { globalState } = useContext(GlobalStateContext);

    return (
        <div className={styles.containerFooter} id="contacts">
            <h1>{globalState ==="Portugues"
                ? "Olá!!! Gostaria de te agradecer por chegar até aqui."
                : "Hello!!! I appreciate you've made to this point."} 
            </h1>
            <div className={styles.secondText}>
                <h2>{globalState ==="Portugues"
                    ? "Espero que tenha gostado do meu portfólio!(Feito usando ReactJs)"
                    : "I hope you've enjoyed my portfolio!(Made using ReactJs)"}
                </h2>
                <h2>{globalState ==="Portugues"
                    ? "Caso tenha interesse, você encontrará mais projetos desenvolvidos por mim em meu Github."
                    : "In case you're interested, you may take a look at all the projects i've done so far on my Github."}</h2>
            </div>

            <div className={styles.socialMedias}>
                <a href="https://github.com/felipealvesdev" target="blank" className={styles.github}>
                    <FaGithub />
                 </a>
                <a href="https://www.linkedin.com/in/felipe-alexandre-alves-da-silva-886095240/" target="blank" className={styles.linkedin}>
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footerbar;