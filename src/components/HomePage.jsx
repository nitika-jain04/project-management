import { useState } from "react";

export default function HomePage() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [saveProject, setSaveProject] = useState(false);
  const [title, setTitle] = useState("");

  function handleSave() {
    console.log("clicked");
    setSaveProject(true);
    console.log(saveProject);
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    setButtonClicked(true);
  }

  return (
    <div className="flex gap-44 h-screen">
      <div className="bg-black w-80 mt-10 text-white rounded-tr-2xl">
        <h1 className="ml-10 mt-20 text-2xl uppercase">Your Projects</h1>

        <button
          className="ml-10 mt-10 bg-neutral-700 text-zinc-400 p-3 rounded-lg"
          onClick={handleClick}
        >
          + Add Project
        </button>
        {saveProject && (
          <p className="text-white ml-10 mt-5 tracking-wider">{title}</p>
        )}
      </div>
      {buttonClicked && (
        <AddProject
          onChange={handleChange}
          onClick={handleSave}
          onCancel={() => setButtonClicked(false)}
          title={title}
          saveProject={saveProject}
        />
      )}
      {!buttonClicked && (
        <div className="flex flex-col items-center my-44 ml-40">
          <img src="logo.png" alt="" className="w-20" />
          <h1 className="text-2xl font-semibold -tracking-normal text-zinc-600 mt-6">
            No Project Selected
          </h1>
          <p className="text-gray-400 text-lg mt-6">
            Select a project or get started with a new one
          </p>
          <button
            className="bg-neutral-600 text-zinc-400 px-4 py-3 rounded-lg tracking-wide mt-6"
            onClick={handleClick}
          >
            Create new project
          </button>
        </div>
      )}
    </div>
  );
}

function AddProject({ onChange, onClick, onCancel, title, saveProject }) {
  return (
    <div className="mt-44 w-[700px]">
      <div className="flex gap-4 justify-end">
        <button onClick={onCancel}>Cancel</button>
        <button
          className="bg-neutral-900 text-white px-6 py-2 rounded-lg tracking-wider"
          onClick={onClick}
        >
          Save
        </button>
      </div>
      {saveProject && title === "" && (
        <p className="flex justify-end mt-2 text-lg text-neutral-800">
          Project title cannot be
          <span className="text-red-500 font-semibold ml-1">empty</span>
        </p>
      )}

      <div>
        <div className="flex flex-col mt-5">
          <label className="uppercase text-neutral-600 text-base font-semibold">
            Title
          </label>
          <input
            type="text"
            className="bg-zinc-200 mt-2 h-8 focus:border-b-2 focus:border-neutral-500 focus:outline-none"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="uppercase text-neutral-600 text-base font-semibold">
            Description
          </label>
          <textarea className="bg-zinc-200 mt-2 h-16 focus:border-b-2 focus:border-neutral-500 focus:outline-none" />
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
