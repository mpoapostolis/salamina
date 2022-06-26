import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const obj = useUnityContext({
    loaderUrl: "/unity/triiris/salamina.loader.js",
    dataUrl: "/unity/triiris/salamina.data",
    frameworkUrl: "/unity/triiris/salamina.framework.js",
    codeUrl: "/unity/triiris/salamina.wasm",
  });
  return (
    <div className="bg-black ">
      {!obj.isLoaded && (
        <div className="flex w-screen h-screen fixed z-50 pointer-events-none justify-center items-center text-white">
          <div className="animate-spin w-10 h-10"></div>
          {(obj.loadingProgression * 100).toFixed(0)}%
        </div>
      )}{" "}
      <Unity className="w-screen h-screen" unityProvider={obj.unityProvider} />
    </div>
  );
}
