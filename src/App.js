import "./App.css";
import ButtonRed from "./Components/Buttons/ButtonRed";

function App() {
  return (
    <div className="App">
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
        <div class="bg-gray-50 shadow-2xl max-w-lg w-4/5 space-y-4 p-3 rounded-lg">
          <div class="flex justify-between mt-2">
            <img
              class="border border-green-500 logo-size-app rounded-full"
              src="https://www.edenor.com/themes/custom/edenor/images/edenor.png"
              alt="Workflow"
            />
            <h2 class="text-center text-3xl text-gray-500 font-bold">
              Simulador de aumentos
            </h2>
            <div class="text-gray-50">" "</div>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />

            <div class="rounded-md shadow-sm -space-y-px">
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Total fijo"
                />
              </div>
            </div>

            <div class="rounded-md shadow-sm -space-y-px">
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Total haberes con aportes (sueldo sin descuentos)"
                />
              </div>
            </div>

            <div class="rounded-md shadow-sm -space-y-px">
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
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
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Porcentaje de aumento"
                />
              </div>
            </div>

            <div class="rounded-md shadow-sm -space-y-px">
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Nueva categoria"
                />
              </div>
            </div>

            <div class="flex w-100 justify-around">
              <button
                type="submit"
                class="
                mr-2
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
                bg-blue-700
                hover:bg-blue-500
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                Calcular
              </button>
              <ButtonRed>Resetear</ButtonRed>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
