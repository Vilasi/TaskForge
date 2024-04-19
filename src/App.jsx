import { useState } from 'react';

//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

let projectsStarter = [false, [], 0];
let projectsFromLocalStorage = JSON.parse(localStorage.getItem('projects'));
if (projectsFromLocalStorage) {
  projectsStarter = projectsFromLocalStorage;
}
function App() {
  // This projects array === ["Is project currently selected? boolean", [project docs array], "currently selected project index"]
  const [projects, setProjects] = useState(projectsStarter);
  const [addingProject, setAddingProject] = useState(false);

  localStorage.setItem('projects', JSON.stringify(projects));
  // if (JSON.parse(localStorage.getItem('projects'))) {
  //   setProjects();
  // }
  // setProjects((prevState) => {
  //   return JSON.parse(localStorage.getItem('projects'));
  // });
  // let projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
  // console.log(projectsFromStorage.length);

  console.log(localStorage.length);
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
