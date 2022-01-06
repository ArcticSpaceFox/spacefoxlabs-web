import Cookies from "cookies";

export default function handler(req, res) {
  let c = new Cookies(req, res);
  let r = parseInt(c.get("visited"), 10);

  if (r == NaN) {
    r = 0;
  }
  r += 1;

  console.log("visited=", r);

  c.set("visited", r, {
    sameSite: "none",
    secure: false,
  });
  res.status(200).json({ visited: r });
}
