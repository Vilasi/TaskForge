export default function ProjectList({
  changeAddingState,
  projects,
  setProjects,
}) {
  function selectProject(index) {
    setProjects((prevState) => {
      return [true, [...prevState[1]], index];
    });
  }

  return (
    <aside className="md:mt-12 md:w-1/4 bg-stone-900 text-stone-50 md:rounded-r-xl py-16 px-8 md:h-dvh">
      <h2 className="uppercase font-bold text-2xl mb-8">Your Projects</h2>

      <button
        onClick={changeAddingState}
        className="text-base mb-8 bg-stone-600 px-4 py-3 rounded-md"
      >
        + Add Project
      </button>

      <ul>
        {projects[1].map((doc, index) => {
          return (
            <button
              key={doc.title}
              onClick={() => selectProject(index)}
              className={`w-full text-left hover:bg-stone-800 focus:bg-stone-800 ${
                projects[0] && projects[2] === index
                  ? 'bg-stone-800'
                  : undefined
              }`}
            >
              <li className="ms-3 py-1.5 text-lg text-stone-300 font-medium">
                {doc.title}
              </li>
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
