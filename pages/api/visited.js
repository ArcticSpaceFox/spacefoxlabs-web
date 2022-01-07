import Cookies from "cookies";

export default function handler(req, res) {
  let c = new Cookies(req, res, { secure: true });
  let r = c.get("visited");

  if (r == false || r == "" || r == null) {
    console.log("cookie wasn't set");
    r = 0;
  } else {
    r = parseInt(r, 10);
  }
  r += 1;

  console.log("visited=", r);

  c.set("visited", r);
  res.status(200).json({ visited: r });
}
