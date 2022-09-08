import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
// @ts-ignore
import FPSStats from "react-fps-stats";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className="relative">
      <FPSStats />
      {router.pathname !== "/" && (
        <Link href="/">
          <a className="z-50 fixed text-white top-16 left-4">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#FFF"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </a>
        </Link>
      )}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
