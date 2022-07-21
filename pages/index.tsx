import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container  grid gap-4 text-center">
        <Link href="/timeline">
          <a className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            {(locale === "el" ? "ΧΡΟΝΟΛΟΓΙΟ" : `TIMELINE`).toUpperCase()}
          </a>
        </Link>

        <Link href="/triiris">
          <a className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            {(locale === "el" ? "ΤΡΙΗΡΗΣ " : `TRIIRIS`).toUpperCase()}
          </a>
        </Link>

        <Link href="/oplitis">
          <a className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            {(locale === "el" ? "ΟΠΛΙΤΗΣ" : `HOPLITE`).toUpperCase()}
          </a>
        </Link>

        <Link href="/map">
          <a className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            {(locale === "el" ? "ΧΑΡΤΗΣ" : `HOPLITE`).toUpperCase()}
          </a>
        </Link>

        <Link href="/viografies">
          <a className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            {(locale === "el" ? "ΒΙΟΓΡΑΦΙΕΣ" : `BIOGRAPHY`).toUpperCase()}
          </a>
        </Link>

        <select
          onChange={(evt) => {
            const locale = evt.currentTarget.value;
            router.push("/", "/", { locale });
          }}
          defaultValue={router.locale}
          className="cursor-pointer text-center text-4xl appearance-none block px-3 py-4 w-full  text-white font-bold bg-transparent  border outline-none"
        >
          <option
            className=" text-white uppercase  bg-black text-2xl "
            value="en"
          >
            {(locale === "el" ? "ΑΓΓΛΙΚΑ" : `English`).toUpperCase()}
          </option>
          <option
            className="text-white uppercase  bg-black text-2xl "
            value="el"
          >
            {(locale === "el" ? "ΕΛΛΗΝΙΚΑ" : `Greek`).toUpperCase()}
          </option>
        </select>
      </div>
    </div>
  );
}
