import React from "react";
import styles from "./FadeInOutComponent.module.css"
import { useSpring, animated } from '@react-spring/web'

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";


function FadeInOutComponent( {text, deployWebSite, codeWebSite} ){

    const { globalState } = useContext(GlobalStateContext);

    const [props] = useSpring(
        () => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
        }),
        []
      )
    
      return <animated.div style={props}>
        <span className={styles.descriptionText}>{text}</span>
        <div className={styles.codeGroupButtons}>
            <a href={deployWebSite} target="blank"><button className={styles.deployButton}>
              {globalState ==="Portugues" ?"Ver deploy": "Application deployment"}
              </button></a>
            <a href={codeWebSite} target="blank"><button className={styles.githubButton}>
              {globalState ==="Portugues" ?"Ver código no Github": "Source code on Github"}
            </button></a>
        </div>
        </animated.div>
}

export default FadeInOutComponent;