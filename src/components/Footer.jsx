import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                            <img src="/logo.png" alt="EventFlow Logo" width="32" height="32" />
                            <span>Eventflow</span>
                        </Link>
                        <p>Etkinlikleri keşfet, katıl, tanış.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li><Link to="/help">Help Center</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Eventflow. Tüm hakları saklıdır.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
