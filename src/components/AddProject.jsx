import React, { useState } from "react";

export default function AddProject() {
  const [saveProject, setSaveProject] = useState(false);

  function handleClick() {
    setSaveProject(true);
  }

  return (
    <div className="mt-44 w-[700px]">
      <div className="flex gap-4 justify-end">
        <button>Cancel</button>
        <button
          className="bg-neutral-900 text-white px-6 py-2 rounded-lg tracking-wider"
          onClick={handleClick}
        >
          Save
        </button>
      </div>

      <div>
        <div className="flex flex-col mt-5">
          <label className="uppercase text-neutral-600 text-base font-semibold">
            Title
          </label>
          <input
            type="text"
            className="bg-zinc-200 mt-2 h-8 focus:border-b-2 focus:border-neutral-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="uppercase text-neutral-600 text-base font-semibold">
            Description
          </label>
          <input
            type="text"
            className="bg-zinc-200 mt-2 h-16 focus:border-b-2 focus:border-neutral-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="uppercase text-neutral-600 text-base font-semibold">
            Due date
          </label>
          <input
            type="date"
            className="bg-zinc-200 p-2 text-neutral-600 mt-2 h-8 focus:border-b-2 focus:border-neutral-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
