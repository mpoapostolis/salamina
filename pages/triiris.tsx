import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const x = async () => {
    return await fetch("/api")
      .then((data) => data.json())
      .then((e) => e);
  };
  console.log(x);
  const obj = useUnityContext({
    loaderUrl: "/unity/salamina.loader.js",
    dataUrl:
      "https://download.wetransfer.com/eugv/a7d9bb31849694f36d717552be124f8220220626180154/50958d0d6174f6b9df14ff2417f64417723abe42/salamina.data?token=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTYyNjc0OTEsImV4cCI6MTY1NjI2ODA5MSwidW5pcXVlIjoiYTdkOWJiMzE4NDk2OTRmMzZkNzE3NTUyYmUxMjRmODIyMDIyMDYyNjE4MDE1NCIsImZpbGVuYW1lIjoic2FsYW1pbmEuZGF0YSIsIndheWJpbGxfdXJsIjoiaHR0cDovL3N0b3JtLWludGVybmFsLnNlcnZpY2UuZXUtd2VzdC0xLndldHJhbnNmZXIubmV0L2FwaS93YXliaWxscz9zaWduZWRfd2F5YmlsbF9pZD1leUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMnBITVdwb2VVRlJRVDBpTENKbGVIQWlPaUl5TURJeUxUQTJMVEkyVkRFNU9qSTRPakV4TGpBd01Gb2lMQ0p3ZFhJaU9pSjNZWGxpYVd4c1gybGtJbjE5LS04ZDdlNzY3Mjc5MTAyNGQ5OTljMjM5NDA4YjYwNzRhZGY0ZGQ2MWNhOGYwY2ZkOTM3YzlhNjg3ZGI0NTdhNzJhIiwiZmluZ2VycHJpbnQiOiI1MDk1OGQwZDYxNzRmNmI5ZGYxNGZmMjQxN2Y2NDQxNzcyM2FiZTQyIiwiY2FsbGJhY2siOiJ7XCJmb3JtZGF0YVwiOntcImFjdGlvblwiOlwiaHR0cDovL2Zyb250ZW5kLnNlcnZpY2UuZXUtd2VzdC0xLndldHJhbnNmZXIubmV0L3dlYmhvb2tzL2JhY2tlbmRcIn0sXCJmb3JtXCI6e1widHJhbnNmZXJfaWRcIjpcImE3ZDliYjMxODQ5Njk0ZjM2ZDcxNzU1MmJlMTI0ZjgyMjAyMjA2MjYxODAxNTRcIixcImRvd25sb2FkX2lkXCI6MTU2NzIxNjMzNDJ9fSJ9.P_8nZQInjyGyf6QSf-cqBmoIEBkxNPSUdOjwnvMpPAk&cf=y",
    frameworkUrl: "/unity/salamina.framework.js",
    codeUrl: "/unity/salamina.wasm",
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
