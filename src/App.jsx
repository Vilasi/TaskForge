import { useState } from 'react';

//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

function App() {
  const [addingProject, setAddingProject] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <ProjectList />
      <MainContent
        addingProject={addingProject}
        changeAddingState={() => setAddingProject((prevState) => !prevState)}
      />
    </div>
  );
}

export default App;
