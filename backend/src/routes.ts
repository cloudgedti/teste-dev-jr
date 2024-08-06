import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
   return res.status(200).json({ message: "ok" });
});

export { router };
