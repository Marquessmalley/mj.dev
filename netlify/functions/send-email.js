const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Parse the form data
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const { firstName, lastName, email, phone, message } = data;

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  // Create transporter using Gmail SMTP
  // You'll need to set these environment variables in Netlify
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your Gmail address
      pass: process.env.PASSWORD, // Your Gmail App Password
    },
  });

  // Email content
  // Note: Gmail SMTP requires 'from' to be your authenticated email
  // We use 'replyTo' so when you reply, it goes to the person who contacted you
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL}>`,
    to: "marquessmalley@gmail.com",
    replyTo: `"${firstName} ${lastName}" <${email}>`,
    subject: `Portfolio Contact: ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${
            phone || "Not provided"
          }</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #334155; margin-top: 0;">Message:</h3>
          <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This email was sent from your portfolio contact form.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email. Please try again later.",
      }),
    };
  }
};
