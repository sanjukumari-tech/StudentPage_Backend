import express from "express";
import { allSubmission } from "../controller/getAllSubmission.js";


const router = express.Router();

router.get("/allSubmission", allSubmission);


export default router;
