import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  title: String,
  description: String,
  attachment: String,
  studentName: String,
  studentId: String,
}, { timestamps: true });

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;