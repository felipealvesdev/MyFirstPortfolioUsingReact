import React from "react";
import styles from './SkillsBox.module.css'

function SkillBox({name}){

    return (
        <div className={styles.box}>
            <span>{name}</span>
        </div>
    )
}

export default SkillBox;