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
                            <h4>Destek</h4>
                            <ul>
                                <li><Link to="/yardim">Yardım Merkezi</Link></li>
                                <li><Link to="/iletisim">İletişim</Link></li>
                                <li><Link to="/gizlilik">Gizlilik</Link></li>
                                <li><Link to="/hizmet-ve-kosullar">Hizmet ve Koşullar</Link></li>
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
