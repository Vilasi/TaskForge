import { useState } from 'react';

//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

function App() {
  // This projects array === ["Is project currently selected? boolean", [project docs array], "currently selected project index"]
  const [projects, setProjects] = useState([false, [], 0]);
  const [addingProject, setAddingProject] = useState(false);

  console.log(projects);
  return (
    <div className="flex flex-col md:flex-row">
      <ProjectList
        projects={projects}
        setProjects={setProjects}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
      <MainContent
        setProjects={setProjects}
        projects={projects}
        addingProject={addingProject}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
    </div>
  );
}

export default App;
