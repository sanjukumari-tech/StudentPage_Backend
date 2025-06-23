import express from "express";
import secureRoute from "../middleware/secureRoute.js";
import { upload } from "../controller/upload.controller.js";

const router = express.Router();
router.post("/submit",upload)
export default router;