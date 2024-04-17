//Import Components
import MainContent from './components/MainContent';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <ProjectList />
      <MainContent />
    </div>
  );
}

export default App;
