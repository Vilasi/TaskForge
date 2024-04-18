export default function ProjectList({ changeAddingState }) {
  return (
    <aside className="mt-12 md:w-1/4 bg-stone-900 text-stone-50 rounded-r-xl py-16 px-8 md:h-dvh">
      <h2 className="uppercase font-bold text-2xl mb-8">Your Projects</h2>

      <button
        onClick={changeAddingState}
        className="text-base mb-8 bg-stone-600 px-4 py-3 rounded-md"
      >
        + Add Project
      </button>
    </aside>
  );
}
