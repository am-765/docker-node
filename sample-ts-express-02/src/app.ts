import Express, { Request, Response, NextFunction } from "express";

const app = Express();

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

// ルートハンドラーに一致しないRequest
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
  next({ statusCode: 404 });
});

// Error ルートハンドラー
app.use(
  (
    err: { statusCode: number },
    _req: Request,
    _res: Response,
    _next: NextFunction
  ) => {
    console.log(err.statusCode);
  }
);

// Express Serverの起動
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});
