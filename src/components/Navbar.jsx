import React, { useState, useEffect } from 'react';
import RippleButton from './RippleButton';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setScrolled(currentScroll > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none' }}>
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="14" fill="#6366F1" stroke="#818CF8" strokeWidth="2" />
                            <path d="M16 8L20 14H12L16 8Z" fill="white" />
                            <path d="M12 16H20V22C20 23.1 19.1 24 18 24H14C12.9 24 12 23.1 12 22V16Z" fill="white" />
                        </svg>
                        <span>Eventflow</span>
                    </div>
                    <ul className="nav-links" style={{ display: menuOpen ? 'flex' : undefined, flexDirection: menuOpen ? 'column' : 'row', position: menuOpen ? 'absolute' : 'static', top: menuOpen ? '100%' : 'auto', left: menuOpen ? 0 : 'auto', right: menuOpen ? 0 : 'auto', background: menuOpen ? 'white' : 'transparent', padding: menuOpen ? '20px' : 0, boxShadow: menuOpen ? '0 10px 20px rgba(0,0,0,0.1)' : 'none' }}>
                        <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Özellikler</a></li>
                        <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Nasıl Çalışır</a></li>
                        <li><a href="#download" onClick={(e) => handleNavClick(e, '#download')}>İndir</a></li>
                    </ul>
                    <RippleButton className="btn-primary" style={{ display: window.innerWidth <= 968 ? 'none' : 'block' }}>
                        Hemen Başla
                    </RippleButton>
                    <button
                        className="mobile-menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                    {/* Add inline media query styling for mobile button fallback */}
                    <style>
                        {`
                        @media (max-width: 968px) {
                            .mobile-menu-button { display: block !important; }
                        }
                        `}
                    </style>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
