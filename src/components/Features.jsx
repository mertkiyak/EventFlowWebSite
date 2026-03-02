import React, { useEffect, useRef } from 'react';

/* ─────────────────────────── Mini UI Previews ─────────────────────────── */

const DiscoverPreview = () => (
    <div className="fp-preview">
        <div className="fp-searchbar">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span>Etkinlik ara…</span>
        </div>
        {[
            { name: 'Jazz Gecesi', date: '15 Mar', color: '#667eea' },
            { name: 'Yazılım Zirvesi', date: '20 Mar', color: '#f5576c' },
            { name: 'Yoga Kampı', date: '22 Mar', color: '#4facfe' },
        ].map((e, i) => (
            <div key={i} className="fp-event-row">
                <div className="fp-event-dot" style={{ background: e.color }} />
                <span className="fp-event-name">{e.name}</span>
                <span className="fp-event-date">{e.date}</span>
            </div>
        ))}
    </div>
);

const SocialPreview = () => (
    <div className="fp-preview">
        <div className="fp-avatars-row">
            {['#667eea', '#f5576c', '#4facfe', '#fa709a', '#a8edea'].map((c, i) => (
                <div key={i} className="fp-avatar" style={{ background: c, marginLeft: i === 0 ? 0 : -10, zIndex: 5 - i }}>
                    {['A', 'B', 'C', 'D', 'E'][i]}
                </div>
            ))}
            <span className="fp-avatar-more">+48</span>
        </div>
        <div className="fp-connection-card">
            <div className="fp-avatar sm" style={{ background: '#f5576c' }}>M</div>
            <div className="fp-conn-info">
                <p className="fp-conn-name">Merve K.</p>
                <p className="fp-conn-sub">Ortak 3 etkinlik</p>
            </div>
            <div className="fp-conn-btn">Takip Et</div>
        </div>
    </div>
);

const CreatePreview = () => (
    <div className="fp-preview">
        <div className="fp-form-row">
            <div className="fp-form-label">Etkinlik Adı</div>
            <div className="fp-form-input">Yazılım Buluşması</div>
        </div>
        <div className="fp-form-row" style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
                <div className="fp-form-label">Tarih</div>
                <div className="fp-form-input">25 Mar 2025</div>
            </div>
            <div style={{ flex: 1 }}>
                <div className="fp-form-label">Saat</div>
                <div className="fp-form-input">19:00</div>
            </div>
        </div>
        <div className="fp-publish-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Yayınla
        </div>
    </div>
);

const LocationPreview = () => (
    <div className="fp-preview fp-map-bg">
        <div className="fp-map-pin">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#6366F1" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="white" /></svg>
        </div>
        <div className="fp-nearby-list">
            {[{ n: 'Rock Konseri', d: '0.3 km' }, { n: 'Yoga Seansı', d: '1.1 km' }].map((e, i) => (
                <div key={i} className="fp-nearby-item">
                    <span className="fp-nearby-dot" />
                    <span className="fp-nearby-name">{e.n}</span>
                    <span className="fp-nearby-dist">{e.d}</span>
                </div>
            ))}
        </div>
    </div>
);

const FilterPreview = () => (
    <div className="fp-preview">
        <div className="fp-filter-chips">
            {[
                { label: '🎵 Müzik', active: true },
                { label: '⚽ Spor', active: false },
                { label: '🎨 Sanat', active: false },
                { label: '💻 Tech', active: true },
                { label: '🍕 Yemek', active: false },
            ].map((c, i) => (
                <div key={i} className={`fp-chip ${c.active ? 'active' : ''}`}>{c.label}</div>
            ))}
        </div>
        <div className="fp-filter-result">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            <span>24 etkinlik bulundu</span>
        </div>
    </div>
);

const NotifPreview = () => (
    <div className="fp-preview">
        {[
            { icon: '🎫', msg: 'Biletiniz onaylandı!', time: 'Az önce', accent: '#6366F1' },
            { icon: '📅', msg: 'Etkinlik yarın başlıyor', time: '2s önce', accent: '#f5576c' },
            { icon: '👥', msg: 'Arkadaşın katılıyor', time: '5s önce', accent: '#4facfe' },
        ].map((n, i) => (
            <div key={i} className="fp-notif" style={{ borderLeft: `3px solid ${n.accent}` }}>
                <span className="fp-notif-icon">{n.icon}</span>
                <div className="fp-notif-body">
                    <p className="fp-notif-msg">{n.msg}</p>
                    <p className="fp-notif-time">{n.time}</p>
                </div>
                <div className="fp-notif-dot" style={{ background: n.accent }} />
            </div>
        ))}
    </div>
);

