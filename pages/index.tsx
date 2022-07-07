import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container  grid gap-4 text-center">
        <Link href="/timeline">
          <a className="text-4xl hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            TIMELINE
          </a>
        </Link>

        <Link href="/triiris">
          <a className="text-4xl hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            TRIIRIS
          </a>
        </Link>

        <Link href="/oplitis">
          <a className="text-4xl hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            HOPLITE
          </a>
        </Link>

        <Link href="/map">
          <a className="text-4xl hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border">
            Map
          </a>
        </Link>
        <select
          defaultValue="Select Language"
          className="cursor-pointer text-center text-4xl appearance-none block px-3 py-4 w-full  text-white font-bold bg-transparent  border outline-none"
        >
          <option className=" text-white  bg-black text-2xl " value="1">
            English
          </option>
          <option className="text-white  bg-black text-2xl " value="2">
            Greek
          </option>
        </select>
      </div>
    </div>
  );
}
