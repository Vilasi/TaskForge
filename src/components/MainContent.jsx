export default function MainContent() {
  return (
    <main className=" flex-1 mt-40 flex flex-col items-center">
      {/* <h1 className="my-8 text-center text-4xl font-bold text-stone-700">
        No Project Selected
      </h1>
      <p className="text-center text-xl font-semibold text-stone-400">
        Select a project or get started with a new one
      </p>
      <div className="mt-10">
        <button className="bg-stone-800 text-stone-300 font-semibold text-lg px-6 py-3 basis-4 rounded-md">
          Create new project
        </button>
      </div> */}

      <form action="" className="flex flex-col w-10/12 sm:w-3/5">
        {/* <form
        action=""
        className="flex flex-col w-full ps-8 md:ps-32 pe-10 md:pe-20 md:me-32"
      > */}
        <div className="grow text-right mb-8">
          <button
            type="button"
            className="text-stone-700 text-lg me-2 px-7 py-2 hover:border hover:border-stone-700"
          >
            Cancel
          </button>
          <button className="bg-stone-800 text-stone-300 text-lg px-7 py-2 rounded-md">
            Save
          </button>
        </div>

        <label
          htmlFor="title"
          className="uppercase font-semibold text-lg text-stone-700 mb-1"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          className="bg-stone-200 text-stone-800 rounded-sm text-lg p-2 shadow-md border border-stone-300 mb-5"
        />

        <label
          htmlFor="description"
          className="uppercase font-semibold text-lg text-stone-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          className="bg-stone-200 text-stone-800 rounded-sm text-lg p-2 shadow-md border border-stone-300 mb-5"
        />

        <label
          htmlFor="date"
          className="uppercase font-semibold text-lg text-stone-700 mb-1"
        >
          Description
        </label>
        <input
          id="date"
          type="date"
          className="bg-stone-200 text-stone-800 rounded-sm text-lg p-2 shadow-md border border-stone-300"
        />
      </form>
    </main>
  );
}
