import Cookies from "cookies";

export default function handler(req, res) {
  let c = new Cookies(req, res);
  let r = c.get("visited");

  if (r == false || r == "") {
    console.log("cookie wasn't set");
    r = 0;
  } else {
    r = parseInt(r, 10);
  }
  r += 1;

  console.log("visited=", r);

  c.set("visited", r, {
    sameSite: "none",
    secure: false,
  });
  res.status(200).json({ visited: r });
}
