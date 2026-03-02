import React, { useEffect, useRef } from 'react';

const Step = ({ number, title, description }) => {
    const stepRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.style.opacity = '1';
                entries[0].target.style.transform = 'translateY(0)';
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        if (stepRef.current) {
            stepRef.current.style.opacity = '0';
            stepRef.current.style.transform = 'translateY(30px)';
            stepRef.current.style.transition = 'all 0.6s ease-out';
            observer.observe(stepRef.current);
        }

        return () => {
            if (stepRef.current) observer.unobserve(stepRef.current);
        };
    }, []);

    return (
        <div className="step" ref={stepRef}>
            <div className="step-number">{number}</div>
            <div className="step-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Nasıl Çalışır</span>
                    <h2>Sadece 3 Adım</h2>
                    <p>Eventflow'u kullanmaya başlamak çok kolay</p>
                </div>
                <div className="steps">
                    <Step
                        number="1"
                        title="Uygulamayı İndirin"
                        description="App Store veya Google Play'den ücretsiz olarak indirin"
                    />
                    <Step
                        number="2"
                        title="İlgi Alanlarınızı Seçin"
                        description="Size uygun etkinlikleri önermemiz için tercihlerinizi belirleyin"
                    />
                    <Step
                        number="3"
                        title="Keşfetmeye Başlayın"
                        description="Etkinliklere katılın, yeni insanlarla tanışın ve eğlenin!"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
