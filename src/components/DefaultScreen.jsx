export default function DefaultScreen({ changeAddingState }) {
  return (
    <>
      <h1 className="text-center text-6xl md:text-8xl text-stone-800 mb-10 mt-10 md:mt-0 md:mb-10 border-b-4 border-b-stone-600">
        TaskForge
      </h1>
      <div>
        <h2 className="my-8 text-center text-4xl font-bold text-stone-700">
          No Project Selected
        </h2>
        <p className="text-center text-xl font-semibold text-stone-400">
          Select a project or get started with a new one
        </p>
        <div className="my-10 text-center">
          <button
            onClick={changeAddingState}
            className="bg-stone-800 text-stone-300 font-semibold text-lg px-6 py-3 basis-4 rounded-md"
          >
            Create new project
          </button>
        </div>
      </div>
    </>
  );
}
