import { useRouter } from "next/router";

export default function Map() {
  const { locale } = useRouter();
  return (
    <iframe
      className="w-screen h-screen"
      src={`http://localhost/battle/${locale}/`}
    />
  );
}
