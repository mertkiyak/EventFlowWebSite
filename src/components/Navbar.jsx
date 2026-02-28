import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RippleButton from './RippleButton';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

        if (location.pathname !== '/') {
            navigate('/' + targetId);
            setMenuOpen(false);
            return;
        }

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setMenuOpen(false);
        }
    };

    // Scroll automatically if navigated from another page with hash
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            setTimeout(() => {
                const target = document.querySelector(location.hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }, [location]);

    return (
        <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none' }}>
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'var(--dark)' }}>
                        <img src="/logo.png" alt="EventFlow Logo" width="32" height="32" />
                        <span>Eventflow</span>
                    </Link>
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
