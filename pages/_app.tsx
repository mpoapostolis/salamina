import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="relative">
      <ul className="z-50 fixed text-white top-4 left-4">
        <li>
          <Link href="/">
            <a href="">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/oplitis">
            <a href="">Oplitis</a>
          </Link>
        </li>
        <li>
          <Link href="/timeline">
            <a href="">time line</a>
          </Link>
        </li>
        <li>
          <Link href="/triiris">
            <a href="">Triiris</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
