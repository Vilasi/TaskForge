import { useState, useRef, Fragment } from 'react';

//Import Components
import ProjectInput from './ProjectInput';
import DefaultScreen from './DefaultScreen';
import DeleteModal from './DeleteModal';

export default function MainContent({
  addingProject,
  changeAddingState,
  projects,
  projectSelected,
  setProjectSelected,
}) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const dialogRef = useRef();

  function saveProject() {
    projects.push({
      date: dateInputRef.current.value,
      description: descriptionInputRef.current.value,
      title: titleInputRef.current.value,
    });
    changeAddingState();
    setProjectSelected([true, { ...projects.at(-1) }]);
  }

  function deleteProject() {
    dialogRef.current.showModal();
  }
  console.log(projectSelected);

  const deleteButtonClasses =
    'text-stone-700 text-lg me-3 px-7 py-2 rounded-md border border-stone-50 hover:shadow hover:border-stone-300';

  let content;

  if (addingProject) {
    content = (
      <form action="" className="flex flex-col w-10/12 sm:w-3/5">
        {/* Buttons **************************************************************/}
        <div className="grow text-right mb-8">
          {/* Cancel Button */}
          <button
            onClick={() => {
              changeAddingState();
              setProjectSelected([false, {}]);
            }}
            type="button"
            className={deleteButtonClasses}
          >
            Cancel
          </button>

          {/* Save Button */}
          <button
            onClick={saveProject}
            type="button"
            className="bg-stone-800 text-stone-300 text-lg px-7 py-2 rounded-md hover:shadow"
          >
            Save
          </button>
        </div>

        {/* Inputs **************************************************************/}
        <ProjectInput inputRef={titleInputRef} id={'title'} type={'text'}>
          Title
        </ProjectInput>

        <ProjectInput
          inputRef={descriptionInputRef}
          id={'description'}
          type={'textarea'}
        >
          Description
        </ProjectInput>

        <ProjectInput inputRef={dateInputRef} id={'date'} type={'date'}>
          Date
        </ProjectInput>
      </form>
    );
  } else if (!addingProject && projectSelected[0]) {
    content = (
      <div className="flex flex-col w-10/12 sm:w-4/5">
        <header className="flex justify-between">
          <h1 className="font-bold text-2xl sm:text-4xl">
            {projectSelected[1].title}
          </h1>

          <button onClick={deleteProject} className={deleteButtonClasses}>
            Test
          </button>
        </header>
      </div>
    );
  } else {
    content = <DefaultScreen changeAddingState={changeAddingState} />;
  }

  return (
    <main className=" flex-1 mt-40 flex flex-col items-center">
      <DeleteModal ref={dialogRef} />
      {content}
    </main>
  );
}
