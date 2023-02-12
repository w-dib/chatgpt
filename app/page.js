import { SunIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      {/* Main Div - Flex column */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
        <div>
          <h1 className="text-4xl font-medium text-slate-800 mb-10">
            WalidGPT
          </h1>
        </div>

        {/* Examples, Capabilities, Limitations div - flex row of 3 divs, each being a flex col */}

        {/* Examples */}
        <div className="flex flex-row space-x-2 mx-2">
          <div className="flex flex-row justify-center items-center w-full h-1/2">
            <div className="flex flex-col justify-center items-center  h-full text-slate-600">
              <SunIcon className="h-8 w-8" />
              <h2 className="text-xl mb-3">Examples</h2>
              <div className="flex flex-col text-sm text-slate-800 space-y-3 text-center">
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  &quot;Explain quantum computing in simple terms&quot; →
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  &quot;Got any creative ideas for a 10 year old&apos;s
                  birthday?&quot; →
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  &quot;How do I make an HTTP request in Javascript?s&quot; →
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="flex justify-center items-center w-full h-1/2">
            <div className="flex flex-col justify-center items-center  h-full text-slate-600">
              <BoltIcon className="h-8 w-8" />
              <h2 className="text-xl mb-3">Capabilities</h2>
              <div className="flex flex-col text-sm text-slate-800 space-y-3 text-center">
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  Remembers what user said earlier in the conversation
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  Allows user to provide follow-up corrections
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  Trained to decline inappropriate requests
                </p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="flex flex-row justify-center items-center w-full h-1/2">
            <div className="flex flex-col justify-center items-center  h-full text-slate-600">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2 className="text-xl mb-3">Limitations</h2>
              <div className="flex flex-col text-sm text-slate-800 space-y-3 text-center">
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  May occasionally generate incorrect information
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-1 rounded-md">
                  May occasionally produce harmful instructions or biased
                  content
                </p>
                <p className="bg-slate-100 border border-transparent py-3 px-2 min-w-full rounded-md">
                  Limited knowledge of world and events after 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
