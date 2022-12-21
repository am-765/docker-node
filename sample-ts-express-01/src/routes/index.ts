import Express, { Request, Response } from "express";

const router = Express.Router();

router.get("/", (_req: Request, res: Response) => {
  const data = { message: "hello world" };
  res.send(data);
});

module.exports = router;
