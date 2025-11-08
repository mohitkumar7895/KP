const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Email Templates
const generateInquiryEmailContent = (data) => `
New Inquiry Received

Name: ${data.name}
Mobile: ${data.mobile || 'N/A'}
Email: ${data.email || 'N/A'}
Message: ${data.message}
`;

const generateServiceFormEmailContent = (data) => `
New Service Request Received

Name: ${data.name}
Address: ${data.address}
City: ${data.city}
State: ${data.state}
Pincode: ${data.pincode}
Contact No: ${data.contactNo}
Service Name: ${data.serviceName}
Email: ${data.email || 'N/A'}
Message: ${data.message}
`;

const generateContactFormEmailContent = (data) => `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'N/A'}
Inquiry Type: ${data.inquiry_type}
Message: ${data.message}
`;

const generateJobApplicationEmailContent = (data, jobTitle) => `
New Job Application Received

Position: ${jobTitle}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Cover Letter/Message: ${data.message}
`;

// Routes
app.post('/api/inquiry', async (req, res) => {
    try {
        const data = req.body;
        await resend.emails.send({
            from: 'KP Manpower Services <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL,
            subject: 'New Inquiry Form Submission',
            text: generateInquiryEmailContent(data),
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending inquiry email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.post('/api/service-request', async (req, res) => {
    try {
        const data = req.body;
        await resend.emails.send({
            from: 'KP Manpower Services <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL,
            subject: 'New Service Request Form Submission',
            text: generateServiceFormEmailContent(data),
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending service request email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const data = req.body;
        await resend.emails.send({
            from: 'KP Manpower Services <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL,
            subject: 'New Contact Form Submission',
            text: generateContactFormEmailContent(data),
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending contact form email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.post('/api/job-application', async (req, res) => {
    try {
        const { jobTitle, ...data } = req.body;
        await resend.emails.send({
            from: 'KP Manpower Services <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL,
            subject: `New Job Application: ${jobTitle}`,
            text: generateJobApplicationEmailContent(data, jobTitle),
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending job application email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});