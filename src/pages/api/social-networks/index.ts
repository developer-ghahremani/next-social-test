import type { NextApiRequest, NextApiResponse } from "next";

import data from "./data";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  console.log(method);

  if (method === "GET") return res.status(200).json({ name: "test" });
  if (method === "POST") {
    data.push({ fitsrname: "ali", lastname: "ashor" });
    return res.status(200).json({ name: "test" });
  }
}
