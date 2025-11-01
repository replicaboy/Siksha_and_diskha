import mongoose, { Schema, Document, Model } from 'mongoose';
import validator from 'validator';

export interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  courseInterest?: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  submittedAt: Date;
  ipAddress?: string;
}

const InquirySchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name must not exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Please provide a valid email address',
    },
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    validate: {
      validator: (value: string) => /^[0-9]{10}$/.test(value),
      message: 'Phone number must be 10 digits',
    },
  },
  courseInterest: {
    type: String,
    required: false,
    enum: ['Academic Classes (1-10)', 'English Courses', 'Spoken English', 'Polytechnic', 'General Inquiry', ''],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters'],
    maxlength: [1000, 'Message must not exceed 1000 characters'],
  },
  status: {
    type: String,
    default: 'new',
    enum: ['new', 'contacted', 'resolved'],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: {
    type: String,
    required: false,
  },
});

// Create indexes
InquirySchema.index({ submittedAt: -1 });
InquirySchema.index({ status: 1 });

// Prevent model recompilation in development
const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;
