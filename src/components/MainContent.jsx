import { useState, useRef } from 'react';

//Import Components
import ProjectInput from './ProjectInput';

export default function MainContent({
  addingProject,
  changeAddingState,
  projects,
}) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  // TODO Pickup Here
  function saveProject() {
    projects[titleInputRef.current.value] = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      date: dateInputRef.current.value,
    };
    console.log(projects);
  }

  let content;

  if (addingProject) {
    content = (
      <form action="" className="flex flex-col w-10/12 sm:w-3/5">
        {/* Buttons **************************************************************/}
        <div className="grow text-right mb-8">
          {/* Cancel Button */}
          <button
            onClick={changeAddingState}
            type="button"
            className="text-stone-700 text-lg me-3 px-7 py-2 rounded-md border border-stone-50 hover:shadow hover:border-stone-300"
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
  } else {
    content = (
      <>
        <h1 className="my-8 text-center text-4xl font-bold text-stone-700">
          No Project Selected
        </h1>
        <p className="text-center text-xl font-semibold text-stone-400">
          Select a project or get started with a new one
        </p>
        <div className="mt-10">
          <button
            onClick={changeAddingState}
            className="bg-stone-800 text-stone-300 font-semibold text-lg px-6 py-3 basis-4 rounded-md"
          >
            Create new project
          </button>
        </div>
      </>
    );
  }

  return (
    <main className=" flex-1 mt-40 flex flex-col items-center">{content}</main>
  );
}
