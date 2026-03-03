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
                alert('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
                <h1 style={{ marginBottom: '40px' }}>Contact</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px' }}>
                    <div>
                        <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>Get in Touch</h3>
                        <p style={{ color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                            For any questions, feedback, or suggestions, feel free to reach us anytime via the email address below or through the contact form.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}>
                                <strong style={{ display: 'block', color: '#1C1C1E', marginBottom: '4px' }}>Email:</strong>
                                <a href="mailto:info@eventflowapp.net" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: '500' }}>info@eventflowapp.net</a>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Contact Form</h3>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Full Name"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="example@email.com"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#1C1C1E', fontSize: '14px', fontWeight: '500' }}>Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="How can we help you?"
                                rows="4"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '15px', resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <button type="submit" style={{ background: '#818CF8', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
