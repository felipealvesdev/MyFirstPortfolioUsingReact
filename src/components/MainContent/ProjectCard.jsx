import React, { useState } from "react";
import styles from './ProjectCard.module.css'
import { FaAngleDown , FaAngleUp } from "react-icons/fa"
import FadeInOutComponet from './FadeInOutComponent'

import { GlobalStateContext } from '../SwitchLanguage/EnglishSwitch';
import { useContext } from "react";


function ProjectCard({screen, title, description, techs, deploy, code}){

    const { globalState } = useContext(GlobalStateContext);


    const [showing, setShowing] = useState(false);

    function handleShowing(){
        setShowing(!showing);
    }

    return (
        
        <div className={styles.containerMainContent}>
            <div className={styles.photoContainer}>
                <img src={screen} alt="pc screen"></img>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.titleContainer}>
                    <h1>{title}</h1>
                    {showing? 
                        (<button onClick={handleShowing} className={styles.UpAndDownButton} >
                            <FaAngleUp/>
                        </button>)
                        : 
                        (<button onClick={handleShowing} className={styles.UpAndDownButton}>
                        <FaAngleDown />
                        </button>)}
                </div>
                
                {showing &&(
                        <div>
                        <p className={styles.descriptionText}><FadeInOutComponet text={description} deployWebSite={deploy} codeWebSite={code}/></p>
                        <p className={styles.descriptionText2}>{globalState ==="Portugues" ?"Criado com:": "Created using:"}<span className={styles.technologies}>{techs}</span></p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;