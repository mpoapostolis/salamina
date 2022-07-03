import axios from "axios";
import type { NextApiResponse } from "next";

export default async function handler(res: NextApiResponse) {
  const x = await axios
    .get("https://tracker.appoploo.com/salamina/salamina.data")
    .then((d) => d.data);
  res.status(200).json({ url: x });
}
