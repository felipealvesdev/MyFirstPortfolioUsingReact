import React from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from './EnglishSwitch';
import styles from './ToggleLanguageButton.module.css'
import brazilianFlag from '../../pictures/brazilianFlag.png'
import americanFlag from '../../pictures/americanFlag.png'


function ToggleLanguageButton() {
  const { globalState, handleChangeGlobalState } = useContext(GlobalStateContext);

  return (
    <div className={styles.globalContainer}>
      <p>{globalState ==="Portugues" ?"Idioma": "Language"}: {globalState === "Portugues"? "Português": "English"}</p>
      <button onClick={handleChangeGlobalState} className={styles.toggleButton}>{/*globalState ==="Portugues" ?"Mudar para inglês": "Switch to Portuguese"*/}
        {globalState ==="Portugues" ? <img src={brazilianFlag} alt='brazilian flag'></img> : <img src={americanFlag} alt='american flag'></img>}
      </button>
    </div>
  );
}

export default ToggleLanguageButton;