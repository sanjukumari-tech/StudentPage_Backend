import Submission from "../models/upload.model.js";

export const allSubmission = async(req,res)=>{
   try {
    const submissions = await Submission.find().populate('userId');
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch submissions' });
  }
}