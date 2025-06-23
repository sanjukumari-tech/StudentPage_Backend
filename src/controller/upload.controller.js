import Submission from "../models/upload.model.js"
export const upload = async (req, res) => {
  try {
    const { userId, question, answer, fileUrl, link, submissionType } = req.body;
      const senderId = req.user._id;
      
    const newSubmission = new Submission({
      userId,
      question,
      answer,
      fileUrl,
      link,
      submissionType,
    });

    await newSubmission.save();
    res.status(201).json({ message: 'Submission successful', submission: newSubmission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Submission failed' });
}
}