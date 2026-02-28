import nodemailer from 'dotenv';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendContactEmail = async (name, email, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sends to yourself
    subject: `New Portfolio Contact from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #9333ea; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p style="margin: 10px 0;">
            <strong style="color: #4b5563;">Name:</strong> 
            <span style="color: #111827;">${name}</span>
          </p>
          <p style="margin: 10px 0;">
            <strong style="color: #4b5563;">Email:</strong> 
            <span style="color: #111827;">${email}</span>
          </p>
          <p style="margin: 10px 0;">
            <strong style="color: #4b5563;">Message:</strong>
          </p>
          <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #9333ea;">
            <p style="color: #374151; line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
          This email was sent from your portfolio website.
        </p>
      </div>
    `
  };

  // Auto-reply to the sender
  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting me!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #9333ea;">Thank You for Reaching Out!</h2>
        
        <p style="color: #374151; line-height: 1.6;">
          Hi ${name},
        </p>
        
        <p style="color: #374151; line-height: 1.6;">
          Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.
        </p>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>Your message:</strong></p>
          <p style="color: #6b7280; margin: 0;">"${message}"</p>
        </div>
        
        <p style="color: #374151; line-height: 1.6;">
          Best regards,<br>
          <strong style="color: #9333ea;">Hassan Sharif Ahmed</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #9ca3af; font-size: 12px; text-align: center;">
          © ${new Date().getFullYear()} Hassan Sharif Ahmed. All rights reserved.
        </p>
      </div>
    `
  };

  try {
    // Send email to yourself
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply to sender
    await transporter.sendMail(autoReplyOptions);
    
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};