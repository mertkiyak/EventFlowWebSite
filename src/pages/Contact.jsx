import React from 'react';

const Contact = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
            <h1 style={{ marginBottom: '40px' }}>İletişim</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                    <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>Bize Ulaşın</h3>
                    <p style={{ color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                        Soru, görüş veya önerileriniz için aşağıdaki e-posta adresinden veya adresimizden bize her zaman ulaşabilirsiniz.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <strong style={{ display: 'block', color: '#1C1C1E' }}>E-posta:</strong>
                            <a href="mailto:destek@eventflow.com" style={{ color: '#818CF8', textDecoration: 'none' }}>destek@eventflow.com</a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <strong style={{ display: 'block', color: '#1C1C1E' }}>Adres:</strong>
                            <span style={{ color: '#6B7280' }}>Bilişim Vadisi, Teknoloji Blv.<br />Gebze/Kocaeli, Türkiye</span>
                        </li>
                    </ul>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>İletişim Formu</h3>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Ad Soyad</label>
                        <input type="text" placeholder="Adınız Soyadınız" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>E-posta</label>
                        <input type="email" placeholder="ornek@email.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Mesajınız</label>
                        <textarea placeholder="Size nasıl yardımcı olabiliriz?" rows="4" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px', resize: 'vertical' }}></textarea>
                    </div>
                    <button type="button" style={{ background: '#818CF8', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>Gönder</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
