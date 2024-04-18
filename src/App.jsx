import { useState } from 'react';

//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

const projects = {};

function App() {
  const [addingProject, setAddingProject] = useState(false);
  // const [ mainContent, setMainContent] = useState

  return (
    <div className="flex flex-col md:flex-row">
      <ProjectList
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
      <MainContent
        projects={projects}
        addingProject={addingProject}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
    </div>
  );
}

export default App;
