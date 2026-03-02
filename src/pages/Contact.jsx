import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Mesajınız başarıyla gönderildi!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Bir hata oluştu, lütfen tekrar deneyin.');
            }
        } catch (error) {
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
            <h1 style={{ marginBottom: '40px' }}>İletişim</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px' }}>
                <div>
                    <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>Bize Ulaşın</h3>
                    <p style={{ color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                        Soru, görüş veya önerileriniz için aşağıdaki e-posta adresinden veya iletişim formundan bize her zaman ulaşabilirsiniz.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <strong style={{ display: 'block', color: '#1C1C1E', marginBottom: '4px' }}>E-posta:</strong>
                            <a href="mailto:info@eventflowapp.net" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: '500' }}>info@eventflowapp.net</a>
                        </li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>İletişim Formu</h3>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Ad Soyad</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Adınız Soyadınız"
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>E-posta</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="ornek@email.com"
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Mesajınız</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Size nasıl yardımcı olabiliriz?"
                            rows="4"
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px', resize: 'vertical' }}
                        ></textarea>
                    </div>
                    <button type="submit" style={{ background: '#818CF8', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>Gönder</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
