import { Router } from "express";
import { requestBlood } from "./hospitalRequest.controller.js";

const router = Router();

router.post("/request", requestBlood);

export default router;
