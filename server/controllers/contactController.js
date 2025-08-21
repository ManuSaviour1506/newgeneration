const Contact = require("../models/contactModel");
const nodemailer = require("nodemailer");

/**
 * @desc    Submit a new contact message and send email notification
 * @route   POST /api/contact
 * @access  Public
 */
const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }

  try {
    // 1. Save the message to the database
    const savedMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });
    console.log("Contact message saved to database:", savedMessage);

    // 2. Send an email notification if the message was saved successfully
    if (savedMessage) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"School Website" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Message: ${subject}`,
        html: `
                    <h2>You have a new message from your website's contact form:</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
      } catch (emailError) {
        console.error("Nodemailer failed to send email: ", emailError);
        console.error("Email authentication details:", {
          user: process.env.EMAIL_USER,
          pass: "App password hidden for security",
        });
        // This will still send a success response to the client, but log the email error on the server
      }
    }

    res
      .status(201)
      .json({
        message: "Message sent successfully! We will get back to you soon.",
      });
  } catch (error) {
    // This catch block handles errors from both saving to the database and sending the email
    console.error("Error in submitContactForm: ", error);
    res
      .status(500)
      .json({ message: "Server Error. Could not process your request." });
  }
};

module.exports = {
  submitContactForm,
};