/* ─────────────────────────── Ticket Mock Preview ─────────────────────────── */

const TicketPreview = () => (
    <div className="fp-preview tk-preview">
        <div className="tk-mock">
            <div className="tk-mock-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="tk-dot" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }} />
                    <div>
                        <p className="tk-event-name">İstanbul Müzik Festivali</p>
                        <p className="tk-event-date">15 Mart 2025 · 20:00</p>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className="tk-seat-label">Koltuk</p>
                    <p className="tk-seat-num">A-12</p>
                </div>
            </div>
            <div className="tk-divider">
                <div className="tk-notch left" />
                <div className="tk-dashes" />
                <div className="tk-notch right" />
            </div>
            <div className="tk-mock-bot">
                <div className="tk-qr-wrap">
                    <div className="tk-qr-grid">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="tk-qr-cell" style={{
                                background: [0, 1, 2, 5, 6, 7, 10, 14, 17, 18, 19, 20, 21, 22, 24, 23, 12, 8, 3, 15, 16].includes(i) ? '#1C1C1E' : 'transparent'
                            }} />
                        ))}
                    </div>
                    <p className="tk-qr-label">QR Kod</p>
                </div>
                <div className="tk-status">
                    <div className="tk-ok-badge">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                        Check-in Hazır
                    </div>
                    <p className="tk-ticket-id">#EVT-2025-0315</p>
                </div>
            </div>
        </div>
    </div>
);

/* ─────────────────────────── Feature Card ─────────────────────────── */

const FeatureCard = ({ gradient, title, description, icon, preview, comingSoon }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.style.opacity = '1';
                entries[0].target.style.transform = 'translateY(0)';
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.08 });

        if (cardRef.current) {
            cardRef.current.style.opacity = '0';
            cardRef.current.style.transform = 'translateY(28px)';
            cardRef.current.style.transition = 'all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
            observer.observe(cardRef.current);
        }
        return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
    }, []);

    return (
        <div className="fc" ref={cardRef}>
            {comingSoon && (
                <div className="fc-soon-badge">
                    <span className="fc-soon-dot" />
                    Yakında Gelecek
                </div>
            )}
            {/* Soft glow in top-right corner */}
            <div className="fc-glow" style={{ background: gradient }} />

            <div className="fc-header">
                <div className="fc-icon" style={{ background: gradient }}>{icon}</div>
                <div>
                    <h3 className="fc-title">{title}</h3>
                    <p className="fc-desc">{description}</p>
                </div>
            </div>

            {preview}
        </div>
    );
};

/* ─────────────────────────── Section ─────────────────────────── */

const Features = () => (
    <section id="features" className="features">
        <div className="container">
            <div className="section-header">
                <span className="badge">Özellikler</span>
                <h2>Her Şey Bir Arada</h2>
                <p>Eventflow ile etkinlik dünyasının tüm imkanlarını parmaklarınızın ucuna getirin</p>
            </div>

            <div className="fc-grid">
                <FeatureCard
                    gradient="linear-gradient(135deg,#667eea,#764ba2)"
                    title="Etkinlikleri Keşfet"
                    description="Çevrendeki tüm etkinlikleri gerçek zamanlı görüntüle"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>}
                    preview={<DiscoverPreview />}
                />
                <FeatureCard
                    gradient="linear-gradient(135deg,#f093fb,#f5576c)"
                    title="Yeni İnsanlarla Tanış"
                    description="Ortak ilgi alanlarına sahip insanlarla bağlantı kur"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                    preview={<SocialPreview />}
                />
                <FeatureCard
                    gradient="linear-gradient(135deg,#4facfe,#00f2fe)"
                    title="Etkinlik Oluştur"
                    description="Kendi etkinliğini saniyeler içinde oluştur ve paylaş"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
                    preview={<CreatePreview />}
                />
                <FeatureCard
                    gradient="linear-gradient(135deg,#fa709a,#fee140)"
                    title="Konum Tabanlı"
                    description="Yakınındaki etkinlikleri harita üzerinde keşfet"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
                    preview={<LocationPreview />}
                />
                <FeatureCard
                    gradient="linear-gradient(135deg,#a8edea,#fed6e3)"
                    title="Kategori Filtreleme"
                    description="Müzik, spor, sanat ve daha fazlasına göre filtrele"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>}
                    preview={<FilterPreview />}
                />
                <FeatureCard
                    gradient="linear-gradient(135deg,#ffecd2,#fcb69f)"
                    title="Bilet & Check-in"
                    description="QR kodlu dijital bilet al, saniyeler içinde giriş yap"
                    icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" /></svg>}
                    preview={<TicketPreview />}
                    comingSoon
                />
            </div>
        </div>
    </section>
);

export default Features;
