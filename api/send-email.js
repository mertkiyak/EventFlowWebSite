export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'EventFlow <onboarding@resend.dev>',
                to: 'info@eventflowapp.net',
                subject: `EventFlow İletişim Formu - ${name}`,
                html: `
                    <h2>Yeni İletişim Formu Mesajı</h2>
                    <p><strong>Ad Soyad:</strong> ${name}</p>
                    <p><strong>E-posta:</strong> ${email}</p>
                    <p><strong>Mesaj:</strong></p>
                    <p>${message}</p>
                `
            })
        });

        if (!response.ok) throw new Error('Email gönderilemedi');

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}