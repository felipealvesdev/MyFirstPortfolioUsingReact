import React from "react";
import styles from './Navbar.module.css'
import ToggleLanguageButton from "../SwitchLanguage/ToggleLanguageButton";

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";


function Navbar(){

    const { globalState } = useContext(GlobalStateContext);

    return(
        <div className={styles.containerNavbar}>
            <div className={styles.logo}>
                <span>Felipe Alves</span>
                <ToggleLanguageButton />
                </div>
            <div className={styles.navbar}>
                <a href="#home">{globalState ==="Portugues" ?"Página Principal": "Home"}</a>
                <a href="#about">{globalState ==="Portugues" ?"Sobre": "About"}</a>
                <a href="#projects">{globalState ==="Portugues" ?"Projetos": "Projects"}</a>
                <a href="#contacts">{globalState ==="Portugues" ?"Contatos": "Contact"}</a>
                </div>

        </div>
    )
}

export default Navbar;