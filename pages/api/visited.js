import Cookies from "cookies";

export default function handler(req, res) {
  let c = new Cookies(req, res);
  let r = Number(c.get("visited")) ?? 0;
  r += 1;

  if (r == NaN) {
    r = 1;
  }

  console.log("visited=", r);

  c.set("visited", r, {
    sameSite: "none",
    secure: true,
  });
  res.status(200).json({ visited: r });
}
