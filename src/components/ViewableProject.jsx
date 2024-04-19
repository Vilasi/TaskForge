import { useRef } from 'react';

import ClearButton from './ClearButton';

function addNewTask(userInput, tasks, setProjects) {
  if (userInput) {
    tasks.push(userInput);
    setProjects((prevState) => {
      const shallowStateCopy = [...prevState];
      const projectsSubArrayCopy = prevState[1].map((obj) => {
        return { ...obj };
      });

      projectsSubArrayCopy[prevState[2]].tasks = tasks;
      shallowStateCopy[1] = projectsSubArrayCopy;
      return shallowStateCopy;
    });
  }
}

export default function ViewableProject({
  openDeleteProjectModal,
  projects,
  setProjects,
}) {
  const inputRef = useRef();

  const currentProject = projects[1].at(projects[2]);
  const title = currentProject.title;
  const date = new Date(currentProject.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
  const description = currentProject.description.split('\n');
  const tasks = [...currentProject.tasks];

  function handleTaskAddingClick(e) {
    e.preventDefault();
    const userInput = inputRef.current.value;

    addNewTask(userInput, tasks, setProjects);
    inputRef.current.value = '';
  }

  function handleTaskClearClick(index) {
    setProjects((prevState) => {
      const shallowStateCopy = [...prevState];
      const projectsSubArrayCopy = prevState[1].map((obj) => {
        return { ...obj };
      });
      const tasksArrayCopy = [...projectsSubArrayCopy[prevState[2]].tasks];

      tasksArrayCopy.splice(index, 1);
      projectsSubArrayCopy[prevState[2]].tasks = tasksArrayCopy;
      shallowStateCopy[1] = projectsSubArrayCopy;

      return shallowStateCopy;
    });
  }

  return (
    <div className="flex flex-col w-10/12 sm:w-4/5">
      <header className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl sm:text-4xl">{title}</h1>
        <ClearButton onClick={openDeleteProjectModal}>Delete</ClearButton>
      </header>

      <p className="mb-8">{formattedDate}</p>
      {description.map((para) => (
        <p className="max-w-prose text-xl text-stone-900 mb-3">{para}</p>
      ))}

      <hr className="h-px my-8 bg-stone-400 border-0"></hr>

      <h2 className="font-bold text-2xl sm:text-3xl mb-5 text-center md:text-start">
        Tasks
      </h2>
      {/* Task Adding Form */}
      <form action="" className="w-full flex flex-col items-center md:block">
        <input
          ref={inputRef}
          type="text"
          className="bg-gray-200 p-2 w-4/6 md:w-1/2"
        />
        <button
          onClick={(e) => {
            handleTaskAddingClick(e);
          }}
          className="text-stone-700 text-lg me-3 px-7 py-2 rounded-md border border-stone-50 hover:shadow hover:border-stone-300 ms-10 mt-4 md:mt-0"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="w-full my-10 py-5 px-7 bg-gray-100">
        {tasks.map((task, index) => (
          <div className="flex justify-between items-center my-3 ">
            <p className="text-xl max-w-prose" key={index}>
              {task}
            </p>
            <ClearButton
              onClick={(e) => {
                handleTaskClearClick(index);
              }}
              classes="hover:text-red-600"
            >
              &#10003;
            </ClearButton>
          </div>
        ))}
      </div>
    </div>
  );
}
