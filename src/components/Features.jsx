import React, { useEffect, useRef } from 'react';

const FeatureCard = ({ icon, title, description, gradient }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.style.opacity = '1';
                entries[0].target.style.transform = 'translateY(0)';
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        if (cardRef.current) {
            // initial state
            cardRef.current.style.opacity = '0';
            cardRef.current.style.transform = 'translateY(30px)';
            cardRef.current.style.transition = 'all 0.6s ease-out';
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div className="feature-card" ref={cardRef}>
            <div className="feature-icon" style={{ background: gradient }}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Özellikler</span>
                    <h2>Her Şey <span className="gradient-text">Bir Arada</span></h2>
                    <p>Eventflow ile etkinlik dünyasının tüm imkanlarını parmaklarınızın ucuna getirin</p>
                </div>
                <div className="features-grid">
                    <FeatureCard
                        gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        title="Etkinlikleri Keşfet"
                        description="Çevrenizde olan tüm etkinlikleri gerçek zamanlı olarak görüntüleyin ve filtreleyin"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        }
                    />
                    <FeatureCard
                        gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                        title="Yeni İnsanlarla Tanış"
                        description="Ortak ilgi alanlarına sahip insanlarla bağlantı kurun ve yeni arkadaşlıklar edinin"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        }
                    />
                    <FeatureCard
                        gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                        title="Etkinlik Oluştur"
                        description="Kendi etkinliklerinizi kolayca oluşturun, yönetin ve katılımcıları davet edin"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        }
                    />
                    <FeatureCard
                        gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                        title="Konum Tabanlı"
                        description="Size en yakın etkinlikleri GPS ile tespit edin, harita üzerinde görüntüleyin"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        }
                    />
                    <FeatureCard
                        gradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
                        title="Kategori Filtreleme"
                        description="Müzik, spor, sanat, teknoloji ve daha fazla kategoriye göre etkinlikleri filtreleyin"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1="7" y1="7" x2="7.01" y2="7" />
                            </svg>
                        }
                    />
                    <FeatureCard
                        gradient="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
                        title="Bilet & Check-in"
                        description="Biletlerinizi uygulamadan alın, QR kod ile kolay check-in yapın"
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" />
                                <line x1="10" y1="1" x2="10" y2="4" />
                                <line x1="14" y1="1" x2="14" y2="4" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
