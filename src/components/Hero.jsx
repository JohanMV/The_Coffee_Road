import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Clock } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Background Image with Overlay */}
            <div className="hero__bg">
                <img src="/images/hero.png" alt="The Coffee Road interior" className="hero__bg-img" />
                <div className="hero__overlay" />
            </div>

            {/* Decorative Elements */}
            <div className="hero__grain" />

            <div className="hero__content container">
                <div className="hero__text">
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="hero__badge-dot" />
                        Café de Especialidad Premium
                    </motion.div>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Donde Cada Taza
                        <br />
                        Cuenta una <em>Historia</em>
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Granos selectos de origen único, tostados con maestría artesanal.
                        Una experiencia sensorial que despierta los sentidos y alimenta el alma.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <a href="#menu" className="btn-primary">
                            Explorar Menú
                        </a>
                        <a href="#about" className="btn-outline">
                            Nuestra Historia
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero__info"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <div className="hero__info-item">
                            <MapPin size={14} strokeWidth={1.5} />
                            <span>Av. Reforma 245, CDMX</span>
                        </div>
                        <div className="hero__info-divider" />
                        <div className="hero__info-item">
                            <Clock size={14} strokeWidth={1.5} />
                            <span>Lun - Dom · 7:00 — 22:00</span>
                        </div>
                    </motion.div>
                </div>

                {/* Stats sidebar */}
                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-number">12+</span>
                        <span className="hero__stat-label">Orígenes del Mundo</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">8K+</span>
                        <span className="hero__stat-label">Clientes Felices</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">6</span>
                        <span className="hero__stat-label">Años de Excelencia</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <span>Descubrir</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={16} strokeWidth={1.5} />
                </motion.div>
            </motion.a>
        </section>
    );
}
