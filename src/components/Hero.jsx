import React, { useEffect, useRef, useState } from 'react';
import RippleButton from './RippleButton';

const StatCounter = ({ endValue, suffix, label }) => {
    const [count, setCount] = useState(0);
    const statRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let current = 0;
                const duration = 2000;
                const increment = endValue / (duration / 16);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= endValue) {
                        setCount(endValue);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, 16);

                observer.unobserve(statRef.current);
            }
        }, { threshold: 0.5 });

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            if (statRef.current) observer.unobserve(statRef.current);
        };
    }, [endValue]);

    return (
        <div className="stat-item" ref={statRef}>
            <h3>{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};

const Hero = () => {
    const heroImageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroImageRef.current) {
                const scrolled = window.pageYOffset;
                heroImageRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="badge">🎉 Yeni Etkinlikler Her Gün</span>
                        <h1>Çevrenizdeki Etkinlikleri Keşfedin</h1>
                        <p className="hero-description">
                            Eventflow ile yakınınızdaki etkinlikleri keşfedin, ilgi alanlarınıza uygun aktivitelere katılın,
                            yeni insanlarla tanışın ve kendi etkinliklerinizi oluşturun.
                        </p>
                        <div className="hero-buttons">
                            <RippleButton className="btn-large btn-primary">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 2L3 7V17H8V12H12V17H17V7L10 2Z" fill="currentColor" />
                                </svg>
                                Uygulamayı İndir
                            </RippleButton>
                            <RippleButton className="btn-large btn-secondary">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 7L13 10L8 13V7Z" fill="currentColor" />
                                </svg>
                                Nasıl Çalışır?
                            </RippleButton>
                        </div>
                        <div className="stats">
                            <StatCounter endValue={50} suffix="K+" label="Aktif Kullanıcı" />
                            <StatCounter endValue={10} suffix="K+" label="Etkinlik" />
                            <StatCounter endValue={150} suffix="+" label="Şehir" />
                        </div>
                    </div>
                    <div className="hero-image" ref={heroImageRef}>
                        <div className="phone-mockup">
                            <div className="phone-frame">
                                <div className="phone-screen">
                                    <div className="app-preview">
                                        <div className="event-card-preview">
                                            <div className="event-image"></div>
                                            <div className="event-info">
                                                <h4>Müzik Festivali</h4>
                                                <p>15 Ekim • İstanbul</p>
                                            </div>
                                        </div>
                                        <div className="event-card-preview" style={{ animationDelay: '1.5s' }}>
                                            <div className="event-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
                                            <div className="event-info">
                                                <h4>Sanat Galerisi</h4>
                                                <p>20 Ekim • Ankara</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
