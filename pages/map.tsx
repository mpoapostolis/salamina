import { useRouter } from "next/router";

export default function Map() {
  const { locale } = useRouter();
  return (
    <iframe
      className="w-screen h-screen"
      src={`https://automatix.talent.gr/AO3D_devel/${locale}/`}
    />
  );
}
