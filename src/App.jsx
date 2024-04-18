import { useState } from 'react';

//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

const projects = [];

function App() {
  const [addingProject, setAddingProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState([false, {}]);

  // console.log(projectSelected);

  return (
    <div className="flex flex-col md:flex-row">
      <ProjectList
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        projects={projects}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
      <MainContent
        setProjectSelected={setProjectSelected}
        projectSelected={projectSelected}
        projects={projects}
        addingProject={addingProject}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
    </div>
  );
}

export default App;
