import React from "react";

const ButtonRed = () => {
  return (
    <button
      type="submit"
      class="
  group
  relative
  w-56
  flex
  justify-center
  py-2
  px-4
  border border-transparent
  text-sm
  font-medium
  rounded-md
  text-white
  bg-red-600
  hover:bg-red-500
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
"
    >
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </span>
      Resetear
    </button>
  );
};

export default ButtonRed;
