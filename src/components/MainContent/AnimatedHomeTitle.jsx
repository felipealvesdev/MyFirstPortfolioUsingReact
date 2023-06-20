import React from "react";
import styles from "./AnimatedHomeTitle.module.css"
import { motion } from "framer-motion"

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";

function AnimatedHomeTitle(){

    
    const { globalState } = useContext(GlobalStateContext);

    return(        
      
    <div className={styles.globalContainer}>
        <motion.div 
        animate={{ x: [-100, 0, -100] , y: [-30,0,-30]} }
        transition={{ ease: "backInOut", duration: 6, repeat:Infinity}}
        >
            <span className={styles.title}>
                { globalState ==="Portugues" ?"Bem-vindo": "Welcome"}
            </span>
        </motion.div>

        <motion.div
        animate={{ x: [0, 0, 0] , y: [150, 0,150]} }
        transition={{ease: "backInOut", duration: 6, repeat:Infinity}}
        >
            <span className={styles.title}>
                { globalState ==="Portugues" ?"ao meu": "to my"}
            </span>
        </motion.div>

        <motion.div 
        animate={{ x: [100, 0, 100] , y: [-50,0,-50]} }
        transition={{ ease: "backInOut", duration: 6, repeat:Infinity}}
        >
            <span className={styles.title}>
                { globalState ==="Portugues" ?"portfólio": "portfolio"}
            </span>
        </motion.div>


    </div>
    )
}

export default AnimatedHomeTitle;