import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
    { src: '/images/hero.png', alt: 'Interior de The Coffee Road', span: 'large' },
    { src: '/images/espresso.png', alt: 'Espresso artesanal', span: 'small' },
    { src: '/images/barista.png', alt: 'Barista preparando café', span: 'small' },
    { src: '/images/latte.png', alt: 'Latte premium', span: 'medium' },
    { src: '/images/pourover.png', alt: 'Pour over V60', span: 'small' },
    { src: '/images/experience.png', alt: 'Experiencia premium', span: 'medium' },
];

export default function Gallery() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="gallery" className="section gallery" ref={ref}>
            <div className="container">
                <motion.div
                    className="gallery__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Galería</span>
                    <h2 className="section-title">
                        Momentos en <em>The Coffee Road</em>
                    </h2>
                </motion.div>

                <div className="gallery__grid">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            className={`gallery__item gallery__item--${img.span}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                        >
                            <img src={img.src} alt={img.alt} className="gallery__image" />
                            <div className="gallery__item-overlay">
                                <Instagram size={24} strokeWidth={1.5} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="gallery__cta"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <Instagram size={16} strokeWidth={1.5} />
                        Síguenos en Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
