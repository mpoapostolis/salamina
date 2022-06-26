import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res
    .status(200)
    .json({ url: "https://tracker.appoploo.com/salamina/salamina.data" });
}
