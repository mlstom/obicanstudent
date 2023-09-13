import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, file } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Postavite odgovarajući servis
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Subject of the Email',
      text: 'Body of the Email',
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email je uspešno poslat.' });
    } catch (error) {
      console.error('Došlo je do greške:', error);
      res.status(500).json({ error: 'Došlo je do greške pri slanju email-a.' });
    }
  } else {
    res.status(405).end();
  }
}
