import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios.get("/api").then(console.log);
  }, []);

  return null;
}
