import type { NextApiRequest, NextApiResponse } from "next";

// import data from "./data";
let data = [
  {
    id: 1,
    type: "Instagram",
    link: "https://instagram.com/rezaghahremani",
  },
  {
    id: 2,
    type: "Telegram",
    link: "https://t.me/rezaghahremani",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query, url } = req;
  console.log(method, query, url);

  if (method === "GET") return res.status(200).json(data);
  if (method === "POST") {
    if (!body.type || !body.link)
      return res.status(400).json({ message: "fields not send" });
    const isExist = data.find(
      (item) => item.link === body.link && item.type == body.type
    );
    if (isExist) return res.status(400).json({ message: "duplicate route" });
    data.push({ id: Math.floor(Math.random() * 1000000), ...body });
    return res.status(200).json(data);
  }
  if (method === "PATCH") {
    if (!body.type || !body.link || !body.id)
      return res.status(400).json({ message: "fields not send" });
    const index = data.findIndex((item) => item.id === body.id);
    data[index] = { id: body.id, link: body.link, type: body.type };

    return res.status(200).json(data);
  }
  if (method === "DELETE") {
    if (!query.id) return res.status(400).json({ message: "fields not send" });
    data = data.filter((item) => item.id !== +query.id);

    return res.status(200).json(data);
  }
}
