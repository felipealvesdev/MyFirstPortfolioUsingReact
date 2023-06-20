import './App.css';
import HomeContent from './components/MainContent/HomeContent';
import Navbar from './components/Navbar/Navbar';
import AboutContent from './components/MainContent/AboutContent'
import ProjectsContent from './components/MainContent/ProjectsContent';
import Footerbar from './components/Footerbar/Footerbar';

import { GlobalStateProvider } from './components/SwitchLanguage/EnglishSwitch';

function App() {

  return (
    <div>
      <GlobalStateProvider>
        <Navbar />
        <HomeContent />
        <AboutContent />
        <ProjectsContent />
        <Footerbar />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
