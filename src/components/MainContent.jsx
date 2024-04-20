import { useRef } from 'react';

//Import Components
import DefaultScreen from './DefaultScreen';
import DeleteModal from './DeleteModal';
import ProjectCreationForm from './ProjectCreationForm';
import ViewableProject from './ViewableProject';

export default function MainContent({
  addingProject,
  changeAddingState,
  projects,
  setProjects,
}) {
  const dialogRef = useRef();

  function openDeleteProjectModal() {
    dialogRef.current.showModal();
  }

  function deleteProject() {
    const currentProjectTitle = projects[1].at(projects[2]).title;

    setProjects((prevState) => {
      const projectArrayCopy = [...prevState[1]];
      projectArrayCopy.splice(prevState[2], 1);

      return [false, projectArrayCopy, 0];
    });

    dialogRef.current.close();
  }

  //* Conditionally Render Content Based on User Selection
  let content;
  if (addingProject) {
    content = (
      <ProjectCreationForm
        changeAddingState={changeAddingState}
        setProjects={setProjects}
      />
    );
  } else if (!addingProject && projects[0]) {
    content = (
      <ViewableProject
        projects={projects}
        setProjects={setProjects}
        openDeleteProjectModal={openDeleteProjectModal}
      />
    );
  } else {
    content = <DefaultScreen changeAddingState={changeAddingState} />;
  }

  return (
    <main className=" flex-1 flex flex-col items-center justify-center flex-grow">
      <DeleteModal ref={dialogRef} deleteProject={deleteProject} />
      {content}
    </main>
  );
}
