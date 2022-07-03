import axios from "axios";
import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const obj = useUnityContext({
    streamingAssetsUrl: "https://tracker.appoploo.com/",
    loaderUrl: "/unity/salamina.loader.js",
    dataUrl: "/bucket/salamina.data",
    frameworkUrl: "/unity/salamina.framework.js",
    codeUrl: "/unity/salamina.wasm",
  });

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
