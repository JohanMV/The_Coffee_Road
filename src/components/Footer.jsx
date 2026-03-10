import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Top Section */}
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <Coffee size={28} strokeWidth={1.5} />
                            <div>
                                <span className="footer__logo-name">The Coffee Road</span>
                                <span className="footer__logo-tagline">Café de Especialidad Premium</span>
                            </div>
                        </div>
                        <p className="footer__brand-text">
                            Un santuario para los amantes del café excepcional. Cada taza es
                            un viaje por los mejores orígenes del mundo, tostada con pasión
                            y servida con devoción artesanal.
                        </p>
                        <div className="footer__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Navegación</h4>
                        <ul className="footer__links">
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#about">Nosotros</a></li>
                            <li><a href="#specialties">Especialidades</a></li>
                            <li><a href="#menu">Menú</a></li>
                            <li><a href="#gallery">Galería</a></li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Horarios</h4>
                        <ul className="footer__links footer__schedule">
                            <li>
                                <span>Lunes — Viernes</span>
                                <span>7:00 — 22:00</span>
                            </li>
                            <li>
                                <span>Sábado</span>
                                <span>8:00 — 23:00</span>
                            </li>
                            <li>
                                <span>Domingo</span>
                                <span>8:00 — 21:00</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Contacto</h4>
                        <ul className="footer__contact">
                            <li>
                                <MapPin size={14} strokeWidth={1.5} />
                                <span>Av. Reforma 245, Col. Juárez,<br />CDMX, México 06600</span>
                            </li>
                            <li>
                                <Phone size={14} strokeWidth={1.5} />
                                <span>+52 (55) 1234-5678</span>
                            </li>
                            <li>
                                <Mail size={14} strokeWidth={1.5} />
                                <span>hola@thecoffeeroad.mx</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer__divider" />

                {/* Bottom */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} The Coffee Road. Todos los derechos reservados.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos de Servicio</a>
                    </div>
                    <button onClick={scrollToTop} className="footer__back-top" aria-label="Volver arriba">
                        <ArrowUp size={18} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
