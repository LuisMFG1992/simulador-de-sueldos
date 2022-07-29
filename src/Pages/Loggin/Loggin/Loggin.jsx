import React from "react";
import { Link } from "react-router-dom";
import ButtonBlue from "../../../Components/Buttons/ButtonBlue";
import ButtonGreen from "../../../Components/Buttons/ButtonGreen";

const Loggin = () => {
  return (
    <div
      class="
  bg-edenor
  min-h-full
  h-screen
  flex
  items-center
  justify-center
  py-12
  px-4
  sm:px-6
  lg:px-8
"
    >
      <div class="bg-gray-50 shadow-2xl max-w-md w-full space-y-4 p-3 rounded-lg">
        <div>
          <img
            class="border border-green-500 mx-auto logo-size rounded-full"
            src="https://www.edenor.com/themes/custom/edenor/images/edenor.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl text-gray-500 font-bold">
            Simulador de aumentos
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-t-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
                placeholder="Email@edenor.com"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-b-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-gray-500 hover:text-indigo-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <Link to="/">
              <ButtonBlue>Iniciar sesion</ButtonBlue>
            </Link>
            <Link to="/registration">
              <ButtonGreen>Crear cuenta</ButtonGreen>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loggin;
