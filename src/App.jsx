function App() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* YOUR PROJECTS component + Add Project Button */}
      <aside className="mt-12 md:w-1/4 bg-stone-900 text-stone-50 rounded-r-xl py-16 px-8 md:h-dvh">
        <h2 className="uppercase font-bold text-2xl">Your Projects</h2>
      </aside>
      <main className=" flex-1 mt-40 flex flex-col items-center">
        <h1 className="my-8 text-center text-4xl font-bold text-stone-700">
          No Project Selected
        </h1>
        <p className="text-center text-xl font-semibold text-stone-400">
          Select a project or get started with a new one
        </p>
        <div className="mt-10">
          <button className="bg-stone-800 text-stone-300 font-semibold text-lg px-6 py-3 basis-4 rounded-md">
            Create new project
          </button>
        </div>
      </main>
      {/* Current project component (empty if no projects + Create New Project button) */}
      {/* ... */}
    </div>
  );
}

export default App;
