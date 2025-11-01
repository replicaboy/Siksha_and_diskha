import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import validator from 'validator';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { name, email, phone, courseInterest, message } = body;

    // Validation
    const errors: { [key: string]: string } = {};

    // Name validation
    if (!name || typeof name !== 'string') {
      errors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (name.trim().length > 100) {
      errors.name = 'Name must not exceed 100 characters';
    }

    // Email validation
    if (!email || typeof email !== 'string') {
      errors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Invalid email format';
    }

    // Phone validation
    if (!phone || typeof phone !== 'string') {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(phone.trim())) {
      errors.phone = 'Phone number must be 10 digits';
    }

    // Message validation
    if (!message || typeof message !== 'string') {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.trim().length > 1000) {
      errors.message = 'Message must not exceed 1000 characters';
    }

    // Course interest validation (optional)
    const validCourses = [
      'Academic Classes (1-10)',
      'English Courses',
      'Spoken English',
      'Polytechnic',
      'General Inquiry',
      '',
    ];
    if (courseInterest && !validCourses.includes(courseInterest)) {
      errors.courseInterest = 'Invalid course selection';
    }

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors,
        },
        { status: 400 }
      );
    }

    // Get IP address (optional)
    const ipAddress =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Create new inquiry
    const inquiry = new Inquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      courseInterest: courseInterest || '',
      message: message.trim(),
      ipAddress,
    });

    // Save to database
    await inquiry.save();

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been submitted successfully.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
