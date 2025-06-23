import Submission from "../models/upload.model.js"
import express from "express";
// import Submission from "../models/Submission.js";
import path from "path";
import fs from "fs";

const router = express.Router();


export const upload = async (req, res) => {
  try {
    const { title, description, studentName, studentId } = req.body;
    const attachment = req.file?.filename;

    const submission = new Submission({ title, description, studentName, studentId, attachment });
    await submission.save();
    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}