import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

export const sendRejectionEmail = async (email, name, reason) => {
    console.log(`Attempting to send email to: ${email}`); // ✅ Debugging log
    console.log(`Reason: ${reason}`);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Blood Donation Rejection Notice",
        text: `Dear ${name},\n\nUnfortunately, your blood donation was rejected due to the following reason(s):\n${reason}\n\nThank you for your willingness to donate.\n\nBest regards,\nBlood Bank Team`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Rejection email sent successfully.");
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};
