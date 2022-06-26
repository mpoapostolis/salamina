import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const x = async () => {
    return await fetch("/api")
      .then((data) => data.json())
      .then((e) => e);
  };
  const obj = useUnityContext({
    loaderUrl: "/unity/salamina.loader.js",
    dataUrl: "https://www.dropbox.com/s/yscuvgf2hedxoey/salamina.data?dl=0",
    frameworkUrl: "/unity/salamina.framework.js",
    codeUrl: "/unity/salamina.wasm",
  });
  console.log(obj);
  return (
    <div className="bg-black ">
      {!obj.isLoaded && (
        <div className="flex  w-screen h-screen fixed z-50 pointer-events-none justify-center items-center text-white">
          <div>
            <div className="text-2xl text-center w-full mb-4">
              {(obj.loadingProgression * 100).toFixed(2)}%
            </div>
            <div className="w-96 bg-gray-200  rounded-full">
              <div
                className="bg-blue-600 w-full h-4 text-center text-lg font-medium text-blue-100 p-0.5 leading-none rounded-l-full"
                style={{ width: `${obj.loadingProgression * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <Unity className="w-screen h-screen" unityProvider={obj.unityProvider} />
    </div>
  );
}
