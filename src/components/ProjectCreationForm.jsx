import { useRef } from 'react';

import ProjectInput from './ProjectInput';
import ClearButton from './ClearButton';

export default function ProjectCreationForm({
  changeAddingState,
  setProjects,
}) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  function saveProject() {
    setProjects((prevState) => {
      const projectCopy = prevState[1].map((doc) => {
        return { ...doc };
      });

      projectCopy.push({
        date: dateInputRef.current.value || new Date(),
        description: descriptionInputRef.current.value || 'No Description',
        title: titleInputRef.current.value || 'Unnamed Project',
        tasks: [],
      });

      return [true, projectCopy, projectCopy.length - 1];
    });

    changeAddingState();
  }

  function cancelProjectCreation() {
    changeAddingState();
    setProjects((prevState) => [false, [...prevState[1]], prevState[2]]);
  }

  return (
    <form action="" className="flex flex-col w-10/12 sm:w-3/5">
      {/* Buttons **************************************************************/}
      <div className="grow text-right mb-8">
        {/* Cancel Button */}
        <ClearButton onClick={cancelProjectCreation}>Cancel</ClearButton>

        {/* Save Button */}
        <button
          onClick={saveProject}
          type="submit"
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
}
