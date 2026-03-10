import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Especialidades', href: '#specialties' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Menú', href: '#menu' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Galería', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__logo">
            <Coffee className="navbar__logo-icon" size={28} strokeWidth={1.5} />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">The Coffee Road</span>
              <span className="navbar__logo-tagline">EST. 2018</span>
            </div>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#reservation" className="navbar__cta btn-primary">
            Reservar Mesa
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu__content">
              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="mobile-menu__link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mobile-menu__link-number">0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#reservation"
                className="btn-primary mobile-menu__cta"
                onClick={() => setMobileOpen(false)}
              >
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
