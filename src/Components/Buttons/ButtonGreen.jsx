import React from "react";

const ButtonGreen = () => {
  return (
    <button
      type=""
      class="
          mt-2
          group
          relative
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          text-sm
          font-medium
          rounded-md
          text-white
          bg-green-700
          hover:bg-green-500
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
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          ></path>
        </svg>
      </span>
      Crear cuenta
    </button>
  );
};

export default ButtonGreen;
